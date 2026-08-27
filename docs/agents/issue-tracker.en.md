[English](issue-tracker.en.md) | [简体中文](issue-tracker.md)

# Issue tracker: GitHub

This repo's issues and PRDs live in GitHub Issues. All operations use the `gh` CLI.

## Conventions

- **Create issue**: `gh issue create --title "..." --body "..."`. Use heredocs for multi-line bodies.
- **Read issue**: `gh issue view <number> --comments`, filter comments with `jq`, and fetch labels too.
- **List issues**: `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`; add `--label` and `--state` filters as needed.
- **Comment**: `gh issue comment <number> --body "..."`
- **Add / remove labels**: `gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **Close**: `gh issue close <number> --comment "..."`

Derive the repo from `git remote -v`; `gh` detects it automatically when run inside a clone.

## Pull requests as a triage channel

**PRs as a request channel: yes.** External PRs follow the same labels and states as issues, using the `gh pr` equivalents:

- **Read PR**: `gh pr view <number> --comments`, `gh pr diff <number>` for the diff.
- **List external PRs awaiting triage**: `gh pr list --state open --json number,title,body,labels,author,authorAssociation,comments`, keeping only those whose `authorAssociation` is `CONTRIBUTOR`, `FIRST_TIME_CONTRIBUTOR`, or `NONE` (drop `OWNER`/`MEMBER`/`COLLABORATOR`).
- **Comment / label / close**: `gh pr comment`, `gh pr edit --add-label`/`--remove-label`, `gh pr close`.

GitHub shares the number space between issues and PRs, so `#42` could be either — check with `gh pr view 42`, falling back to `gh issue view 42`.

## When a skill says "publish to the issue tracker"

Create a GitHub issue.

## When a skill says "fetch related tickets"

Run `gh issue view <number> --comments`.
