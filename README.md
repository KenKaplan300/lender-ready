# Lender-Ready.com

Next.js (App Router) site deployed to Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

## Structure

- `app/(reports)` – the 57 report pages; `app/(hubs)` – free reports, loan programs, property types; plus `(home)`, `(about)`, `(contact)`.
  Each route group is a root layout with its own stylesheet (the pages use slightly different CSS), so moving between groups is a full page load.
- `components/` – shared header, footer, K2 system box and the report request form.
- `app/api/report-request` – adds the visitor to Mailchimp and tags them; `lib/reports.ts` maps each report slug to its PDF in `public/reports`.

## Development

```bash
cp .env.example .env.local   # add MAILCHIMP_API_KEY
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

OpenNext must build on Linux or macOS (CI, Cloudflare Workers Builds or WSL) — bundles built on Windows fail at runtime.
The Mailchimp API key is a Worker secret: `npx wrangler secret put MAILCHIMP_API_KEY`.
