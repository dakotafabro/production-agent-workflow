# Testing Conventions - Android

## Test Stack

- Test framework: JUnit 5
- Assertions: AssertK
- Mocking: Mockito-Kotlin (sparingly)
- Async testing: kotlinx-coroutines-test
- Flow testing: Turbine
- Snapshot testing: Paparazzi

## Test Naming

Backtick descriptive names:

```kotlin
@Test
fun `shows error when deletion fails`() { ... }

@Test
fun `blocks purchase when content is explicit and user is restricted`() { ... }
```

## Test Design Principles

### Exercise production code, never re-implement logic in tests

If the test defines its own version of the logic being tested, it becomes tautological. Tests must call the actual production class.

```kotlin
// BAD: re-implements the logic inside the test
private fun shouldBlock(isExplicit: Boolean, isAllowed: Boolean) = isExplicit && !isAllowed

@Test
fun `blocks when explicit and not allowed`() {
    assertThat(shouldBlock(true, false)).isTrue()  // tests nothing real
}

// GOOD: exercises the actual production class
@Test
fun `blocks when explicit and not allowed`() {
    val gate = PurchaseGate(isExplicit = true, isAllowed = false)
    assertThat(gate.shouldBlock()).isTrue()
}
```

### Cover the full boolean matrix

When behavior depends on N boolean inputs, enumerate all 2^N combinations. For 2 booleans (isExplicit x isAllowed), that's 4 test cases.

### Fakes over mocks for repositories

Hand-rolled fakes that implement the interface. For unused methods: `error("Not used in this test")`.

```kotlin
class FakeTrackRepository : TrackRepository {
    private val tracks = mutableListOf<Track>()

    override suspend fun getAll(): List<Track> = tracks
    override suspend fun save(track: Track) { tracks.add(track) }
    override suspend fun delete(id: String) { tracks.removeAll { it.id == id } }

    // Not under test in this file
    override suspend fun sync() = error("Not used in this test")
}
```

### Prove timeout behavior by construction

Use `awaitCancellation()` in fakes to simulate permanently stalled suspends. The test only passes if the production timeout fires.

```kotlin
class StallingRepository : LyricsRepository {
    override suspend fun fetch(id: String): Lyrics {
        awaitCancellation()  // hangs forever
    }
}

@Test
fun `retries after timeout on stalled fetch`() = runTest {
    val repository = StallingRepository()
    val poller = LyricsPoller(repository, timeout = 2.seconds)

    val result = poller.poll("track-1")

    assertThat(result.attempts).isGreaterThan(1)
}
```

### Test batch isolation with SupervisorJob

Prove isolation by stalling one batch and asserting siblings complete independently.

### Use CompletableDeferred for deterministic synchronization

```kotlin
// BAD
delay(500)
assertThat(persisted).hasSize(20)

// GOOD
val result = recorder.awaitPersisted(count = 20)
assertThat(result).hasSize(20)
```

## Test Dependencies

```kotlin
testImplementation(platform(libs.test.junit.bom))
testImplementation(libs.test.junit.api)
testRuntimeOnly(libs.test.junit.engine)
testRuntimeOnly(libs.test.junit.platform.launcher)
testImplementation(libs.test.assertk)
testImplementation(libs.test.kotlinxCoroutines)
testImplementation(libs.test.turbine)
testImplementation(libs.test.mockitoKotlin)
```

Required in `build.gradle.kts`:
```kotlin
tasks.withType<Test> { useJUnitPlatform() }
```

## What Needs Tests

- Behavioral changes: always
- Bug fixes: always (the test proves the fix)
- Repository logic (filtering, gating, mapping): always
- ViewModel state transitions: when non-trivial
- Pure UI layout changes: snapshot tests if available
- Configuration-only changes: only if they affect runtime behavior

## Dependency Awareness

When injecting a new dependency, verify that its return types and parameter types compile in your module. Even nullable parameters and ignored return values must be resolvable at the call site.

Before pushing:
1. Check the return type of any new method you're calling
2. Check the parameter types (even nullable ones)
3. Run `./gradlew :your:module:compileDebugKotlin` locally
