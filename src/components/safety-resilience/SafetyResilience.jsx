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
