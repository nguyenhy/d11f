# packages/

Shared packages consumed by `directus`, `app`, and `api`. Some are core Directus
product code (BUSL-1.1), some are generic utilities (MIT). See license table below
before publishing, renaming, or reusing any package here.

## Package Namespace & Docker Image Rename

Packages in this fork publish under the `@d11f` npm scope (renamed from
`@directus/*`), and the Docker image publishes under our own Docker Hub namespace
(renamed from `directus/directus`).

**Reason for rename:** distribution convenience only. Renaming lets consumers of
this fork install/pull our modified build directly (`npm install @d11f/x`,
`docker pull <our-namespace>/d11f`) without needing to clone this repo and rebuild
themselves. It is not a rebrand of the underlying product, not a claim of
endorsement, and not a trademark claim.

**License still applies per-package, unchanged by the rename:**

- Packages marked `"license": "BUSL-1.1"` in their own `package.json` remain
  governed exclusively by Directus/Monospace, Inc.'s Business Source License 1.1
  terms in [`../license`](../license) and https://directus.io/pricing —
  Additional Use Grant, Change Date, and commercial-license requirements
  included. Users remain solely responsible for their own BUSL compliance
  directly with Monospace, Inc.
- Packages marked `"license": "MIT"` in their own `package.json` are **not**
  Directus-licensed content and are **not** subject to BUSL terms. They carry
  only the MIT license already declared in that package.

Renaming the npm scope/Docker namespace changes *how* a package is installed,
not *which* license governs it — check each package's own `license` field for
the terms that actually apply.

`Directus®` is a trademark of Monospace, Inc. `d11f` claims no rights to that
mark; namespace rename exists solely so this fork's build artifacts are
directly consumable.

## Per-Package License Reference

Each row links to two things: the `package.json` field that *declares* the
license, and the actual `license` file that *contains* the legal text. Keep
both in sync — if one changes without the other, that's a bug to fix, not a
discrepancy to ignore.

⚠️ **Known drift:** root [`../license`](../license) says Copyright © 2026;
several per-package `license` files (e.g. `../api/license`,
`schema-builder/license`) still say © 2025. Not yet reconciled — flag before
any public release.

| Package (npm name) | License | Declared in | License text |
|---|---|---|---|
| `directus` | BUSL-1.1 | [package.json](../directus/package.json) | [license](../directus/license) |
| `@directus/app` | BUSL-1.1 | [package.json](../app/package.json) | [license](../app/license) |
| `@directus/api` | BUSL-1.1 | [package.json](../api/package.json) | [license](../api/license) |
| `@directus/schema` | BUSL-1.1 | [package.json](schema/package.json) | [license](schema/license) |
| `@directus/schema-builder` | BUSL-1.1 | [package.json](schema-builder/package.json) | [license](schema-builder/license) |
| `@directus/specs` | BUSL-1.1 | [package.json](specs/package.json) | [license](specs/license) |
| `@directus/storage` | BUSL-1.1 | [package.json](storage/package.json) | [license](storage/license) |
| `@directus/storage-driver-azure` | BUSL-1.1 | [package.json](storage-driver-azure/package.json) | [license](storage-driver-azure/license) |
| `@directus/storage-driver-cloudinary` | BUSL-1.1 | [package.json](storage-driver-cloudinary/package.json) | [license](storage-driver-cloudinary/license) |
| `@directus/storage-driver-gcs` | BUSL-1.1 | [package.json](storage-driver-gcs/package.json) | [license](storage-driver-gcs/license) |
| `@directus/storage-driver-local` | BUSL-1.1 | [package.json](storage-driver-local/package.json) | [license](storage-driver-local/license) |
| `@directus/storage-driver-s3` | BUSL-1.1 | [package.json](storage-driver-s3/package.json) | [license](storage-driver-s3/license) |
| `@directus/storage-driver-supabase` | BUSL-1.1 | [package.json](storage-driver-supabase/package.json) | [license](storage-driver-supabase/license) |
| `@directus/sdk` | MIT | [package.json](../sdk/package.json) | [license](../sdk/license) |
| `@directus/ai` | MIT | [package.json](ai/package.json) | [license](ai/license) |
| `@directus/composables` | MIT | [package.json](composables/package.json) | [license](composables/license) |
| `@directus/constants` | MIT | [package.json](constants/package.json) | [license](constants/license) |
| `create-directus-extension` | MIT | [package.json](create-directus-extension/package.json) | [license](create-directus-extension/license) |
| `create-directus-project` | MIT | [package.json](create-directus-project/package.json) | [license](create-directus-project/license) |
| `@directus/env` | MIT | [package.json](env/package.json) | [license](env/license) |
| `@directus/errors` | MIT | [package.json](errors/package.json) | [license](errors/license) |
| `@directus/extensions` | MIT | [package.json](extensions/package.json) | [license](extensions/license) |
| `@directus/extensions-registry` | MIT | [package.json](extensions-registry/package.json) | [license](extensions-registry/license) |
| `@directus/extensions-sdk` | MIT | [package.json](extensions-sdk/package.json) | [license](extensions-sdk/license) |
| `@directus/format-title` | MIT | [package.json](format-title/package.json) | [license](format-title/license) |
| `@directus/memory` | MIT | [package.json](memory/package.json) | [license](memory/license) |
| `@directus/pressure` | MIT | [package.json](pressure/package.json) | [license](pressure/license) |
| `@directus/release-notes-generator` | MIT | [package.json](release-notes-generator/package.json) | [license](release-notes-generator/license) |
| `@directus/stores` | MIT | [package.json](stores/package.json) | [license](stores/license) |
| `@directus/system-data` | MIT | [package.json](system-data/package.json) | [license](system-data/license) |
| `@directus/themes` | MIT | [package.json](themes/package.json) | [license](themes/license) |
| `@directus/types` | MIT | [package.json](types/package.json) | [license](types/license) |
| `@directus/update-check` | MIT | [package.json](update-check/package.json) | [license](update-check/license) |
| `@directus/utils` | MIT | [package.json](utils/package.json) | [license](utils/license) |
| `@directus/validation` | MIT | [package.json](validation/package.json) | [license](validation/license) |
| `@directus/visual-editing` | MIT | [package.json](visual-editing/package.json) | [license](visual-editing/license) |

Repo-root license text (canonical BUSL 1.1 source, applies to all rows marked
BUSL-1.1): [`../license`](../license)
