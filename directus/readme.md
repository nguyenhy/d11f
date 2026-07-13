# d11f

d11f, built on Directus 11.17.4 (BSL-licensed), with original features and independent fixes for known upstream issues.

---

## What this is

d11f is an independent, self-hosted fork maintained for our own internal use. It is **not affiliated with, endorsed by,
or officially connected to Directus / Monospace, Inc.** in any way.

- **Base:** [Directus](https://directus.io) v11.17.4 (unmodified upstream), licensed under the Business Source License
  (BSL) 1.1.
- **Our changes:** A small set of original features plus custom bug fixes developed independently to address issues
  documented in later upstream releases. We aim to document all unique modifications, original features, and independent
  fixes within CHANGELOG.md to maintain transparency regarding how this fork differs from stock Directus v11.17.4.
- **What we deliberately did not include:** Any license-key-gated functionality from newer Directus releases (SSO,
  custom LLM integration, custom permission rules, AI translations, etc.). d11f only ever incorporates functionality
  that was freely available in the base version, or fixes we developed independently.

See [CHANGELOG.md](./CHANGELOG.md) for the itemized, commit-referenced list of everything that differs from stock
Directus 11.17.4.

---

## License

d11f is derived from Directus, which is licensed under [the Business Source License (BSL) 1.1](./license) with an
additional use grant from Monospace, Inc. The original license terms are preserved unmodified in [`license`](./license)
and apply to this fork in full.

We are not a party to that license or any associated use grants on your behalf. If you use d11f, you are solely
responsible for reviewing, understanding, and maintaining your own compliance with the upstream license terms directly
with the copyright holder.

### Disclaimer and Limitation of Liability

> OUR MODIFICATIONS ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
> THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
> To the extent permitted by law, our independent modifications (the parts listed in CHANGELOG.md) are additionally made
> available under the terms of the MIT License. This applies solely to our unique modifications; the underlying Directus
> core remains strictly bound by the upstream BSL 1.1 terms described above.

---

---

## Attribution and Support

`Directus®` is a trademark of Monospace, Inc. This project is an independent, internal fork of their
open-source-available software, not a community project, and makes no claim to their trademarks, branding, or commercial
offerings.

For general questions regarding core Directus features, please refer directly to
[the official Directus documentation](https://docs.directus.io). Do not open issues or support requests on the official
Directus repository regarding this fork or any modifications contained within it.
