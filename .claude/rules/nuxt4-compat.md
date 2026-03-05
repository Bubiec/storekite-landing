# Nuxt 4 Compatibility Mode — Critical Rules

> `woonuxt_base` sets `compatibilityVersion: 4` → `srcDir: 'app/'`
> This changes WHERE Nuxt looks for files. Violating these rules = silent failures.

## Directory Rules

### ❌ Root directories IGNORED by Nuxt 4 compat:
- `pages/` → IGNORED (use `woonuxt_base/app/pages/` or override via `extendRoutes`)
- `plugins/` → IGNORED (Klaviyo, GTM bugs — both caused by root plugins/)
- `layouts/` → IGNORED
- `middleware/` → IGNORED

### ✅ Correct locations:
| What | Where | Notes |
|------|-------|-------|
| Plugins | `app/plugins/` | ALL `.client.ts` / `.server.ts` here |
| App config | `app/app.config.ts` | NOT root `app.config.ts` |
| Composables | `app/composables/` | Auto-imported |
| Types | `app/types.d.ts` | For window extensions etc. |
| GQL queries | `app/queries/` | GraphQL `.gql` files |

### ⚠️ Component layers (RULE-02 + NUXT4):
Only **2 layers** exist:
1. `components/` — YOUR overrides (top priority)
2. `woonuxt_base/app/components/` — base components

**`app/components/` is BANNED** — creates 3-layer chaos, naming conflicts.

### Pages:
- `woonuxt_base/app/pages/` = active pages (product, blog, checkout...)
- Root `pages/` = DEAD CODE in Nuxt 4 compat
- To override a page: use `extendRoutes` in `nuxt.config.ts` or create `app/pages/`
- Product URL: `/p/[slug]` → file: `woonuxt_base/app/pages/p/[slug].vue`
- `/product/[slug]` = different file (rarely used)

## Past Incidents (don't repeat!)

1. **GTM plugin** (2026-03-02): `plugins/gtm-dual.client.ts` at root → not loaded. Fix: moved to `app/plugins/`
2. **Klaviyo popup** (2026-03-03): `plugins/klaviyo.client.ts` at root → ignored. Fix: moved to `app/plugins/`
3. **view_item tracking** (2026-03-04): Added to root `pages/product/[slug].vue` → never compiled. Active page is `woonuxt_base/app/pages/p/[slug].vue`

## Verification

Before any "it's not working" debugging:
```bash
# Check if file is in build output
grep -r "YOUR_UNIQUE_STRING" .output/server/ .output/public/
# If not found → wrong directory
```
