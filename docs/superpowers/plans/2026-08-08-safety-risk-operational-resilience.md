# Safety, Risk & Operational Resilience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a major capability page at `/safety-risk-operational-resilience` and wire it into nav, homepage services, and consultation — positioned as cross-sector safety/risk/resilience consultancy (rail is one sector, not the whole brand).

**Architecture:** Thin page shell mirrors `CoursesPage`. Content lives in modular sections under `src/components/safety-resilience/`, composed by `SafetyResilience.jsx`. Shared `FlowPipeline`, `SystemPillars`, and `VideoPlaceholder` keep diagrams consistent. Reuse existing Tailwind tokens and Features/Hero/CTA class patterns. No deployment.

**Tech Stack:** React 19, React Router 7, Tailwind CSS 3, Framer Motion (`ScrollReveal`), Vite.

**Spec:** `docs/superpowers/specs/2026-08-08-safety-risk-operational-resilience-design.md`

**Verification approach:** No Vitest suite for UI. After relevant tasks run `npm run build`. Final task uses browser checklist on `http://localhost:5173`.

---

## File map

| Path | Responsibility |
|------|----------------|
| Create `src/components/safety-resilience/FlowPipeline.jsx` | Horizontal/wrapping step chips with arrows |
| Create `src/components/safety-resilience/SystemPillars.jsx` | Pillar grid → outcome band |
| Create `src/components/safety-resilience/VideoPlaceholder.jsx` | Accessible video slot |
| Create `src/components/safety-resilience/Hero.jsx` | Dark hero + dual CTAs |
| Create `src/components/safety-resilience/Philosophy.jsx` | Section 2 |
| Create `src/components/safety-resilience/Methodology.jsx` | Section 3, `id="methodology"` |
| Create `src/components/safety-resilience/CapabilityAreas.jsx` | Six cards |
| Create `src/components/safety-resilience/Simulation.jsx` | Section 5 |
| Create `src/components/safety-resilience/Technology.jsx` | Section 6 |
| Create `src/components/safety-resilience/Sectors.jsx` | Extensible sector cards |
| Create `src/components/safety-resilience/RailwayFeature.jsx` | Featured rail subsection |
| Create `src/components/safety-resilience/DeliveryModel.jsx` | Three columns |
| Create `src/components/safety-resilience/ClosingCTA.jsx` | Final CTA + contact |
| Create `src/components/safety-resilience/SafetyResilience.jsx` | Compose + SEO `useEffect` |
| Create `src/pages/SafetyResiliencePage.jsx` | Shell |
| Modify `src/App.jsx` | Route |
| Modify `src/components/Header.jsx` | Nav item |
| Modify `src/components/Footer.jsx` | Company + Services links |
| Modify `src/components/Features.jsx` | 7th card + optional CTA/link |
| Modify `src/components/Consultation.jsx` | Service option |

**Credibility:** Never invent projects, clients (incl. NRC/Jetlinks), stats, awards, or certifications. Prefer “provides / supports / methodology / working with specialist partners”.

---

### Task 1: Shared diagram & media helpers

**Files:**
- Create: `src/components/safety-resilience/FlowPipeline.jsx`
- Create: `src/components/safety-resilience/SystemPillars.jsx`
- Create: `src/components/safety-resilience/VideoPlaceholder.jsx`

- [ ] **Step 1: Create `FlowPipeline.jsx`**

```jsx
const FlowPipeline = ({ steps, variant = 'dark' }) => {
  const isDark = variant === 'dark'
  return (
    <div
      className={`w-full overflow-x-auto py-4 ${isDark ? 'bg-dark rounded-3xl px-4 md:px-6' : ''}`}
      role="list"
      aria-label="Process steps"
    >
      <ol className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-1 min-w-0">
        {steps.map((step, index) => (
          <li key={step} role="listitem" className="flex items-center gap-2 md:gap-1">
            <span
              className={`inline-block whitespace-nowrap px-3 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide ${
                index === steps.length - 1
                  ? 'bg-gradient-to-br from-accent to-yellow-400 text-dark'
                  : 'bg-gradient-to-br from-primary to-secondary text-white'
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <span className={`font-bold ${isDark ? 'text-accent' : 'text-primary'}`} aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FlowPipeline
```

- [ ] **Step 2: Create `SystemPillars.jsx`**

```jsx
const SystemPillars = ({ pillars, outcome }) => {
  return (
    <div className="mt-12">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none mb-6">
        {pillars.map((pillar) => (
          <li
            key={pillar}
            className="bg-white border border-black/5 rounded-2xl px-6 py-5 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            {pillar}
          </li>
        ))}
      </ul>
      <div className="relative flex justify-center mb-4" aria-hidden="true">
        <div className="h-8 w-px bg-gradient-to-b from-primary to-accent" />
      </div>
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white text-center font-poppins font-extrabold text-lg md:text-xl tracking-wide rounded-2xl px-6 py-5 shadow-lg">
        {outcome}
      </div>
    </div>
  )
}

export default SystemPillars
```

- [ ] **Step 3: Create `VideoPlaceholder.jsx`**

```jsx
const VideoPlaceholder = ({
  label = 'Operational resilience simulation video — coming soon',
  src,
}) => {
  if (src) {
    return (
      <div className="mt-10 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-dark">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          aria-label={label}
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  return (
    <div
      className="mt-10 aspect-video rounded-3xl bg-dark border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-4 px-6 text-center relative overflow-hidden"
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" aria-hidden="true" />
      <button
        type="button"
        disabled
        className="relative z-10 w-16 h-16 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center text-white cursor-not-allowed"
        aria-label="Play video (not yet available)"
      >
        <span className="ml-1 text-2xl" aria-hidden="true">▶</span>
      </button>
      <p className="relative z-10 text-white/80 font-medium max-w-md">{label}</p>
    </div>
  )
}

export default VideoPlaceholder
```

- [ ] **Step 4: Commit**

```bash
git add src/components/safety-resilience/FlowPipeline.jsx src/components/safety-resilience/SystemPillars.jsx src/components/safety-resilience/VideoPlaceholder.jsx
git commit -m "Add shared safety-resilience diagram and video placeholder components"
```

---

### Task 2: Hero and Methodology sections

**Files:**
- Create: `src/components/safety-resilience/Hero.jsx`
- Create: `src/components/safety-resilience/Methodology.jsx`

- [ ] **Step 1: Create `Hero.jsx`**

```jsx
import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark to-dark-light text-white py-24 md:py-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-accent font-semibold text-base uppercase tracking-wider mb-4">
            Capability
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
            Safety, Risk &amp; Operational Resilience
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-3xl leading-relaxed">
            Helping organisations protect people, assets and operations through integrated risk
            management, technology, preparedness, training and implementation.
          </p>
          <div className="space-y-5 text-lg text-white/75 max-w-3xl leading-relaxed mb-10">
            <p>
              Ziebex helps organisations understand risk, protect people and critical assets,
              strengthen operational preparedness and build resilient systems capable of responding
              effectively when disruption occurs.
            </p>
            <p>
              Our approach integrates people, process, technology, infrastructure and leadership
              rather than treating safety, security, emergency preparedness or business continuity as
              isolated disciplines.
            </p>
            <p>
              From baseline risk assessments and operational reviews to control systems, asset
              monitoring, training, simulation and implementation support, Ziebex works with clients
              and specialist partners to translate strategy into practical, measurable capability.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-br from-accent to-yellow-400 text-dark px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:scale-105 shadow-lg shadow-accent/40"
            >
              Discuss a Project
            </Link>
            <a
              href="#methodology"
              className="bg-white/10 text-white px-10 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all"
            >
              Explore Our Approach
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Hero
```

- [ ] **Step 2: Create `Methodology.jsx`**

```jsx
import ScrollReveal from '../ScrollReveal'
import FlowPipeline from './FlowPipeline'

const STEPS = ['ASSESS', 'DESIGN', 'IMPLEMENT', 'TRAIN', 'SIMULATE', 'REVIEW', 'IMPROVE']

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 bg-light scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Methodology
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
              From Risk Identification to Operational Capability
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FlowPipeline steps={STEPS} variant="dark" />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 max-w-3xl mx-auto space-y-5 text-lg text-text-light leading-relaxed text-center md:text-left">
            <p>
              Ziebex begins by understanding the operating environment, identifying hazards,
              vulnerabilities, critical assets, capability gaps and dependencies.
            </p>
            <p>
              The findings inform appropriate interventions across infrastructure, technology,
              operating procedures, manpower, training, emergency preparedness and governance.
            </p>
            <p>
              The objective is not simply to recommend solutions, but to build capability that can
              be implemented, tested, measured and sustained.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Methodology
```

- [ ] **Step 3: Commit**

```bash
git add src/components/safety-resilience/Hero.jsx src/components/safety-resilience/Methodology.jsx
git commit -m "Add safety-resilience hero and methodology sections"
```

---

### Task 3: Philosophy and six capability cards

**Files:**
- Create: `src/components/safety-resilience/Philosophy.jsx`
- Create: `src/components/safety-resilience/CapabilityAreas.jsx`

- [ ] **Step 1: Create `Philosophy.jsx`**

```jsx
import ScrollReveal from '../ScrollReveal'
import SystemPillars from './SystemPillars'

const PILLARS = [
  'PEOPLE',
  'PROCESS',
  'ASSETS & INFRASTRUCTURE',
  'TECHNOLOGY & DATA',
  'OPERATIONS',
  'LEADERSHIP & GOVERNANCE',
]

const Philosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Core Philosophy
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-6">
              Safety Is a System, Not a Silo
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-4">
              Effective safety and resilience depend on the interaction of competent people,
              reliable infrastructure, clear procedures, appropriate technology, accurate
              information and accountable leadership.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              A weakness in one part of the system can affect the entire operation.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <SystemPillars
            pillars={PILLARS}
            outcome="SAFE • RELIABLE • RESILIENT OPERATIONS"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Philosophy
```

- [ ] **Step 2: Create `CapabilityAreas.jsx`**

```jsx
import ScrollReveal from '../ScrollReveal'

const areas = [
  {
    title: 'Risk & Capability Assessment',
    description:
      'Enterprise and operational risk assessment, vulnerability analysis, capability-gap assessment, critical-asset identification and prioritised improvement planning.',
  },
  {
    title: 'Safety & Operational Assurance',
    description:
      'Operational procedures, safety-critical communication, competence management, human factors, incident prevention and performance assurance.',
  },
  {
    title: 'Asset Protection & Security',
    description:
      'Critical-asset protection, surveillance, access control, monitoring, threat identification and resilience planning.',
  },
  {
    title: 'Technology & Systems Integration',
    description:
      'Control environments, command-and-control dashboards, CCTV, sensors, communications, GIS, incident reporting, asset monitoring, data platforms and operational intelligence.',
  },
  {
    title: 'Emergency & Crisis Preparedness',
    description:
      'Incident command, evacuation, crisis communications, emergency response planning, multi-agency coordination, drills, tabletop exercises and simulations.',
  },
  {
    title: 'Governance, Continuity & Organisational Resilience',
    description:
      'Risk governance, safety culture, business continuity, organisational learning, corrective-action management, KPIs, knowledge transfer and sustainable implementation.',
  },
]

const CapabilityAreas = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              Capability Areas
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-dark mb-5">
              Integrated Capability Across the Resilience Spectrum
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Six linked capability areas that support assessment, assurance, protection, technology,
              preparedness and organisational resilience.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 0.08} direction="up">
              <div className="bg-white p-10 rounded-3xl border border-black/5 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-sm font-bold text-primary mb-3">0{index + 1}</div>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-text-light leading-relaxed">{area.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilityAreas
```

- [ ] **Step 3: Commit**

```bash
git add src/components/safety-resilience/Philosophy.jsx src/components/safety-resilience/CapabilityAreas.jsx
git commit -m "Add philosophy system diagram and six capability area cards"
```

---

### Task 4: Simulation and Technology sections

**Files:**
- Create: `src/components/safety-resilience/Simulation.jsx`
- Create: `src/components/safety-resilience/Technology.jsx`

- [ ] **Step 1: Create `Simulation.jsx`**

Include the full bullet list from the spec (recognition and escalation through corrective-action ownership). Use `FlowPipeline` with steps:

`NORMAL OPERATIONS`, `ALERT`, `VERIFY`, `ESCALATE`, `ACTIVATE`, `RESPOND`, `COORDINATE`, `RECOVER`, `REVIEW`, `IMPROVE`

Include `<VideoPlaceholder />` with no `src`.

- [ ] **Step 2: Create `Technology.jsx`**

- Heading: Technology Must Solve an Operational Problem  
- Criteria list (operational need … long-term sustainability) as a responsive checklist grid  
- Explicit paragraph: Ziebex is the consultancy / systems-integration / implementation partner coordinating specialist suppliers — not the manufacturer of all products  
- Technology tiles array:

```js
const technologies = [
  'Control & Operations Centres',
  'CCTV & Intelligent Surveillance',
  'Asset Monitoring',
  'Sensors & Telemetry',
  'Incident Reporting Platforms',
  'GIS & Situational Awareness',
  'Operational Dashboards',
  'Communications Systems',
  'Data Analytics',
  'Cyber & Operational Technology Resilience',
]
```

Render as `grid sm:grid-cols-2 lg:grid-cols-5 gap-4` tiles (`bg-light rounded-2xl p-4 text-center font-semibold text-dark text-sm`).

- [ ] **Step 3: Commit**

```bash
git add src/components/safety-resilience/Simulation.jsx src/components/safety-resilience/Technology.jsx
git commit -m "Add simulation exercise and technology-with-purpose sections"
```

---

### Task 5: Sectors, Railway feature, Delivery, Closing CTA

**Files:**
- Create: `src/components/safety-resilience/Sectors.jsx`
- Create: `src/components/safety-resilience/RailwayFeature.jsx`
- Create: `src/components/safety-resilience/DeliveryModel.jsx`
- Create: `src/components/safety-resilience/ClosingCTA.jsx`

- [ ] **Step 1: Create `Sectors.jsx` with data-driven cards**

```js
const sectors = [
  {
    title: 'Rail & Public Transport',
    description:
      'Passenger safety, train and station operations, asset integrity, control systems, emergency response and corridor resilience.',
  },
  {
    title: 'Aviation & Transport Operations',
    description:
      'Operational safety, emergency preparedness, command coordination and business continuity.',
  },
  {
    title: 'Critical Infrastructure',
    description:
      'Asset protection, surveillance, monitoring, operational resilience and emergency management.',
  },
  {
    title: 'Energy & Industrial Operations',
    description:
      'Personnel safety, operational risk, asset integrity, incident management and continuity.',
  },
  {
    title: 'Logistics, Ports & Supply Chains',
    description:
      'Asset protection, operational risk, security, disruption management and continuity planning.',
  },
  {
    title: 'Public Sector & Government',
    description:
      'Risk governance, emergency preparedness, crisis coordination, resilience and capability development.',
  },
]
```

Heading: Applying the Same Resilience Principles Across Complex Operations. Keep `sectors` as a const array so new sectors are additive.

- [ ] **Step 2: Create `RailwayFeature.jsx`**

Featured subsection (`bg-light` or bordered band), heading Integrated Railway & Transport Resilience, copy from spec (no NRC / completed project language). End with:

```jsx
<FlowPipeline
  steps={[
    'TRAIN & ROLLING STOCK',
    'TRACK & INFRASTRUCTURE',
    'STATIONS & PASSENGERS',
    'COMMUNICATIONS & SENSORS',
    'CONTROL CENTRE',
    'RESPONSE TEAMS',
    'LEADERSHIP & GOVERNANCE',
  ]}
  variant="dark"
/>
```

- [ ] **Step 3: Create `DeliveryModel.jsx`**

Three equal columns (Consultancy & Programme Leadership; Technical & Systems Integration; Specialist Delivery Partners) with descriptions from spec + supporting paragraph about assembling the delivery ecosystem.

- [ ] **Step 4: Create `ClosingCTA.jsx`**

Reuse CTA band pattern (`bg-gradient-to-br from-primary to-secondary`), heading Build Resilience Before Disruption Tests It, copy from spec, `Link` Discuss Your Project → `/consultation`, then:

```jsx
<div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90">
  <a href="https://ziebex.com" className="hover:text-accent transition-colors font-semibold">
    ziebex.com
  </a>
  <a href="mailto:admin@ziebex.com" className="hover:text-accent transition-colors font-semibold">
    admin@ziebex.com
  </a>
</div>
```

Do not change TopBar email.

- [ ] **Step 5: Commit**

```bash
git add src/components/safety-resilience/Sectors.jsx src/components/safety-resilience/RailwayFeature.jsx src/components/safety-resilience/DeliveryModel.jsx src/components/safety-resilience/ClosingCTA.jsx
git commit -m "Add sectors, railway feature, delivery model, and closing CTA"
```

---

### Task 6: Compose page, register route

**Files:**
- Create: `src/components/safety-resilience/SafetyResilience.jsx`
- Create: `src/pages/SafetyResiliencePage.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create composer with SEO effect**

```jsx
import { useEffect } from 'react'
import Hero from './Hero'
import Philosophy from './Philosophy'
import Methodology from './Methodology'
import CapabilityAreas from './CapabilityAreas'
import Simulation from './Simulation'
import Technology from './Technology'
import Sectors from './Sectors'
import RailwayFeature from './RailwayFeature'
import DeliveryModel from './DeliveryModel'
import ClosingCTA from './ClosingCTA'

const PAGE_TITLE = 'Safety, Risk & Operational Resilience Consultancy | Ziebex'
const PAGE_DESCRIPTION =
  'Ziebex provides risk management, safety, systems integration, emergency preparedness, simulation and operational resilience consultancy for transport, infrastructure, industry and public-sector organisations.'

const SafetyResilience = () => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = PAGE_TITLE
    let meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content') ?? null
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', PAGE_DESCRIPTION)
    return () => {
      document.title = previousTitle
      if (previousDescription === null) {
        meta?.remove()
      } else {
        meta?.setAttribute('content', previousDescription)
      }
    }
  }, [])

  return (
    <main>
      <Hero />
      <Philosophy />
      <Methodology />
      <CapabilityAreas />
      <Simulation />
      <Technology />
      <Sectors />
      <RailwayFeature />
      <DeliveryModel />
      <ClosingCTA />
    </main>
  )
}

export default SafetyResilience
```

- [ ] **Step 2: Create `SafetyResiliencePage.jsx`** (copy scroll pattern from `CoursesPage.jsx`; import `SafetyResilience` from `../components/safety-resilience/SafetyResilience`).

- [ ] **Step 3: Register route in `App.jsx`**

```jsx
import SafetyResiliencePage from './pages/SafetyResiliencePage'
// ...
<Route path="/safety-risk-operational-resilience" element={<SafetyResiliencePage />} />
```

- [ ] **Step 4: Build check**

Run: `npm run build`  
Expected: success, no JSX/import errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/safety-resilience/SafetyResilience.jsx src/pages/SafetyResiliencePage.jsx src/App.jsx
git commit -m "Add Safety, Risk & Operational Resilience page route"
```

---

### Task 7: Header and Footer navigation

**Files:**
- Modify: `src/components/Header.jsx`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Add top-level nav item in `Header.jsx`**

Insert into `navLinks` after Services (before Courses):

```js
{ href: '/safety-risk-operational-resilience', label: 'Safety, Risk & Resilience', section: 'safety' },
```

Active state already uses `location.pathname === link.href` for non-hash routes — verify the long label still fits; if desktop overflows, use `text-xs md:text-sm` on nav pills for this item only or slightly reduce horizontal padding on all pills (`px-4` instead of `px-5`). Prefer tight padding over renaming.

- [ ] **Step 2: Mirror in mobile menu** (same `navLinks` map — confirm mobile list uses `navLinks`).

- [ ] **Step 3: Update `Footer.jsx`**

Company list — add:

```js
{ label: 'Safety, Risk & Resilience', href: '/safety-risk-operational-resilience' },
```

Services list — add:

```js
{ label: 'Safety, Risk & Operational Resilience', href: '/safety-risk-operational-resilience' },
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.jsx src/components/Footer.jsx
git commit -m "Wire Safety, Risk & Resilience into header and footer nav"
```

---

### Task 8: Homepage Features 7th card

**Files:**
- Modify: `src/components/Features.jsx`

- [ ] **Step 1: Extend feature objects with optional `href` / `cta`**

Add seventh item:

```js
{
  icon: '🛡️',
  title: 'Safety, Risk & Operational Resilience',
  description:
    'Integrated risk, safety, technology, emergency-preparedness and resilience solutions for complex operations and critical infrastructure.',
  href: '/safety-risk-operational-resilience',
  cta: 'Explore Safety & Resilience',
},
```

- [ ] **Step 2: Render CTA when present**

Import `Link` from `react-router-dom`. Inside each card, after description:

```jsx
{feature.href && feature.cta && (
  <Link
    to={feature.href}
    className="inline-block mt-6 text-primary font-bold hover:text-secondary transition-colors"
    onClick={(e) => e.stopPropagation()}
  >
    {feature.cta} →
  </Link>
)}
```

Optionally wrap the whole card in `Link` when `href` exists — if so, avoid nested interactive elements (use wrapping `Link` **or** CTA link, not both). Prefer single wrapping `Link` with CTA text as the visible affordance at the bottom of the card.

- [ ] **Step 3: Commit**

```bash
git add src/components/Features.jsx
git commit -m "Add Safety, Risk & Resilience card to homepage services"
```

---

### Task 9: Consultation service option

**Files:**
- Modify: `src/components/Consultation.jsx`

- [ ] **Step 1: Add to `services` array** (near top of list after Professional Consulting is fine):

```js
'Safety, Risk & Operational Resilience',
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Consultation.jsx
git commit -m "Add safety-resilience option to consultation service dropdown"
```

---

### Task 10: Manual verification (no deploy)

**Files:** none (verification only)

- [ ] **Step 1: Ensure `npm run dev` is running**

- [ ] **Step 2: Browser checklist**

1. Open `/safety-risk-operational-resilience` — all 10 sections render.  
2. Document title and meta description match SEO strings.  
3. Header desktop + mobile link works; active state on capability page.  
4. Footer company + services links work.  
5. “Explore Our Approach” scrolls to `#methodology`.  
6. “Discuss a Project” / “Discuss Your Project” → `/consultation`.  
7. Homepage 7th card → capability page.  
8. Consultation dropdown includes new service.  
9. No invented client names / stats / NRC / Jetlinks.  
10. Mobile: pipelines wrap/scroll; cards stack.

- [ ] **Step 3: Final build**

Run: `npm run build`  
Expected: success.

- [ ] **Step 4: Do not deploy** — leave local only unless the user explicitly requests deploy/push.

---

## Spec coverage self-check

| Spec requirement | Task |
|------------------|------|
| Route + page shell | 6 |
| Hero + CTAs | 2 |
| Philosophy + pillars | 3 |
| Methodology pipeline + `#methodology` | 2 |
| Six capability cards | 3 |
| Simulation + video placeholder | 1, 4 |
| Technology purpose + grid | 4 |
| Sectors extensible | 5 |
| Railway featured subsection | 5 |
| Delivery model 3 columns | 5 |
| Closing CTA + admin@ / ziebex.com | 5 |
| Header top-level nav | 7 |
| Footer links | 7 |
| Homepage 7th card | 8 |
| Consultation option | 9 |
| SEO title/description | 6 |
| Credibility rules | All content tasks |
| No auto-deploy | 10 |

## Placeholder scan

No TBD implementation steps. Video is an intentional `VideoPlaceholder` with optional `src`.
