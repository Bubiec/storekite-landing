# Content Security Policy (CSP) Checklist

> Every external domain called from the browser MUST be in CSP in `nuxt.config.ts`

## Before Adding Any External Service

Ask yourself:
1. Does it load a **script**? → `script-src`
2. Does the browser **fetch data** from it? → `connect-src`
3. Does it load in an **iframe**? → `frame-src`
4. Does it **submit a form** to it? → `form-action`
5. Does it load **images**? → `img-src`
6. Does it load **fonts**? → `font-src`

## Current CSP Domains (as of 2026-03-04)

### `connect-src`
- `backend.biohac.pl` — WooCommerce GraphQL
- `preprod.biohac.pl` — staging GraphQL (ARCH-CSP-01)
- `sst.biohac.pl` — sGTM
- `www.google-analytics.com` — GA4
- `region1.google-analytics.com`
- `b.clarity.ms` — Microsoft Clarity collect
- `www.facebook.com` — Meta Pixel
- `googleads.g.doubleclick.net` — Google Ads
- `www.googleadservices.com` — Google Ads conversion
- `static.klaviyo.com` — Klaviyo
- `a.klaviyo.com` — Klaviyo API

### `script-src`
- `www.googletagmanager.com` — GTM
- `sst.biohac.pl` — sGTM loader
- `googleads.g.doubleclick.net` — Google Ads
- `accounts.google.com` — Google One Tap
- `static.klaviyo.com` — Klaviyo

### `frame-src`
- `https://www.facebook.com` — Meta Pixel
- `accounts.google.com` — Google One Tap / FedCM
- `geowidget.inpost.pl` — InPost map

### `form-action`
- `https://www.facebook.com` — Meta Pixel form posts

## How to Add

In `nuxt.config.ts` → `security.headers.contentSecurityPolicy`:
```ts
'connect-src': ["'self'", 'https://new-domain.com', ...],
```

## Common Mistake

Adding a GTM tag that calls a new API → browser blocks it → no error in GTM, just silent CSP violation.
**Always check browser console for CSP errors after adding new GTM tags.**

## Debugging

```bash
# Check CSP headers on staging
curl -sI "https://staging.biohac.pl/" | grep -i content-security
```
