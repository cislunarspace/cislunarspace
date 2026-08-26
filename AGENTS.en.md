[English](AGENTS.md) | 简体中文

# AGENTS.md

> Chinese is the canonical version of this file; this translation serves non-Chinese collaborators. Where the two differ, the Chinese text prevails.

## Language of communication

Always communicate with the user in Chinese. Code, commit messages, PR descriptions, and other technical output are in Chinese as well.

## Writing standards

All human-facing text (comments, CONTEXT.md, ADRs, issue comments, PR descriptions, agent briefs, triage notes, Sphinx docs, agent replies) follows these principles:

- **Summarize the material well**: get the material complete and accurate, then separate the essential from the incidental, the true from the false, connecting facts and digging to their essence. Don't pile up details or stitch together lists.
- **You can only write what you understand**: if you keep rewriting and it still isn't clear, you probably don't understand the subject yet; once you do, the writing gains force.
- **Logic, accuracy, sharpness**: the order of the whole piece must be logical and clearly motivated; use words precisely, keep adjacent concepts distinct — no mixing, no blur. Sharp viewpoints, no padding. Avoid inflated modifiers ("authoritative", "powerful", "comprehensive", "single source of truth", and the like) — they weaken the writing.
- **Cut filler mercilessly.**
- **Readability is the baseline**: fluent prose that a reader gets through and remembers. If nothing sticks after reading, it's a bad piece.
- **Plain, approachable, from small to large, near to far**: start from what the reader already knows or has at hand, then extend to the unfamiliar and abstract. Never open with grand narratives or name-dropping.
- **Meet the reader as an equal**: persuade through analysis, never intimidate with posturing; do honest work.
- **Know your audience before writing**: who reads this? who benefits? how does it benefit more people?

## Coding guidelines

LLMs make predictable coding mistakes — the same few, over and over. These are rules, not suggestions.

### 1. Read before you write

The biggest root cause of LLMs producing bad code: not reading the existing codebase before writing new code. You see a task, match it against a pattern from your training data, and start generating. This is almost always wrong.

Before writing anything:

- Read the files you're about to change. Not skim — read.
- See how similar things are done elsewhere in the project. If there's an established pattern, follow it; if a utility function already half-does what you need, use it.
- Look at the imports at the top of files — they tell you which libraries this project actually uses. If everything uses fetch, don't introduce axios; if it uses native methods, don't introduce lodash.
- Read test files — they tell you what the expected behavior actually is.

If you're not 100% sure that a method exists with exactly that signature, check the docs or read the project's actual source code. Confidently using an API that doesn't exist, or a parameter that was removed, is the classic knowledge hallucination.

If you're unsure how something is done in this project, say so: "I don't see a precedent for X in the codebase — should I follow Y's approach, or build fresh?" That always beats guessing.

### 2. Think before you act

Don't write code before you know exactly what you're building.

**State your assumptions.** "Add auth" could mean session cookies, JWT, OAuth, basic auth, or five other things. Don't silently pick one. Say: "I assume you want JWT-based auth with refresh tokens stored in httpOnly cookies. Tell me if you meant otherwise."

**Name the trade-offs.** Nearly every implementation choice has a cost. A cache trades memory for speed and introduces cache invalidation to worry about forever after. Say it before writing — the user may reply: "Actually, I don't want that complexity."

**Flag architecture decisions** (database schema, API shape, auth strategy). These are hard to undo; the user deserves to know.

**When multiple approaches exist, list them briefly.** Two, at most three, with a recommendation: A is simpler but doesn't handle edge case X; B covers everything but adds a dependency on Z. Unless you expect X to actually happen, I'd pick A.

**Stop when confused.** Never fill confusion with plausible-sounding code. Say plainly where you're stuck, and ask.

### 3. Be minimal

Write the least code that solves the problem — not the least theoretically possible, but the least that actually solves this specific problem now.

The urge to over-engineer is strong. Resist it. Typical forms:

**Premature abstraction.** The user asked for `sendWelcomeEmail(user)`; you wrote an EmailService with strategy patterns and pluggable providers. When they truly need more, they'll ask.

```python
# Bad
class EmailService:
    def __init__(self, provider: EmailProvider, template_engine: TemplateEngine):
        self.provider = provider
        self.template_engine = template_engine

    async def send(self, template: str, context: dict, recipient: str, **kwargs):
        rendered = self.template_engine.render(template, context)
        await self.provider.send(recipient, rendered, **kwargs)

# Good
async def send_welcome_email(user):
    body = f"Welcome {user.name}! Your account is ready."
    await send_email(to=user.email, subject="Welcome", body=body)
```

Duplication is far cheaper than wrong abstraction. Copy-paste twice first; abstract later.

**Speculative error handling.** try/catch around impossible errors, null checks on values that are never null — every such line is a line someone else must read. Handle only errors that will really happen.

**Unnecessary configurability.** Batch size as a parameter, retry count as config, environment variables for things that will never change. Every option is a decision someone must make and a value someone must set correctly. Hardcode until there's a real reason.

**Dead flexibility.** Interfaces with one implementation, abstract base classes with one subclass — they cost cognitive overhead and indirection, and yield zero benefit until a second implementation actually appears.

Test: when someone unfamiliar asks "why so abstract?" and the answer is "in case we need it" — that's over-engineering. "In case we need it" is not a requirement; it's speculation about the future, and such guesses are usually wrong.

### 4. Precise changes

When modifying existing code, smaller diffs are better. Every line you change may introduce bugs, needs review, and lives forever in git blame.

**Don't touch what you weren't asked to touch.** Fixing a bug in function A and notice weird variable names in function B? Leave it. Typo in function C's comment? Leave it. Import order not to your taste? Leave it.

**Match existing style.** Single quotes? Use single quotes. `snake_case`? Use `snake_case`. No semicolons? Add none. Consistency within the file beats personal preference.

**Clean up after yourself, not after others.** Your change orphaned an import? Delete it. But only changes caused by your work — pre-existing dead code isn't yours.

**Don't reformat.** Don't run prettier on files that didn't use it, don't convert 4-space indent to 2, don't reorder imports that weren't alphabetical. Reformatting creates massive diffs that drown your real changes.

Test: every changed line in the diff maps directly to what was asked. Anything extra that slipped in — revert it.

### 5. Verify

Between code that runs and code you believe runs lies the difference: tests.

**Write the test first when fixing bugs.** Write a test reproducing the bug, watch it fail, fix the bug, watch it pass. It's the only way to prove you fixed it rather than made symptoms disappear.

**Run existing tests before and after your change.** Passed before, fails after — you broke something. Already failing before? Say so; don't let your change take the blame for pre-existing failures.

**Test behavior, not implementation.** Tests checking that a constructor set properties are worthless; tests checking that validation actually blocks bad input have value.

**Think beyond the happy path.** What happens when the API returns 500? When the file doesn't exist? When the user submits an empty form?

**If you can't write tests, say why.** DB calls tightly coupled with business logic, hard to test in isolation — that's a refactoring signal. Don't silently skip tests and hope for the best.

### 6. Be goal-driven

Every task needs clear success criteria before starting. Vague criteria: make them specific; if you can't, ask.

Turn vague tasks into verifiable ones:

- Add validation → reject missing/invalid email with 400 explaining what's wrong, plus tests for both cases
- Fix a bug → write a test reproducing the reported behavior, make it pass, confirm existing tests still pass
- Improve performance → profile first, locate the bottleneck, fix that one concrete problem, measure again

Multi-step work: state the plan before executing:

```
Plan:
1. Add the new database column via migration
2. Update the model with the new field
3. Modify the API endpoint to accept & return the field
4. Add validation for the field
5. Write tests for the new behavior
6. Run the full suite to check for regressions
```

This lets users catch bad ideas before you waste time, and forces you to think each step through.

### 7. Debugging

Something doesn't work? Don't guess. Investigate.

**Read the entire error message.** All of it, including the stack trace. Generating a fix based only on the exception type without reading what it says is a common bad habit. One TypeError can mean a hundred things; the message and stack trace tell you which.

**Reproduce first.** No reproduction means no way to verify the fix. "I think this should fix it" isn't debugging — it's gambling.

**Change one thing at a time.** Changed three places and the bug vanished? You don't know which fixed it, nor whether the other two introduced new bugs. Change one, test. Then next.

**No workarounds before understanding the root cause.** A value is unexpectedly null — find out why. A null check may prevent the crash, but the underlying bug remains and will resurface wearing different clothes.

**When stuck, say so.** "I tried X and Y, neither worked; here's what I see; I suspect Z but I'm not sure." Far more useful than twenty rounds of silent flailing.

### 8. Dependencies

Think before adding dependencies. Every dependency is code you don't control, permanently part of the project — maintained, updated, audited for security. The cost is almost always higher than it looks.

Before adding a package:

- Can existing project capabilities do it? axios present → no node-fetch; date-fns present → no moment.
- Can the standard library do it? `Array.prototype.map` doesn't need lodash; `crypto.randomUUID()` exists → no uuid.
- Check recent commit dates and issues to judge whether it's maintained.
- How big is it? A 500KB package for date formatting rarely pays off.

If you really add one, state why. Silently stuffing package.json: no.

### 9. Communication

How you communicate about code matters as much as the code.

**Say what you did and why.** "I extracted the validation logic into its own function because it repeated across three endpoints; this also makes it independently testable." Users grasp the change without reading every line.

**Flag concerns.** "This works, but it hits the database once per list item — it'll slow down on large lists. Want me to batch it?" Proactive communication saves hours later.

**State precisely what you're uncertain about.** "I'm not sure whether this library supports streaming responses" is useful; "I think it should work" is not. The former tells the user what to verify.

**Don't explain what the user already knows.** Match the level of explanation to the knowledge they've shown.

**Be specific in commit messages.** "Fix bug" is useless. "Fix null pointer in user query when email contains uppercase characters" tells the next person what happened.

### 10. Common failure modes

These are my most frequently observed patterns. Catch yourself doing any of these — stop and rethink.

**Kitchen sink.** Asked to add one feature, you refactor half the codebase along the way. Don't. Do the one thing.

**Wrong abstraction.** You built a beautiful general solution for a problem that exists in exactly one place. Duplication is cheaper than wrong abstraction. Copy-paste twice first.

**Invisible decisions.** You made an architecture choice (database schema, API shape, auth strategy) without flagging it as a decision. These choices are hard to undo; the user must know you made them.

**Happy path only.** Your code handles the happy path perfectly and ignores or crashes on everything else. What happens when the API returns 500? When the file doesn't exist? Empty form?

**Knowledge hallucination.** Confidently using an API that doesn't exist, a parameter removed two versions ago, or an imaginary library feature. Not 100% sure of the exact signature? Say so. Check docs. Read the real source.

**Style drift.** You write in your preferred style instead of matching the project. Functional in an OOP codebase. Classes in a functional codebase. TypeScript idioms in a JavaScript project. Match the codebase, not your preferences.

**Runaway refactoring.** You fix one spot. It touches another. Then another. Twenty minutes later you've modified 15 files and lost track of the original goal. When fixes cascade, stop. Tell the user what's happening. Get consent before continuing.

The signs these guidelines are working: fewer unnecessary lines in diffs, less rework caused by over-complexity, clarifying questions asked before implementing rather than after mistakes.
