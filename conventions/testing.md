# Testing Conventions

<!--
This document tells your agent how to write tests in your codebase.
Fill in the sections that apply to your stack.
-->

## Test Stack

<!--
List your testing frameworks and libraries.
-->

- Test framework: [JUnit 5 / XCTest / Jest / pytest / etc.]
- Assertions: [AssertK / XCTAssert / Chai / etc.]
- Mocking: [Mockito / OCMock / Jest mocks / etc.]
- Async testing: [coroutines-test / Combine testing / etc.]

## Test Naming

<!--
How should tests be named? Consistent naming makes tests readable.
-->

```
// Example: backtick descriptive names
fun `shows error when deletion fails`()

// Example: given-when-then
fun givenNoNetwork_whenFetchCalled_thenReturnsError()

// Example: should-style
it('should display error message when API returns 500')
```

## Test Design Principles

### Exercise production code, never re-implement logic in tests

If the test defines its own version of the logic being tested (e.g., a private helper that duplicates a boolean expression from production), it becomes tautological. It asserts its own implementation, not the shipped behavior. Tests must call the actual production class.

- Bad: `private fun shouldBlock(a: Boolean, b: Boolean) = a && !b` inside a test class
- Good: Instantiate the real class and call its method

### Cover the full boolean matrix

When behavior depends on N boolean inputs, enumerate all 2^N combinations. For 2 booleans, that's 4 test cases. Missing a combination leaves a gap where a future regression hides.

### Fakes over mocks for data layer

<!--
Adjust this based on your team's preference. Some teams prefer mocks.
The principle: whatever you choose, be consistent.
-->

Hand-rolled fakes that implement the interface are preferred over mocking frameworks for repositories and data sources. Fakes are:
- Easier to read (the behavior is explicit)
- Easier to maintain (no framework magic)
- More reliable (no ordering sensitivity)

For methods not under test, use `error("Not used in this test")` to make unused paths fail loudly.

### Deterministic synchronization over arbitrary delays

When a test needs to wait for async work to complete, use deterministic mechanisms (CompletableDeferred, TestScheduler, etc.) rather than `delay(500)` or `Thread.sleep()`.

- Bad: `delay(500); assertThat(result).hasSize(20)` (flaky, arbitrary)
- Good: `val result = recorder.awaitCompleted(20); assertThat(result).hasSize(20)` (deterministic)

### Prove timeout behavior by construction

When testing that production code fails fast on a hung call, use a fake that suspends forever. The test only passes if the production timeout fires. If the timeout is removed, the test hangs and fails via the test framework's built-in timeout.

- Bad: `assertThat(elapsed).isLessThan(6.seconds)` (timing-based, flaky on slow CI)
- Good: Fake hangs forever, test passes only if production timeout fires

## What Needs Tests

<!--
Define your coverage expectations. Not everything needs a test.
-->

- Behavioral changes: always
- Bug fixes: always (the test proves the fix)
- Pure UI layout changes: rarely (snapshot tests if available)
- Configuration changes: only if they affect runtime behavior

## Test File Organization

<!--
Where do tests live relative to production code?
-->

```
[your test structure]
src/
├── main/          # Production code
└── test/          # Unit tests (mirror the main/ structure)
```
