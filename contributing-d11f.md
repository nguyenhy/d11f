# Contributing to d11f

This describes how to contribute to d11f — the parts of this repository developed independently after the v11.17.4
upstream Directus fork point. For the original upstream contributing process this codebase started from, see
[contributing.md](./contributing.md) (historical reference only, not applicable to d11f changes).

## Scope

d11f only accepts:

- Independent bug fixes for issues observed in this codebase or documented in later upstream releases
- Original features developed independently

d11f does not accept:

- Code copied or adapted from newer upstream Directus releases
- License-key-gated functionality (SSO, custom LLM integration, custom permission rules, AI translations, etc.)

See [readme.md](./readme.md) for the full scope and licensing context, and [AGENTS.md](./AGENTS.md) for repository
conventions (code style, testing, changesets).

## Process

1. Open an issue describing the bug/behavior (symptom-based — what's observed, not what upstream PR it resembles)
2. Fixes should be developed from observed behavior/error logs, not by diffing against newer upstream source
3. Follow the code style and testing conventions in [AGENTS.md](./AGENTS.md)
4. Every change requires a changeset (`pnpm changeset`) — see [AGENTS.md](./AGENTS.md#changesets) for format
5. Document the change in `CHANGELOG.md`

## Questions

For anything not covered here, refer to [AGENTS.md](./AGENTS.md) or ask the maintainers directly.
