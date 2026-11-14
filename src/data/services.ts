import type { LucideIcon } from 'lucide-react';
import {
  Award,
  ClipboardCheck,
  Droplets,
  FileSearch,
  House,
  Layers,
  ShieldCheck,
  Thermometer,
  Wind,
  Zap,
} from 'lucide-react';
import { PHOTOS } from '@/data/business';

export type Faq = { question: string; answer: string };

export type ServiceContent = {
  slug: string;
  name: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
  seoTitle: string;
  metaDescription: string;
  summary: string;
  overview: string[];
  localIntro: string;
  covers: string[];
  whoNeedsIt: string[];
  whatToExpect: string[];
  limitations: string[];
  faqs: Faq[];
  related: string[];
};

export const SERVICES: ServiceContent[] = [
  {
    slug: 'home-inspection',
    name: 'Home Inspection',
    icon: House,
    image: { src: PHOTOS.outdoorInspector, alt: 'Home inspector with a clipboard performing an outdoor property inspection' },
    seoTitle: 'Professional Home Inspection | WISCo Inspections, LLC',
    metaDescription:
      'Professional home inspection covering roof, foundation, electrical, plumbing, HVAC, attic, and more. Call WISCo Inspections at (608) 642-1112.',
    summary:
      'A thorough visual evaluation of the accessible systems and components of a residential property, with clear findings you can use to make an informed decision.',
    overview: [
      'A home inspection is an unbiased, visual, non-invasive evaluation of a residential property. The inspector reviews the accessible parts of the home, including the roof, structure, exterior, interior, and major building systems, and documents the conditions observed.',
      'The goal is to help you understand the property as it stands today. Findings explain what is working, what needs attention, and where maintenance may be needed in the future.',
    ],
    localIntro:
      'Residential home inspections in Edgerton, Wisconsin help buyers, sellers, and current owners understand the condition of a home before a major decision. Call WISCo Inspections to discuss the property and the inspection scope.',
    covers: [
      'Roof and roofing components, as accessible',
      'Foundation and structural components',
      'Exterior conditions and drainage around the home',
      'Interior walls, ceilings, and floors',
      'Electrical systems and visible wiring components',
      'Plumbing fixtures, supply, and drainage components',
      'Heating and cooling systems',
      'Attic, ventilation, and visible insulation',
      'Built-in appliances',
      'Doors, windows, the garage, and other accessible areas',
    ],
    whoNeedsIt: [
      'Homebuyers who want to understand a property before closing',
      'Homeowners who want an objective view of their home’s condition',
      'Anyone planning renovations and wanting to know the current state of major systems',
    ],
    whatToExpect: [
      'A walk-through evaluation of the accessible areas of the property',
      'Notes on visible defects, wear, and maintenance concerns',
      'An explanation of findings so you understand what you are looking at',
      'A written report of the inspection findings delivered promptly',
    ],
    limitations: [
      'An inspection is a visual evaluation of accessible components at the time of the inspection. It is not a guarantee against future defects or problems.',
      'Concealed, locked, or inaccessible components may not be inspected. Items such as areas behind finished walls are generally outside the scope of a visual inspection.',
      'Inspection scope is confirmed when you call. Ask about exclusions before scheduling.',
    ],
    faqs: [
      {
        question: 'How long does a home inspection take?',
        answer:
          'Inspection duration depends on the size, age, and condition of the property, typically between 2.5 and 4 hours. Call WISCo Inspections to discuss your specific property.',
      },
      {
        question: 'Should I attend the inspection?',
        answer:
          'Attending is strongly encouraged because the inspector can point out findings, explain maintenance tips, and answer your questions directly on site.',
      },
      {
        question: 'Does a home inspection find every problem?',
        answer:
          'No. A home inspection is a visual evaluation of accessible components and cannot identify concealed defects behind finished walls or predict future component lifespans.',
      },
    ],
    related: ['buyer-home-inspection', 'pre-listing-inspection', 'radon-testing', 'mold-testing'],
  },
  {
    slug: 'buyer-home-inspection',
    name: 'Buyer Home Inspection',
    icon: FileSearch,
    image: { src: PHOTOS.buyerKeys, alt: 'Family receiving the keys to their new home from a real estate agent' },
    seoTitle: 'Buyer Home Inspection | WISCo Inspections, LLC',
    metaDescription:
      'Buyer home inspection to understand a property’s condition, visible defects, and major systems before you buy. Call (608) 642-1112.',
    summary:
      'An inspection tailored for homebuyers, focused on discovering safety hazards, major defects, and deferred maintenance before you finalize your purchase.',
    overview: [
      'Buying a home is one of the largest financial commitments you will ever make. A buyer home inspection provides an independent, objective evaluation so you can understand the true condition of the property before closing.',
      'Inspection findings help you negotiate repairs, budget for upcoming maintenance, or make an informed decision regarding your purchase contingency.',
    ],
    localIntro:
      'Buyers considering a home in Edgerton, Wisconsin can call WISCo Inspections to discuss the property, the inspection timeline, and availability before making an offer or during your inspection contingency window.',
    covers: [
      'Overall condition of the property as observed during the inspection',
      'Visible defects in the roof, structure, exterior, and interior',
      'Major mechanicals: HVAC, electrical panel, and plumbing supply/drain lines',
      'Safety hazards including carbon monoxide, GFCI operation, and fire separation',
      'Accessible attics, basements, crawlspaces, and garages',
    ],
    whoNeedsIt: [
      'First-time homebuyers who want to understand home maintenance',
      'Buyers of older or historic Wisconsin homes with complex structures',
      'Buyers seeking an independent third-party opinion separate from seller disclosures',
    ],
    whatToExpect: [
      'Flexible scheduling coordinated with your contingency deadline',
      'On-site walk-through explaining all notable findings and system shut-offs',
      'A comprehensive digital report with high-resolution photos and defect summaries',
    ],
    limitations: [
      'A buyer inspection is visual and non-invasive. It does not certify property market value or code compliance.',
      'Environmental testing (such as radon and mold) are specialized add-ons that should be requested when scheduling.',
      'Conditions may change after the inspection date if the seller alters or uses the property.',
    ],
    faqs: [
      {
        question: 'When should a buyer schedule an inspection?',
        answer:
          'Schedule immediately after your purchase offer is accepted to ensure sufficient time within your inspection contingency period to review findings and request repairs.',
      },
      {
        question: 'Can I use the inspection report to negotiate?',
        answer:
          'Yes. Inspection findings are frequently used with your real estate agent to negotiate seller credits, price adjustments, or required safety repairs prior to closing.',
      },
      {
        question: 'Will the inspector tell me whether to buy the home?',
        answer:
          'The inspector documents the physical condition of the property objectively. The purchasing decision rests with you and your real estate advisor.',
      },
    ],
    related: ['home-inspection', 'radon-testing', 'mold-testing', 'basement-crawl-space-inspection'],
  },
  {
    slug: 'pre-listing-inspection',
    name: 'Pre-Listing Inspection',
    icon: ClipboardCheck,
    image: { src: PHOTOS.checklist, alt: 'Hands holding a home inspection checklist on a clipboard' },
    seoTitle: 'Pre-Listing Inspection for Home Sellers | WISCo Inspections, LLC',
    metaDescription:
      'Pre-listing home inspection for sellers who want to understand their home’s condition before listing. Call WISCo Inspections at (608) 642-1112.',
    summary:
      'A proactive inspection for homeowners preparing to sell, identifying repair needs in advance to avoid last-minute surprises during buyer negotiations.',
    overview: [
      'A pre-listing inspection gives sellers the upper hand by evaluating the home before it hits the market. Discovering maintenance items or safety issues in advance gives you time to make repairs at your own pace and budget.',
      'It helps substantiate your asking price, makes seller disclosures straightforward, and prevents last-minute deal cancellations or aggressive price renegotiations by buyers.',
    ],
    localIntro:
      'Homeowners in Edgerton, Wisconsin who are preparing to list their home can call WISCo Inspections to schedule a pre-listing evaluation and streamline their selling process.',
    covers: [
      'Roofing, flashings, chimney masonry, and exterior drainage',
      'Foundation walls, basement moisture signs, and structural supports',
      'Electrical service panel, wiring safety, and GFCI outlets',
      'Furnace, boiler, and air conditioning operational checks',
      'Attic insulation, roof ventilation, and exhaust terminations',
    ],
    whoNeedsIt: [
      'Homeowners preparing to list their property for sale',
      'Sellers of older homes who want to avoid unexpected buyer repair demands',
      'Sellers looking to present a confident, transparent disclosure packet',
    ],
    whatToExpect: [
      'Complete property evaluation before professional photography and listing',
      'Prioritized breakdown of critical safety concerns versus routine cosmetic wear',
      'Documentation that helps your real estate agent market the home with confidence',
    ],
    limitations: [
      'A pre-listing inspection does not replace legal seller disclosures required by Wisconsin law.',
      'Prospective buyers may still choose to hire their own independent inspector.',
      'Inspector does not perform remediation or contracting work.',
    ],
    faqs: [
      {
        question: 'Why should I pay for an inspection before selling?',
        answer:
          'Finding issues early lets you hire contractors without rush fees, prevents renegotiation under pressure, and speeds up closing when a buyer appears.',
      },
      {
        question: 'Does a pre-listing inspection eliminate buyer inspections?',
        answer:
          'Most buyers will still hire their own inspector, but your pre-listing report significantly reduces surprise issues that can jeopardize the sale.',
      },
      {
        question: 'Do I have to disclose issues found in the pre-listing inspection?',
        answer:
          'Wisconsin real estate law requires truthful disclosure of known material defects. Consult your licensed real estate agent on how to incorporate completed repairs into your condition report.',
      },
    ],
    related: ['home-inspection', 'buyer-home-inspection', 'radon-testing', 'electrical-inspection'],
  },
  {
    slug: 'radon-testing',
    name: 'Radon Testing',
    icon: Wind,
    image: { src: PHOTOS.safetyDevices, alt: 'Smart home safety devices including a smoke detector and camera' },
    seoTitle: 'Certified Radon Testing | WISCo Inspections, LLC',
    metaDescription:
      'Professional continuous radon testing in Edgerton and Southern Wisconsin. Accurate measurements for home sales and family safety. Call (608) 642-1112.',
    summary:
      'Accurate radon gas measurement using calibrated testing equipment, helping you protect your family and meet real estate transaction requirements.',
    overview: [
      'Radon is a naturally occurring, odorless, radioactive gas produced by the decay of uranium in soil and rock. Because Wisconsin soil contains prevalent glacial deposits, radon gas can migrate through foundation cracks and concentrate indoors.',
      'Prolonged radon exposure is the second leading cause of lung cancer. Testing is the only way to know if radon levels exceed the EPA action level of 4.0 pCi/L.',
    ],
    localIntro:
      'Radon levels vary significantly throughout Edgerton and Southern Wisconsin. Call WISCo Inspections to arrange certified, tamper-resistant radon monitoring for your home.',
    covers: [
      'Placement of continuous electronic radon monitors or calibrated test canisters',
      'Closed-house condition monitoring to ensure test validity',
      'Hourly radon readings showing fluctuations and final average concentration',
      'Written test report with EPA guidance on mitigation if levels exceed 4.0 pCi/L',
    ],
    whoNeedsIt: [
      'Homebuyers during standard purchase contingency periods',
      'Homeowners who have never tested their living space or basement',
      'Families who have finished their basement into bedrooms or recreation areas',
    ],
    whatToExpect: [
      'Minimum 48-hour continuous testing period under closed-building conditions',
      'Placement in the lowest livable area of the home away from drafts and exterior doors',
      'Same-day digital results report delivered immediately following retrieval',
    ],
    limitations: [
      'Test results reflect radon concentrations during the specific 48-hour testing window.',
      'Weather conditions, barometric pressure, and wind can influence short-term radon levels.',
      'WISCo Inspections provides independent testing and does not install mitigation systems, ensuring no conflict of interest.',
    ],
    faqs: [
      {
        question: 'What is a safe radon level?',
        answer:
          'The EPA recommends taking action to mitigate radon when levels are at or above 4.0 pCi/L, and considering mitigation between 2.0 and 4.0 pCi/L.',
      },
      {
        question: 'How long does radon testing take?',
        answer:
          'Standard real estate testing takes a minimum of 48 hours under closed-house conditions (doors and windows closed except for normal entry/exit).',
      },
      {
        question: 'Can radon be fixed if the test is high?',
        answer:
          'Yes. Radon mitigation systems (active soil depressurization) are straightforward to install by certified radon mitigation contractors.',
      },
    ],
    related: ['home-inspection', 'mold-testing', 'basement-crawl-space-inspection', 'buyer-home-inspection'],
  },
  {
    slug: 'mold-testing',
    name: 'Mold Testing & Assessment',
    icon: Droplets,
    image: { src: PHOTOS.wallMoisture, alt: 'Close-up of a weathered wall showing cracks and moisture staining' },
    seoTitle: 'Mold Testing & Air Sampling | WISCo Inspections, LLC',
    metaDescription:
      'Professional mold inspection and air quality sampling for moisture concerns, musty odors, and water damage. Call WISCo Inspections at (608) 642-1112.',
    summary:
      'Targeted inspection and laboratory air/surface sampling to identify hidden mold growth, spore concentrations, and moisture causes.',
    overview: [
      'Mold colonies thrive wherever moisture, organic material, and poor ventilation coincide. Leaking pipes, damp basements, crawl space humidity, or past roof leaks can trigger rapid fungal growth inside living spaces.',
      'Our mold assessment pairs visual moisture investigation with air spore trap sampling and tape/swab samples analyzed by an accredited independent microbiology laboratory.',
    ],
    localIntro:
      'If you notice persistent musty smells, staining, or previous water intrusion in Edgerton, Wisconsin, contact WISCo Inspections to schedule an objective mold assessment.',
    covers: [
      'Visual examination for visible mold colonies, efflorescence, and water staining',
      'Moisture meter probing of walls, baseboards, subfloors, and framing',
      'Indoor and outdoor baseline air spore trap sampling',
      'Surface tape lifts or swab samples of suspect growth',
      'Certified independent lab report detailing spore counts and fungal species',
    ],
    whoNeedsIt: [
      'Homebuyers noticing damp odors, water marks, or discolored drywall',
      'Occupants experiencing unexplained allergies or respiratory discomfort',
      'Homeowners following a basement flood, plumbing leak, or ice dam event',
    ],
    whatToExpect: [
      'Systematic moisture survey focusing on bathrooms, kitchens, attics, and basements',
      'Collection of comparative air samples indoors alongside outdoor controls',
      'Detailed laboratory analysis report with clear explanations of findings',
    ],
    limitations: [
      'Air sampling measures airborne spores at the moment of collection; hidden growth inside sealed wall cavities without air paths may not show elevated airborne counts.',
      'WISCo Inspections provides objective diagnostic testing only and does not perform mold remediation, guaranteeing unbiased results.',
    ],
    faqs: [
      {
        question: 'When should I have a mold test done?',
        answer:
          'Testing is recommended when you smell musty odors without visible mold, after water damage, or when evaluating a property with past water intrusion.',
      },
      {
        question: 'Does the standard home inspection include mold testing?',
        answer:
          'A general home inspection notes visible moisture concerns, but laboratory mold testing and air spore sampling require specialized equipment and lab fees as an add-on service.',
      },
      {
        question: 'How quickly do lab results arrive?',
        answer:
          'Once samples are received by the accredited lab, complete spore identification reports are typically returned within 2 to 3 business days.',
      },
    ],
    related: ['home-inspection', 'radon-testing', 'basement-crawl-space-inspection', 'thermal-imaging-inspection'],
  },
  {
    slug: 'basement-crawl-space-inspection',
    name: 'Basement & Crawl Space Inspection',
    icon: Layers,
    image: { src: PHOTOS.basement, alt: 'Unfinished basement inspection showing concrete foundation walls and floor joists' },
    seoTitle: 'Basement & Crawl Space Inspection | WISCo Inspections, LLC',
    metaDescription:
      'Comprehensive foundation, moisture, and crawl space inspection in Wisconsin. Evaluating structural integrity, efflorescence, and sump pumps. Call (608) 642-1112.',
    summary:
      'A specialized assessment of foundation walls, structural posts, crawl space vapor barriers, sump pumps, and signs of water infiltration.',
    overview: [
      'In Wisconsin, seasonal freeze-thaw cycles and varying water tables subject foundations to heavy hydrostatic pressure. The basement or crawl space carries the entire weight of your home and is the primary defense against moisture intrusion.',
      'Our basement and crawl space inspection investigates foundation stability, floor joist deflection, moisture vapor barriers, and drainage systems to ensure your home has a sound substructure.',
    ],
    localIntro:
      'Basements and crawl spaces in Edgerton, Wisconsin face challenging seasonal moisture. Let WISCo Inspections evaluate your foundation health, sump pump reliability, and framing condition.',
    covers: [
      'Foundation walls: checking for horizontal cracks, bowing, step cracks, and shifting',
      'Moisture intrusion: efflorescence, water stains, mold signs, and weeping walls',
      'Structural supports: steel posts, wood columns, carrying beams, and sill plates',
      'Sump pump testing, backup battery systems, and exterior discharge lines',
      'Crawl space ground vapor retarders, ventilation, and subfloor insulation',
    ],
    whoNeedsIt: [
      'Buyers of older homes with stone, brick, or concrete block foundations',
      'Homeowners noticing foundation wall cracks, sticking doors, or uneven floors',
      'Property owners experiencing damp smells or recurring water seepage',
    ],
    whatToExpect: [
      'Hands-on visual and moisture meter evaluation of accessible foundation walls',
      'Thorough inspection of crawl spaces including soil cover and wood framing',
      'Clear documentation of structural concerns and recommended preventative maintenance',
    ],
    limitations: [
      'Finished basement walls covered by drywall or paneling cannot be visually inspected behind the surface.',
      'Inaccessible crawl spaces with low clearance or standing water may have limited entry.',
    ],
    faqs: [
      {
        question: 'What does white powder on basement walls mean?',
        answer:
          'White powdery residue is efflorescence—mineral salts left behind as moisture evaporates through masonry. It indicates historical or ongoing moisture penetration.',
      },
      {
        question: 'Are all basement wall cracks dangerous?',
        answer:
          'Not all cracks indicate structural failure. Small vertical shrinkage cracks are common, whereas horizontal cracks or bowing walls indicate serious soil pressure that needs professional attention.',
      },
      {
        question: 'How do you check crawl spaces?',
        answer:
          'We inspect accessible crawl spaces by evaluating ground vapor barriers, wood joists for rot or insect damage, foundation vents, and insulation condition.',
      },
    ],
    related: ['home-inspection', 'mold-testing', 'thermal-imaging-inspection', 'buyer-home-inspection'],
  },
  {
    slug: 'attic-roof-inspection',
    name: 'Attic & Roof Structure Inspection',
    icon: ShieldCheck,
    image: { src: PHOTOS.attic, alt: 'Home inspector inspecting attic insulation, trusses, and ventilation with a flashlight' },
    seoTitle: 'Attic & Roof Structure Inspection | WISCo Inspections, LLC',
    metaDescription:
      'Thorough attic and roof framing inspection in Wisconsin. Evaluating roof ventilation, insulation depth, ice dam risk, and framing integrity. Call (608) 642-1112.',
    summary:
      'Detailed evaluation of attic ventilation, insulation depth, roof framing, and moisture barriers to prevent ice dams, heat loss, and structural decay.',
    overview: [
      'Wisconsin winters test roofs and attic assemblies to the limit. Inadequate insulation or poor attic ventilation allows interior heat to warm the roof deck, creating damaging ice dams and moisture condensation that rots roof sheathing.',
      'Our attic and roof structure inspection examines the underside of roof decking, truss and rafter integrity, baffle airflow, insulation R-values, and bathroom fan exhaust venting.',
    ],
    localIntro:
      'Homes in Edgerton and Dane/Rock counties require properly balanced attic ventilation to withstand Wisconsin winters. Contact WISCo Inspections for a comprehensive attic assessment.',
    covers: [
      'Roof framing: rafters, engineered trusses, collar ties, and purlins',
      'Roof sheathing condition, inspecting for water stains, mold, or rot',
      'Attic insulation type, depth, and approximate thermal R-value',
      'Ventilation airflow: soffit intake vents, ridge vents, and gable louvers',
      'Exhaust vent terminations to confirm fans vent to the outside, not into the attic',
      'Chimney flashing, plumbing vent penetrations, and recessed lighting covers',
    ],
    whoNeedsIt: [
      'Homeowners who have experienced winter ice dams or icicle buildup along gutters',
      'Buyers evaluating the remaining lifespan of roof decking and attic systems',
      'Properties with unusually high heating or cooling energy bills',
    ],
    whatToExpect: [
      'Safe visual inspection of the attic space from access hatches or interior catwalks',
      'Depth measurements of blown-in or batt insulation',
      'Inspection for bypass air leaks, moisture stains, and animal entry signs',
    ],
    limitations: [
      'Attics without solid flooring or with low roof pitch may be inspected from the hatchway only to prevent ceiling damage.',
      'Heavy snow or ice cover on exterior roofs may restrict exterior shingle evaluation.',
    ],
    faqs: [
      {
        question: 'Why do ice dams form on roofs?',
        answer:
          'Ice dams occur when escaping attic heat melts snow on the upper roof. The runoff freezes at the cold eaves, creating a dam that forces water under shingles into the home.',
      },
      {
        question: 'How much attic insulation is recommended in Wisconsin?',
        answer:
          'In Wisconsin (Climate Zone 6), the Department of Energy recommends R-49 to R-60 insulation in attics, which is roughly 16 to 20 inches of blown cellulose or fiberglass.',
      },
      {
        question: 'Why should bathroom fans vent to the exterior?',
        answer:
          'Bathroom exhaust fans vented into the attic dump gallons of warm, humid air into cold framing, causing wood rot, condensation, and rapid mold growth.',
      },
    ],
    related: ['home-inspection', 'thermal-imaging-inspection', 'pre-listing-inspection', 'mold-testing'],
  },
  {
    slug: 'electrical-inspection',
    name: 'Electrical System Inspection',
    icon: Zap,
    image: { src: PHOTOS.electrical, alt: 'Electrician inspecting a circuit breaker panel with diagnostic equipment' },
    seoTitle: 'Electrical System Inspection | WISCo Inspections, LLC',
    metaDescription:
      'Safety inspection of electrical panels, circuit breakers, grounding, and wiring. Identify outdated or hazardous electrical components. Call (608) 642-1112.',
    summary:
      'A focused electrical safety evaluation covering service panels, circuit breaker sizing, grounding rods, GFCI/AFCI protection, and wiring conditions.',
    overview: [
      'Electrical fires cause thousands of residential disasters each year, often due to obsolete wiring, overloaded breakers, missing ground rods, or DIY modifications.',
      'Our electrical system inspection evaluates the entire visible distribution system from the overhead or underground service drop to branch wiring, breaker panel dead-fronts, and outlet polarity.',
    ],
    localIntro:
      'Whether your Edgerton property is a turn-of-the-century residence or a recent build, WISCo Inspections provides comprehensive electrical safety assessments.',
    covers: [
      'Main electrical service panel amperage and service entrance cables',
      'Circuit breaker and fuse sizing matched to conductor wire gauge',
      'Panel bonding, grounding electrode conductors, and ground rod connections',
      'Inspection for vintage knob-and-tube, cloth-sheathed, or aluminum branch wiring',
      'Ground Fault Circuit Interrupter (GFCI) and Arc Fault (AFCI) safety testing',
      'Testing accessible outlets for proper polarity, grounding, and physical damage',
    ],
    whoNeedsIt: [
      'Buyers considering older homes built before 1975',
      'Homeowners planning major remodeling, EV charger, or heat pump installations',
      'Properties where previous owners completed unpermitted electrical alterations',
    ],
    whatToExpect: [
      'Removal of panel dead-front covers for interior inspection of wiring and busbars',
      'Testing of representative outlets, switches, and safety interrupters throughout the house',
      'Identification of double-tapped breakers, oversized fuses, and exposed splices',
    ],
    limitations: [
      'Concealed wiring inside finished walls, ceilings, and buried underground conduits cannot be viewed.',
      'Inspectors do not dismantle energized components or perform intrusive load calculations.',
    ],
    faqs: [
      {
        question: 'Why is knob-and-tube wiring a concern?',
        answer:
          'Knob-and-tube wiring lacks an equipment grounding conductor and its cloth insulation deteriorates over time. Many insurance carriers refuse coverage or charge higher premiums for homes with active knob-and-tube wiring.',
      },
      {
        question: 'What is a double-tapped breaker?',
        answer:
          'A double tap occurs when two wires are connected to a circuit breaker terminal rated for only one. It can cause loose connections, arcing, and fire hazards.',
      },
      {
        question: 'Where are GFCI outlets required?',
        answer:
          'GFCI protection is essential in areas where water is present, including kitchens, bathrooms, garages, crawl spaces, unfinished basements, and outdoor receptacles.',
      },
    ],
    related: ['home-inspection', 'buyer-home-inspection', 'thermal-imaging-inspection', 'pre-listing-inspection'],
  },
  {
    slug: 'thermal-imaging-inspection',
    name: 'Thermal Imaging Inspection',
    icon: Thermometer,
    image: { src: PHOTOS.doorframe, alt: 'Thermal imaging camera evaluating heat loss around window and door frames' },
    seoTitle: 'Thermal Imaging & Infrared Inspection | WISCo Inspections, LLC',
    metaDescription:
      'Non-invasive infrared thermal imaging to identify hidden moisture leaks, missing insulation, and overheating electrical components. Call (608) 642-1112.',
    summary:
      'State-of-the-art infrared camera technology to reveal hidden moisture leaks, energy loss, missing insulation, and electrical hotspots behind walls.',
    overview: [
      'Thermal imaging allows us to see what the naked eye cannot. By capturing surface temperature variations, our calibrated infrared cameras reveal concealed water leaks, air drafts, insulation gaps, and overloaded electrical circuits without damaging walls.',
      'This non-destructive diagnostic service is invaluable for discovering moisture intrusion from plumbing pipes or roofs before visible stains and mold develop.',
    ],
    localIntro:
      'Detect hidden energy waste and concealed leaks in your Edgerton, WI home with thermal imaging from WISCo Inspections, LLC.',
    covers: [
      'Infrared scan of exterior walls and ceilings for insulation voids and cold air infiltration',
      'Detection of concealed plumbing leaks behind drywall and underneath fixtures',
      'Roof leak tracking and moisture path identification inside ceilings',
      'Electrical panel thermal scanning to detect hot circuits and loose wire terminals',
      'Locating radiant floor heating loops and verifying uniform heating performance',
    ],
    whoNeedsIt: [
      'Homeowners experiencing mysterious moisture or recurring high heating bills',
      'Buyers seeking the most rigorous, high-tech inspection available',
      'Property owners after heavy storms, roof repairs, or plumbing incidents',
    ],
    whatToExpect: [
      'Systematic room-by-room infrared scan of walls, ceilings, and mechanical panels',
      'Side-by-side high-resolution digital and thermal comparative photos in your report',
      'Moisture meter corroboration for any thermal cold spots suggesting leaks',
    ],
    limitations: [
      'Infrared cameras detect surface temperature differences—they do not see through walls like X-rays.',
      'An adequate temperature difference (delta-T) between indoor and outdoor air is required for building envelope energy scans.',
    ],
    faqs: [
      {
        question: 'Can thermal imaging see through walls?',
        answer:
          'No. A thermal camera reads infrared energy emitted from wall surfaces. Evaporating water or missing insulation creates subtle surface temperature changes that the camera highlights in color.',
      },
      {
        question: 'Does thermal imaging find mold?',
        answer:
          'Thermal cameras do not detect mold directly, but they quickly identify the hidden moisture sources and damp materials that allow mold to grow.',
      },
      {
        question: 'Is thermal imaging included in every inspection?',
        answer:
          'We utilize thermal cameras during general inspections for suspected problem areas, and provide full-house comprehensive infrared energy and moisture surveys upon request.',
      },
    ],
    related: ['home-inspection', 'mold-testing', 'electrical-inspection', 'attic-roof-inspection'],
  },
  {
    slug: 'warranty-inspection',
    name: '11-Month Builder Warranty Inspection',
    icon: Award,
    image: { src: PHOTOS.heroInspector, alt: 'Home inspector checking construction finishing, framing, and fixtures in a new home' },
    seoTitle: '11-Month Builder Warranty Inspection | WISCo Inspections, LLC',
    metaDescription:
      'Independent 11-month warranty inspection for new construction homes in Wisconsin. Catch builder defects before your 1-year warranty expires. Call (608) 642-1112.',
    summary:
      'An independent evaluation for newly built homes approaching their one-year anniversary, providing an itemized punch list for your builder warranty claim.',
    overview: [
      'Most new construction homes in Wisconsin come with a 1-year builder warranty covering materials and workmanship. During the first year of occupancy, homes settle, framing lumber dries, and building systems undergo seasonal temperature extremes.',
      'Our 11-month warranty inspection uncovers nail pops, foundation settling, roofing deficiencies, HVAC imbalance, and plumbing leaks so you can require the builder to fix them before your warranty protection expires.',
    ],
    localIntro:
      'Living in a new build in Edgerton, Sun Prairie, or Dane County? Let WISCo Inspections inspect your property before your one-year builder warranty expires.',
    covers: [
      'Exterior grading, soil settlement around foundation, and downspout extensions',
      'Roofing materials, flashing terminations, vent caps, and gutter slope',
      'Attic framing, insulation settlement, and mechanical duct connections',
      'Plumbing fixtures, garbage disposal, water pressure, and shut-off valves',
      'HVAC operation, supply register airflow, and thermostat controls',
      'Interior drywall cracks, door/window latching, and cabinet alignment',
    ],
    whoNeedsIt: [
      'Homeowners who bought new construction within the past 9 to 11 months',
      'Owners approaching their builder’s one-year warranty claim cutoff date',
      'Anyone who wants an independent expert punch list backed by photographic evidence',
    ],
    whatToExpect: [
      'Complete top-to-bottom inspection of all interior and exterior systems',
      'Itemized list of warrantable defects categorized clearly for builder review',
      'Digital report with high-resolution photos that you can email directly to your builder',
    ],
    limitations: [
      'The inspection reports warrantable defects under standard construction guidelines; builder response and repair agreements depend on your specific builder contract terms.',
      'Inspection does not certify municipal code compliance, which is under the jurisdiction of local municipal inspectors.',
    ],
    faqs: [
      {
        question: 'Why do I need an inspection on a brand new home?',
        answer:
          'New construction homes are built by dozens of subcontractors working fast. Minor oversights, missing attic insulation, improper flashing, or plumbing leaks often go unnoticed until months later.',
      },
      {
        question: 'When should I schedule an 11-month inspection?',
        answer:
          'Schedule around month 10 or 11 of your ownership to give your builder ample time to schedule and complete warranty repairs before your 12-month deadline.',
      },
      {
        question: 'Will the builder accept an independent inspector’s report?',
        answer:
          'Yes. Builders routinely accept professional inspection reports because they document issues clearly with photos, specific descriptions, and industry standards.',
      },
    ],
    related: ['home-inspection', 'radon-testing', 'attic-roof-inspection', 'thermal-imaging-inspection'],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((service) => [service.slug, service]));

export const HOME_PROCESS = [
  { title: 'Call WISCo Inspections', body: 'Phone us to talk about the property and what you need from the inspection.' },
  { title: 'Discuss the property', body: 'We review the home, the inspection type, and the scope that fits your situation.' },
  { title: 'Confirm availability', body: 'We confirm availability and the details of the inspection when you call.' },
  { title: 'Complete the inspection', body: 'The inspection is carried out according to the scope agreed during your call.' },
  { title: 'Review your findings', body: 'You receive the inspection findings and report, and can ask questions about them.' },
];
