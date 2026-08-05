# aimoindia.com — Next.js rebuild

A complete redesign of the All India Manufacturers' Organisation website: modern, responsive,
and built on the layout and colour language of the reference design supplied by the client.

---

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, React 19, TypeScript) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config`) |
| Icons | `lucide-react` |
| Fonts | Poppins (headings) + Inter (body), via `next/font/google` |
| Images | `next/image` with a fallback wrapper (`src/components/ui/Img.tsx`) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Node 18.18+ is required by Next 15.

---

## Where things live

```
public/                     aimo-logo-left.png, aimo-logo-right.png
src/
├─ app/
│  ├─ layout.tsx            fonts, metadata, TopBar + Header + Footer shell
│  ├─ globals.css           design tokens, buttons, cards, animations
│  ├─ page.tsx              homepage (composes 13 sections)
│  ├─ about/                who we are · founder · leadership
│  ├─ membership/  state-boards/  awards/  events/  gallery/  press/  contact/
│  ├─ not-found.tsx  sitemap.ts  robots.ts
├─ components/
│  ├─ layout/               TopBar · Header · Footer · PageHero
│  ├─ home/                 the 13 homepage sections
│  └─ ui/                   Img · SectionHeading · ContactForm
└─ lib/site.ts              ALL copy, contacts, people, events, tiers, images
```

### Editing content

**Do not edit JSX to change wording.** Almost every string on the site is exported from
`src/lib/site.ts` — nav structure, hero slides, statistics, leadership, membership tiers,
state boards, award categories, press items, gallery captions and contact details.

### Editing colours

Open `src/app/globals.css` and change the variables in the `@theme` block. Tailwind v4
generates the utilities from them, so `--color-brand` drives `bg-brand`, `text-brand`,
`border-brand` and so on across the whole site.

```css
--color-brand: #ee4b3e;   /* primary red    */
--color-navy:  #0f1b3d;   /* dark sections  */
--color-mist:  #f5f7fa;   /* alternating bg */
```

---

## Homepage section map

The homepage mirrors the reference layout section for section:

| Reference | This build |
| --- | --- |
| Hero slider | 3-slide carousel with angled red panel, autoplay + dots |
| Three info cards | Educate / Evaluate / Evolve |
| — | Intro: "bridging the last mile" |
| — | MSME statistics band |
| Countdown event | National Manufacturing Summit, live countdown |
| Team carousel | National Leadership Team |
| Events schedule (navy) | AIMO event grid |
| Pricing tiers | Membership categories |
| Why join | Why Join AIMO |
| Newsletter bar | Policy digest signup |
| Programs + chips | Focus sectors |
| — | Member testimonials |
| Blog cards | Press & research |

---

## Before go-live — outstanding items

1. **Leadership photographs.** Currently rendered as gradient monogram avatars. Stock
   photos of strangers were deliberately *not* used next to real names. Drop in real
   headshots and swap the avatar block in `components/home/Leadership.tsx` and
   `app/about/leadership/page.tsx` for an `<Img />`.
2. **Membership fees.** The figures in `membershipTiers` (₹6,000 / ₹18,000 / ₹60,000) are
   placeholders with a visible disclaimer. Confirm real rates with the client.
3. **Photography.** All imagery currently comes from Unsplash via `src/lib/site.ts`
   (`img` object). Replace the URLs with the client's own event and member-unit photos —
   this is the single biggest visual upgrade available.
4. **Contact form.** `ContactForm.tsx` validates and shows a success state but is not
   wired to a mail service. Connect a Next.js Route Handler, Formspree, Resend or similar.
5. **Newsletter.** Same — the form is UI-only; connect to Mailchimp/Brevo/etc.
6. **Events, press, state boards.** Populated with realistic but illustrative entries.
   Replace with the real calendar, real press releases and the real board list plus
   office-bearer contacts.
7. **Favicon and OG image.** Add `app/icon.png` and `app/opengraph-image.png`.
8. **Analytics.** No tracker is installed.

## Accessibility & performance notes

- Skip-to-content link, semantic landmarks, labelled form fields and icon buttons.
- `prefers-reduced-motion` disables all animation.
- Every remote image has a deterministic fallback so a dead URL never leaves a gap.
- The countdown initialises to zero on the server and hydrates client-side, avoiding a
  hydration mismatch.
