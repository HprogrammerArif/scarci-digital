# Scarci Digital — Agency Website

Next.js 16 (App Router, Cache Components) + Tailwind CSS 4, deployed on Vercel.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Admin dashboard (`/admin`)

Manage case studies, testimonials, FAQs, and incoming leads without touching code.

1. Set `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` (see `.env.example`).
2. **On Vercel:** Storage → add **Upstash for Redis** and connect it to this project
   (sets `KV_REST_API_URL` / `KV_REST_API_TOKEN`). Without it, edits can't be saved
   and leads only appear in the Vercel logs.
3. **Locally:** no setup needed — data is written to `.data/store.json` (git-ignored).

Until something is edited, the site uses the defaults in `src/data/*.ts`.

Leads come from the contact form, chat assistant, and newsletter signup. Set
`RESEND_API_KEY` + `LEAD_NOTIFICATION_EMAIL` to also get an email for each new lead.

## Where content lives

| Content | Where to edit |
| --- | --- |
| Case studies, testimonials, FAQs | `/admin` (defaults in `src/data/`) |
| Services (7 service pages) | `src/data/services.ts` |
| Process, engagement models, industries | `src/data/engagement.ts` |
| Contact details, booking link, nav | `src/lib/constants.ts` / `NEXT_PUBLIC_BOOKING_URL` |
| Blog posts | `src/data/blog.ts` |

The site intentionally shows **no prices**; every project is quoted after a scoping call.
