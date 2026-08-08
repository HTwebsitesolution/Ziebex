# Safety, Risk & Operational Resilience — Design Spec

**Date:** 2026-08-08  
**Status:** Approved for implementation planning  
**Route:** `/safety-risk-operational-resilience`  
**Deploy:** Do not deploy automatically

## Goal

Strengthen the Ziebex website with a major cross-sector capability area around **Safety, Risk & Operational Resilience**. Railway/transport safety appears as **one sector application**, not as the exclusive brand position.

Position Ziebex as a serious infrastructure / risk / technology consultancy covering: risk management, asset protection, operational resilience, technology integration, emergency preparedness, simulation, and implementation support.

## Non-goals

- Do not reinvent the visual identity (keep existing Tailwind tokens, fonts, card/CTA patterns).
- Do not invent completed projects, railway contracts, testimonials, statistics, certifications, awards, client logos, or project values.
- Do not name NRC, Jetlinks, or other unapproved clients/projects.
- Do not deploy.

## Decisions locked with stakeholder

| Topic | Decision |
|-------|----------|
| Navigation | Top-level header item: **Safety, Risk & Resilience** |
| Homepage | Add a **7th** Services card (keep existing six) |
| Primary CTAs | Link to `/consultation` |
| Secondary hero CTA | Scroll to `#methodology` |
| Page structure | Modular sections under `src/components/safety-resilience/` |
| Diagram language | Hybrid: pillar **cards** + sequential **pipeline** bands |
| Video | Accessible placeholder; no redesign needed to drop video in later |

## Architecture

### Routing

- Path: `/safety-risk-operational-resilience`
- Page shell: `src/pages/SafetyResiliencePage.jsx`  
  Pattern: `TopBar` → `Header` → content → `Footer` (same as Courses/Consultation), with `scrolled` state for Header.
- Register in `src/App.jsx`.

### Component tree

```
src/pages/SafetyResiliencePage.jsx
src/components/safety-resilience/
  SafetyResilience.jsx          # composes sections; optional SEO effect
  Hero.jsx
  Philosophy.jsx                # system pillars diagram
  Methodology.jsx               # id="methodology"
  CapabilityAreas.jsx           # six cards
  Simulation.jsx                # sequence + VideoPlaceholder
  Technology.jsx
  Sectors.jsx
  RailwayFeature.jsx            # featured subsection only
  DeliveryModel.jsx
  ClosingCTA.jsx
  FlowPipeline.jsx              # shared sequential chips/band
  SystemPillars.jsx             # shared pillar → outcome diagram
  VideoPlaceholder.jsx          # accessible media placeholder
```

Helpers (`FlowPipeline`, `SystemPillars`, `VideoPlaceholder`) stay presentational and data-driven so sector cards / flows remain easy to extend.

### Site wiring

| Location | Change |
|----------|--------|
| `Header.jsx` | Add nav item `{ href: '/safety-risk-operational-resilience', label: 'Safety, Risk & Resilience' }` using `Link` |
| `Footer.jsx` | Add Company (and/or Services) link to the same route |
| `Features.jsx` | 7th card: title/text/CTA as specified; card itself or CTA uses `Link` |
| `Consultation.jsx` | Add service option **Safety, Risk & Operational Resilience** to the dropdown |
| Mobile menu | Include the new header item (same list as desktop) |

### SEO

On mount of the capability page (or in `SafetyResilience.jsx`):

- `document.title` = `Safety, Risk & Operational Resilience Consultancy | Ziebex`
- Meta description = `Ziebex provides risk management, safety, systems integration, emergency preparedness, simulation and operational resilience consultancy for transport, infrastructure, industry and public-sector organisations.`

(Lightweight `useEffect`; no new SEO library required.)

## Visual system (reuse existing)

| Token / pattern | Use |
|-----------------|-----|
| Colors | `primary`, `secondary`, `accent`, `dark`, `dark-light`, `text`, `text-light`, `light` |
| Fonts | Inter body; Poppins headings (`font-poppins`) |
| Section shell | `py-24` + `max-w-7xl mx-auto px-5` |
| Eyebrow | `text-primary font-semibold text-base uppercase tracking-wider` (accent on dark) |
| H1/H2 | `font-poppins text-4xl md:text-5xl font-extrabold` |
| Cards | Features-like: white, `rounded-3xl`, hover lift, optional top gradient bar |
| Primary CTA | Accent gold gradient pill → `/consultation` |
| Secondary CTA | Ghost/outline on dark hero → `#methodology` |
| Motion | `ScrollReveal` on major blocks (homepage parity) |

## Page content map

### 1. Hero

- Heading: Safety, Risk & Operational Resilience  
- Subheading: Helping organisations protect people, assets and operations through integrated risk management, technology, preparedness, training and implementation.  
- Supporting copy: three paragraphs as specified (system integration, methodology span).  
- Primary CTA: Discuss a Project → `/consultation`  
- Secondary CTA: Explore Our Approach → `#methodology`  
- Visual: dark gradient hero (Hero homepage family), no invented stats.

### 2. Philosophy — “Safety Is a System, Not a Silo”

- Copy as specified.  
- `SystemPillars`: PEOPLE · PROCESS · ASSETS & INFRASTRUCTURE · TECHNOLOGY & DATA · OPERATIONS · LEADERSHIP & GOVERNANCE → outcome band **SAFE • RELIABLE • RESILIENT OPERATIONS**.

### 3. Methodology — “From Risk Identification to Operational Capability”

- `id="methodology"`  
- Prominent pipeline: ASSESS → DESIGN → IMPLEMENT → TRAIN → SIMULATE → REVIEW → IMPROVE  
- Supporting text as specified.

### 4. Six capability areas

Premium cards (2×3 on desktop):

1. Risk & Capability Assessment  
2. Safety & Operational Assurance  
3. Asset Protection & Security  
4. Technology & Systems Integration  
5. Emergency & Crisis Preparedness  
6. Governance, Continuity & Organisational Resilience  

Copy per user brief. No fake case studies.

### 5. Simulation — “Test the System Before the Emergency”

- Copy + bullet capabilities as specified.  
- Pipeline: NORMAL OPERATIONS → ALERT → VERIFY → ESCALATE → ACTIVATE → RESPOND → COORDINATE → RECOVER → REVIEW → IMPROVE  
- `VideoPlaceholder`: dark aspect-ratio frame, play affordance, aria-label, optional caption “Operational resilience simulation video — coming soon”. Accepts future `src` without redesign.

### 6. Technology — “Technology Must Solve an Operational Problem”

- Assessment criteria list as specified.  
- Technology example grid (Control centres, CCTV, monitoring, sensors, incident platforms, GIS, dashboards, communications, analytics, cyber/OT).  
- Framing: consultancy / systems-integration / implementation partner coordinating specialist suppliers — **not** manufacturer of all products.

### 7. Sector applications

Heading: Applying the Same Resilience Principles Across Complex Operations  
Extensible card data array for:

- Rail & Public Transport  
- Aviation & Transport Operations  
- Critical Infrastructure  
- Energy & Industrial Operations  
- Logistics, Ports & Supply Chains  
- Public Sector & Government  

Easy to append more sectors later.

### 8. Railway featured subsection

Heading: Integrated Railway & Transport Resilience  
Copy as specified (system interactions; no NRC / completed project claims).  
Corridor pipeline: TRAIN & ROLLING STOCK → TRACK & INFRASTRUCTURE → STATIONS & PASSENGERS → COMMUNICATIONS & SENSORS → CONTROL CENTRE → RESPONSE TEAMS → LEADERSHIP & GOVERNANCE  

Visually a “featured band” within the page, not a separate railway site.

### 9. Delivery model — “From Strategy to Implementation”

Three columns:

1. Consultancy & Programme Leadership  
2. Technical & Systems Integration  
3. Specialist Delivery Partners  

Supporting copy: assemble delivery ecosystem per assignment.

### 10. Closing CTA — “Build Resilience Before Disruption Tests It”

- Copy as specified.  
- CTA: Discuss Your Project → `/consultation`  
- Contact lines: `ziebex.com` and `admin@ziebex.com` (mailto). TopBar retains existing `info@ziebex.com`.

## Homepage Features card (7th)

- Title: Safety, Risk & Operational Resilience  
- Text: Integrated risk, safety, technology, emergency-preparedness and resilience solutions for complex operations and critical infrastructure.  
- CTA: Explore Safety & Resilience → new route  
- Layout: grid becomes 7 cards (accept uneven last row on large screens; do not invent placeholder 8th card).

## Credibility / wording rules

Prefer: “Ziebex provides”, “supports”, “our methodology”, “our capability”, “working with specialist partners”.  
Avoid: “we successfully delivered…”, invented metrics, certificates, logos.

## Imagery / media placeholders

| Placeholder | Purpose |
|-------------|---------|
| `VideoPlaceholder` | Future simulation video |
| Optional decorative photos | Prefer omit or use existing abstract Unsplash only if consistent with About; prefer diagram-led sections to avoid stock-photo “H&S course” feel |

No obligation to add new photo assets in v1.

## Content requiring approval before stronger claims

- Any named client, corridor, regulator, or completed project.  
- Statistics, KPIs, awards, certifications.  
- Jetlinks / NRC / product OEM endorsements.  
- Replacing TopBar email with `admin@ziebex.com` site-wide (out of scope; CTA section only for admin@).

## Testing (manual, local)

1. `/safety-risk-operational-resilience` renders all 10 sections.  
2. Header + mobile menu + footer links resolve.  
3. Hero secondary CTA scrolls to methodology.  
4. All Discuss/CTA buttons reach `/consultation`.  
5. Homepage 7th card links correctly.  
6. Consultation dropdown includes new service.  
7. Responsive: pipelines wrap/scroll; grids collapse sanely.  
8. No deploy.

## Out of scope for this change

- Rewriting the entire homepage positioning.  
- Removing existing six service cards.  
- EmailJS credential setup.  
- ProTrainings slug fixes.  
- Automatic deployment / Vercel production push.
