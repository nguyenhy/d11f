# d11f

d11f, built on Directus 11.17.4 (BSL-licensed), with original features and selected backported fixes.

  <br />

## What this is

d11f is an independent, self-hosted fork maintained for our own internal use. It is **not affiliated with, endorsed by,
or officially connected to Directus / Monospace, Inc.** in any way.

- **Base:** [Directus](https://directus.io) v11.17.4 (unmodified upstream), licensed under the Business Source License
  (BSL) 1.1.
- **Our changes:** a small set of original features plus specific bug fixes backported from later upstream Directus
  releases. Nothing beyond what's explicitly listed in [CHANGELOG.md](./CHANGELOG.md) has been added or modified.
- **What we deliberately did not include:** any license-key-gated functionality from newer Directus releases (SSO,
  custom LLM integration, custom permission rules, AI translations, etc.). d11f only ever incorporates functionality
  that was freely available in the version it's based on, or that we wrote ourselves.

See [CHANGELOG.md](./CHANGELOG.md) for the itemized, commit-referenced list of everything that differs from stock
Directus 11.17.4.

  <br />

## License

d11f is derived from Directus, which is licensed under [the Business Source License (BSL) 1.1](./license) with a
permissive additional use grant from Monospace, Inc. The original license terms are preserved unmodified in
[`license`](./license) and apply to this fork in full.

In short: free for individuals and organizations under $5M in annual revenue/funding; a commercial license from
Monospace, Inc. is required above that threshold. We are not a party to that grant on your behalf — if you use d11f, you
are responsible for your own compliance with the upstream license terms, same as if you were running stock Directus.

Our own modifications (the parts listed in CHANGELOG.md that are not present in upstream Directus) are provided as-is,
with no warranty, under the same license terms as the base project.

  <br />

## Support

This is an internal fork, not a community project. There is no public support channel, roadmap, or issue tracker beyond
what we maintain for our own use. For questions about Directus itself (not our modifications), refer to
[the official Directus documentation](https://docs.directus.io) and
[the official Directus repository](https://github.com/directus/directus).

  <br />

## Attribution

Directus® is a trademark of Monospace, Inc. This project is an independent fork of their open-source-available software
and makes no claim to their trademarks, branding, or commercial offerings.

What I removed from the original and why:

- Directus logo image — trademark, no reason to display it as your repo's own branding
- "Directus Cloud" promo section — their commercial upsell, irrelevant and confusing under your repo name
- Railway one-click-deploy button — it embeds directus-official and a referral code; keeping it would deploy actual
  Directus, not your fork, and misattributes referral credit
- Discord/Twitter/Community/Roadmap links — those are Directus's own support channels, not yours; pointing users there
  under your project name is misleading
- Contributing guide / GitHub Sponsors — not applicable, this isn't an open community project

What I added: explicit non-affiliation statement, a scoped description matching what we worked out earlier, a pointer to
CHANGELOG.md for the itemized backport list, and a license section that's accurate but doesn't imply Directus is
co-signing your redistribution.
