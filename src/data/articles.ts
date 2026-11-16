export type Article = {
  slug: string;
  title: string;
  mainKeyword: string;
  metaDescription: string;
  publishDate: string;
  readTime: string;
  targetServiceSlug: string;
  targetServiceAnchor: string;
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'what-does-a-home-inspection-include-wisconsin',
    title: 'What Does a Home Inspection Include in Wisconsin?',
    mainKeyword: 'Wisconsin home inspection checklist',
    metaDescription:
      'Understand what is evaluated during a Wisconsin home inspection. Over 400 checkpoints covering foundations, roofs, electrical, plumbing, and HVAC systems.',
    publishDate: '2026-11-14',
    readTime: '6 min read',
    targetServiceSlug: 'home-inspection',
    targetServiceAnchor: 'Professional Wisconsin Home Inspection Services',
    summary:
      'A thorough residential home inspection in Wisconsin is a non-invasive, visual evaluation of accessible building systems from foundation to roof, designed to uncover safety hazards and major defects before you buy or sell.',
    sections: [
      {
        heading: 'The Scope of a Wisconsin Residential Property Inspection',
        paragraphs: [
          'Under Wisconsin state standards of practice for licensed home inspectors (Wis. Admin. Code SPS 131), a home inspection evaluates the accessible physical structure and mechanical systems of a home at the time of the inspection.',
          'Rather than being a simple pass/fail grade, a professional inspection is an objective status assessment. It identifies components operating normally, items nearing the end of their functional lifespan, deferred maintenance items, and critical safety hazards that require immediate contractor evaluation.',
        ],
      },
      {
        heading: 'Major Components on the Wisconsin Inspection Checklist',
        paragraphs: [
          'WISCo Inspections examines more than 400 individual checkpoints across eight primary system categories. Key areas reviewed include:',
        ],
        checklist: [
          'Foundation & Structure: Poured concrete, masonry blocks, carrying beams, support columns, floor joists, and crawl space vapor retarders.',
          'Roofing & Drainage: Shingles, step and valley flashing, plumbing vent boots, chimney masonry, gutters, and downspout extensions.',
          'Attic & Thermal Envelope: Insulation depth and R-value, roof sheathing, framing trusses, and bathroom fan exhaust duct terminations.',
          'Electrical Service & Distribution: Main service entrance amperage, circuit breaker sizing, conductor wire type (checking for knob-and-tube or cloth wiring), and GFCI/AFCI receptacles.',
          'Plumbing Systems: Main shut-off valves, water supply lines, waste drain stacks, water heater safety valves (TPR), and sump pump float travel.',
          'Heating & Cooling (HVAC): Furnace operational checks, burner cleanliness, flue draft integrity, air filter condition, and AC condenser temperature split.',
          'Interior Living Areas: Windows, doors, stairway tread/handrail safety, fire doors, smoke alarms, and carbon monoxide detectors.',
        ],
      },
      {
        heading: 'What Is Excluded from a Standard Visual Inspection?',
        paragraphs: [
          'A standard home inspection is non-invasive and visual. It does not dismantle walls, ceilings, or sealed systems. Items concealed behind drywall, underground sewer lateral pipes, or buried fuel tanks require specialized third-party testing.',
          'Environmental diagnostics—including continuous radon gas testing and mold air spore sampling—are specialized add-ons that should be requested when booking your inspection.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the inspector test every outlet in the home?',
        answer:
          'Inspectors test representative outlets in every room, and 100% of accessible outlets in wet zones (kitchens, bathrooms, garages, basements, and exteriors) for GFCI ground fault safety and polarity.',
      },
      {
        question: 'How long does a typical Wisconsin inspection take?',
        answer:
          'A thorough inspection takes between 2.5 and 4 hours depending on the property size, age, and foundation type. Inspector Phil Jackson takes the time necessary to inspect every accessible component carefully.',
      },
    ],
  },
  {
    slug: 'how-much-does-a-home-inspection-cost-wisconsin',
    title: 'How Much Does a Home Inspection Cost in Wisconsin?',
    mainKeyword: 'Home inspection cost Wisconsin',
    metaDescription:
      'Learn about typical home inspection costs in Wisconsin, what factors influence inspection pricing, and how bundle add-ons like radon and mold save money.',
    publishDate: '2026-11-14',
    readTime: '5 min read',
    targetServiceSlug: 'buyer-home-inspection',
    targetServiceAnchor: 'Buyer Home Inspection Pricing & Scopes',
    summary:
      'Home inspection fees in South Central Wisconsin typically range from $375 to $650, varying primarily based on square footage, home age, foundation complexity, and specialized testing add-ons.',
    sections: [
      {
        heading: 'Average Pricing for Wisconsin Home Inspections',
        paragraphs: [
          'In South Central Wisconsin communities including Madison, Janesville, and Edgerton, standard residential home inspection pricing generally reflects the time, liability, and specialized diagnostic equipment required.',
          'For a standard single-family home under 2,000 square feet, buyers typically invest between $375 and $450. Larger properties (2,500 to 4,000+ sq ft), historic homes with complex foundations, or dual-unit multi-family properties range from $475 to $650+.',
        ],
      },
      {
        heading: 'Key Factors That Determine Inspection Cost',
        paragraphs: [
          'Several physical and logistical variables dictate the final inspection fee:',
        ],
        checklist: [
          'Total Square Footage: Larger properties require significantly more time to test receptacles, inspect windows, and examine heating/plumbing loops.',
          'Age of the Home: Century-old homes in Madison or Beloit often feature vintage framing, active knob-and-tube wiring, and older masonry that requires meticulous review.',
          'Foundation Type: Basements with crawl spaces require additional protective gear and hands-on traversal compared to slab-on-grade builds.',
          'Ancillary Environmental Testing: Adding 48-hour continuous digital radon monitoring or laboratory mold air sampling.',
        ],
      },
      {
        heading: 'Why Cheap Inspections Often Cost Homeowners More',
        paragraphs: [
          'Attempting to save $50 to $75 by hiring the lowest-cost inspector often leads to rushed walk-throughs, missed safety defects, and boiler-plate checklist reports without annotated photos.',
          'Investing in an independent inspector equipped with infrared thermal imaging and pinless moisture meters routinely saves buyers thousands of dollars during repair negotiations.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Who pays for the home inspection in Wisconsin?',
        answer:
          'In almost all standard real estate purchase contracts, the buyer selects, hires, and pays for the independent home inspection during their contingency window.',
      },
      {
        question: 'Is it cheaper to bundle radon testing with a home inspection?',
        answer:
          'Yes. Most inspectors offer a substantial package discount when booking continuous radon testing or mold air sampling at the same time as the general inspection.',
      },
    ],
  },
  {
    slug: '10-common-problems-found-during-home-inspections',
    title: '10 Common Problems Found During Home Inspections',
    mainKeyword: 'Common home inspection problems',
    metaDescription:
      'Discover the 10 most frequent defects uncovered during Wisconsin property inspections, from wet basements and missing GFCIs to improper attic ventilation.',
    publishDate: '2026-11-14',
    readTime: '7 min read',
    targetServiceSlug: 'home-inspection',
    targetServiceAnchor: 'Comprehensive Home Inspection Services',
    summary:
      'From basement moisture infiltration to ungrounded electrical circuits, these 10 common issues appear frequently during residential property inspections across South Central Wisconsin.',
    sections: [
      {
        heading: 'Frequent Defects Uncovered in Wisconsin Properties',
        paragraphs: [
          'Even homes that look immaculate on surface showings frequently harbor hidden mechanical deficiencies or deferred maintenance items. Understanding the most frequent findings helps buyers prepare repair contingency requests and helps sellers proactively address issues before listing.',
        ],
        checklist: [
          '1. Negative Exterior Grading: Soil sloping toward the foundation instead of away, allowing rainwater and snowmelt to saturate basement masonry.',
          '2. Missing Downspout Extensions: Downspouts dumping roof water directly against foundation walls rather than discharging 6+ feet away.',
          '3. Electrical Safety Violations: Double-tapped circuit breakers inside panels, open junction boxes, and ungrounded two-prong outlets in older homes.',
          '4. Missing GFCI Protection: Lack of ground-fault circuit interrupters near water sources in kitchens, bathrooms, unfinished basements, and outdoor outlets.',
          '5. Basement Moisture & Efflorescence: White mineral residue on foundation walls signaling ongoing groundwater seepage and hydrostatic pressure.',
          '6. Inadequate Attic Ventilation: Blocked soffit vents or insufficient ridge ventilation leading to moisture buildup, wood rot, and winter ice dams.',
          '7. Bathroom Exhaust Terminating in Attics: Exhaust fans dumping moist humid air directly into attic spaces rather than ducting outside through roof caps.',
          '8. Plumbing Leaks & Slow Drains: Minor active drips under sink P-traps, worn toilet flappers, or corroded galvanized supply pipes.',
          '9. Water Heater TPR Discharge Deficiencies: Missing or improperly pitched discharge pipes on temperature-pressure relief valves creating scalding risks.',
          '10. Damaged Roof Shingles & Flashing Gaps: Missing granules, lifted shingles, and deteriorated chimney step flashing that invite ceiling leaks.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are all 10 problems considered deal-breakers?',
        answer:
          'No. Most items (such as extending downspouts, installing GFCI outlets, or reconnecting bath fan ducts) are minor, inexpensive fixes. Major structural foundation bowing or obsolete electrical panels represent more serious negotiation points.',
      },
    ],
  },
  {
    slug: 'should-you-get-a-home-inspection-before-selling',
    title: 'Should You Get a Home Inspection Before Selling Your Wisconsin Home?',
    mainKeyword: 'Pre-listing home inspection',
    metaDescription:
      'Learn why sellers in Wisconsin benefit from a pre-listing inspection. Avoid buyer renegotiations, control repair costs, and speed up closing day.',
    publishDate: '2026-11-14',
    readTime: '5 min read',
    targetServiceSlug: 'pre-listing-inspection',
    targetServiceAnchor: 'Pre-Listing Inspection for Home Sellers',
    summary:
      'A pre-listing home inspection puts sellers in control of their real estate transaction by revealing repair needs in advance, preventing aggressive buyer price reductions, and ensuring smooth closings.',
    sections: [
      {
        heading: 'The Strategic Advantage of Inspecting Before You List',
        paragraphs: [
          'Most home sales hit unexpected friction during the buyer’s inspection contingency period. When an independent inspector uncovers unexpected roof leaks, electrical panel double-taps, or sump pump failures, buyers often react with panic, demanding inflated repair credits or walking away entirely.',
          'By ordering a pre-listing inspection before planting the "For Sale" sign, homeowners gain an objective preview of what the buyer’s inspector will find. This allows sellers to make repairs calmly using their preferred contractors, substantiate their asking price, and present a clean disclosure packet.',
        ],
      },
      {
        heading: 'Top Benefits for Wisconsin Home Sellers',
        paragraphs: ['Key financial and logistical advantages include:'],
        checklist: [
          'No Rushed Contractor Fees: Complete repairs on your own schedule instead of paying emergency rush rates during tight 10-day contingency windows.',
          'Strengthened Pricing Defense: Solidify your listing price with documented evidence that all major structural and mechanical systems are in sound working order.',
          'Eliminates Deal-Killing Surprises: Reduce the risk of buyers renegotiating credits or canceling their purchase contract days before closing.',
          'Transparent Disclosures: Complete Wisconsin Real Estate Condition Reports accurately and honestly, minimizing post-sale legal exposure.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do sellers still have to disclose defects found in a pre-listing inspection?',
        answer:
          'Yes. Wisconsin law requires truthful disclosure of known material defects. However, once you repair the item with receipts from licensed contractors, you can disclose both the prior defect and the completed professional repair.',
      },
    ],
  },
  {
    slug: 'why-radon-testing-matters-buying-wisconsin-home',
    title: 'Why Radon Testing Matters When Buying a Wisconsin Home',
    mainKeyword: 'Radon testing Wisconsin',
    metaDescription:
      'Understand why radon testing is critical when purchasing a home in Wisconsin. Learn about EPA Zone 1 glacial soils and continuous electronic monitoring.',
    publishDate: '2026-11-14',
    readTime: '6 min read',
    targetServiceSlug: 'radon-testing',
    targetServiceAnchor: 'Certified Radon Testing Services',
    summary:
      'Because Southern Wisconsin soils contain prevalent glacial deposits, odorless radon gas commonly migrates into homes. Testing during your purchase contingency protects your health and real estate investment.',
    sections: [
      {
        heading: 'What Is Radon and Why Is Southern Wisconsin High Risk?',
        paragraphs: [
          'Radon is a naturally occurring, odorless, radioactive gas produced by the decay of uranium in soil, gravel, and rock. The EPA classifies Rock, Dane, and Jefferson counties as Zone 1 High Potential Radon Areas, where predicted indoor radon levels frequently exceed 4.0 picoCuries per liter (pCi/L).',
          'Because modern homes create natural stack effects—drawing air upward through warm living spaces—radon gas enters through foundation cracks, sump basins, and construction joints. Prolonged radon exposure is the second leading cause of lung cancer in the United States and the number one cause among non-smokers.',
        ],
      },
      {
        heading: 'How Professional Continuous Radon Testing Works',
        paragraphs: [
          'WISCo Inspections conducts continuous electronic radon monitoring over a minimum 48-hour period under closed-building conditions. Unlike store-bought charcoal test canisters that take weeks to mail to a lab, continuous electronic monitors record hourly readings to identify barometric fluctuations and provide immediate same-day digital reports upon retrieval.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the EPA action level for radon?',
        answer:
          'The EPA recommends mitigating when radon levels test at or above 4.0 pCi/L, and considering mitigation between 2.0 and 4.0 pCi/L.',
      },
      {
        question: 'Who pays to fix high radon in a real estate purchase?',
        answer:
          'If continuous testing reveals levels at or above 4.0 pCi/L, buyers routinely request that the seller install an active soil depressurization radon mitigation system prior to closing.',
      },
    ],
  },
  {
    slug: 'what-buyers-should-know-about-older-homes',
    title: 'What Buyers Should Know About Older Wisconsin Homes',
    mainKeyword: 'Older home inspection',
    metaDescription:
      'Essential inspection considerations for historic and older homes in Wisconsin, including knob-and-tube wiring, stone foundations, and galvanized plumbing.',
    publishDate: '2026-11-14',
    readTime: '6 min read',
    targetServiceSlug: 'electrical-inspection',
    targetServiceAnchor: 'Electrical System & Older Home Inspections',
    summary:
      'Historic craftsmanship and vintage character come with unique structural and mechanical realities. Here is what buyers must know when inspecting older homes built before 1975.',
    sections: [
      {
        heading: 'The Appeal and Challenges of Older Wisconsin Housing',
        paragraphs: [
          'Historic neighborhoods in Madison, Janesville, Edgerton, and Beloit feature remarkable architectural details: quarter-sawn oak trim, hand-laid brick facades, and solid timber framing. However, building codes and safety expectations have evolved dramatically over the past century.',
          'Older homes require an inspector with deep experience evaluating legacy materials, structural alterations, and outdated wiring systems that can impact home insurance underwriting.',
        ],
        checklist: [
          'Knob-and-Tube Wiring: Common in pre-1940 homes, this open-air wiring system lacks an equipment ground wire and deteriorates when covered by modern attic insulation.',
          'Stone & Mortar Foundations: Fieldstone and lime-mortar basements require regular repointing and careful exterior drainage management to avoid hydrostatic wall failure.',
          'Galvanized & Lead Plumbing: Older steel pipes corrode internally over decades, choking water pressure and introducing rust sediment.',
          'Cast Iron Waste Stacks: Cast iron sewer drain lines deteriorate along horizontal channels, leading to subterranean leaks and sewer gas intrusion.',
          'Undersized Electrical Panels: 60-amp and 100-amp fuse boxes cannot safely power modern EV chargers, heat pumps, and modern appliances without service upgrades.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will insurance companies insure a home with knob-and-tube wiring?',
        answer:
          'Many major insurance carriers will deny coverage or charge significant surcharges until active knob-and-tube wiring is professionally replaced by a licensed electrical contractor.',
      },
    ],
  },
  {
    slug: 'what-happens-during-a-basement-inspection',
    title: 'What Happens During a Basement and Crawl Space Inspection?',
    mainKeyword: 'Basement inspection',
    metaDescription:
      'Learn how inspectors evaluate basement walls, hydrostatic pressure, sump pumps, and crawl space vapor retarders in Wisconsin homes.',
    publishDate: '2026-11-14',
    readTime: '5 min read',
    targetServiceSlug: 'basement-crawl-space-inspection',
    targetServiceAnchor: 'Basement & Crawl Space Inspection Services',
    summary:
      'Wisconsin foundations carry the entire structural weight of the property while defending against harsh seasonal freeze-thaw groundwater pressure. Here is how we evaluate substructures.',
    sections: [
      {
        heading: 'Why Basements Demand Rigorous Evaluation in Wisconsin',
        paragraphs: [
          'Wisconsin soils undergo deep freezing in winter and saturated thawing in spring. When heavy clay soils absorb moisture, they expand and exert enormous hydrostatic lateral pressure against foundation walls.',
          'Our basement and crawl space inspection examines poured concrete, masonry block, and stone walls for horizontal pressure cracks, stair-step cracks, wall bowing, and foundation displacement.',
        ],
        checklist: [
          'Moisture Meter Testing: Measuring moisture percentages in baseboards, sill plates, and drywall to identify active seepage.',
          'Efflorescence & Staining: Documenting white mineral residue left behind by evaporated water.',
          'Support Beams & Posts: Inspecting steel lally columns, wood posts, and carrying girders for levelness and deflection.',
          'Sump Pump Reliability: Testing float switches, check valves, and exterior discharge lines to ensure groundwater is pumped away.',
          'Crawl Space Soil Retarders: Verifying thick, continuous plastic vapor barriers that prevent soil moisture and earth odors from rising into living areas.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a vertical crack in a concrete basement wall dangerous?',
        answer:
          'Vertical cracks are often harmless shrinkage cracks that occur as concrete cures. However, horizontal cracks or inward bowing walls indicate serious soil pressure that requires structural engineering attention.',
      },
    ],
  },
  {
    slug: 'home-inspection-vs-appraisal',
    title: 'Home Inspection vs. Appraisal: What’s the Difference?',
    mainKeyword: 'Home inspection vs appraisal',
    metaDescription:
      'Understand the key differences between a home inspection and a bank appraisal in Wisconsin. Learn why both are essential when buying a property.',
    publishDate: '2026-11-14',
    readTime: '5 min read',
    targetServiceSlug: 'buyer-home-inspection',
    targetServiceAnchor: 'Buyer Inspection Services',
    summary:
      'While often confused by first-time homebuyers, an appraisal determines property financial market value for the lender, while an inspection evaluates physical safety, function, and defects for the buyer.',
    sections: [
      {
        heading: 'Two Distinct Evaluations for Two Different Stakeholders',
        paragraphs: [
          'During a Wisconsin real estate purchase, you will encounter both an inspection and an appraisal. While both professionals visit the property, their purpose, scope, and fiduciary duty are fundamentally different.',
        ],
        checklist: [
          'Home Inspection: Hired by you (the buyer). The inspector spends 3+ hours crawling attics, testing electrical outlets, evaluating furnaces, and inspecting plumbing to protect your physical safety and budget.',
          'Home Appraisal: Ordered by your mortgage lender. The appraiser spends 20–30 minutes confirming square footage, room counts, and comparing recent neighborhood sales to protect the bank’s loan value.',
        ],
      },
      {
        heading: 'Does a Good Appraisal Mean the Home Is in Good Condition?',
        paragraphs: [
          'No! An appraiser will not test GFCI outlets, walk the roof, crawl into low attic spaces, or use thermal imaging cameras. An appraisal only estimates what the property is worth on paper, whereas an inspection explains how the home actually works and what needs fixing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can an appraisal replace a home inspection?',
        answer:
          'Never. Waiving an inspection because the lender completed an appraisal leaves buyers vulnerable to thousands of dollars in hidden foundation, roofing, and mechanical repair costs.',
      },
    ],
  },
  {
    slug: 'when-should-you-schedule-new-construction-inspection',
    title: 'When Should You Schedule a New Construction Inspection?',
    mainKeyword: 'New construction home inspection',
    metaDescription:
      'Why new construction homes need independent third-party inspections in Wisconsin. Understanding municipal code limits and construction phases.',
    publishDate: '2026-11-14',
    readTime: '5 min read',
    targetServiceSlug: 'warranty-inspection',
    targetServiceAnchor: 'New Construction & Warranty Inspections',
    summary:
      'Brand new homes are built by dozens of subcontractors working on fast deadlines. An independent inspection catches builder oversights before drywall goes up and before final walkthrough closings.',
    sections: [
      {
        heading: 'Why New Builds Need an Independent Inspector',
        paragraphs: [
          'Many homebuyers assume that a brand-new home is defect-free and that city municipal inspectors have verified every detail. However, municipal building inspectors often spend less than 15 minutes on site, verifying only minimum building codes.',
          'An independent inspector reviews the quality of workmanship, HVAC balancing, attic insulation coverage, exterior grading, and plumbing connections that municipal inspectors routinely overlook.',
        ],
        checklist: [
          'Pre-Drywall Rough-In Inspection: Performed before insulation and sheetrock conceal plumbing lines, wiring runs, framing trusses, and ductwork.',
          'Final Pre-Closing Inspection: Conducted 3 to 5 days before your final builder walkthrough to compile an itemized punch-list of cosmetic and functional defects.',
          '11-Month Builder Warranty Inspection: Completed at month 10 or 11 before your standard 1-year builder warranty expires.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will builders fix defects found by an independent inspector?',
        answer:
          'Yes. Reputable Wisconsin builders welcome clear, photo-documented independent reports because they clarify legitimate punch-list items for subcontractors to repair.',
      },
    ],
  },
  {
    slug: 'what-is-an-11-month-warranty-inspection',
    title: 'What Is an 11-Month Builder Warranty Inspection?',
    mainKeyword: '11-month warranty inspection',
    metaDescription:
      'Learn why Wisconsin homeowners schedule an 11-month warranty inspection before their 1-year builder warranty expires. Catch drywall cracks, nail pops, and settlement.',
    publishDate: '2026-11-14',
    readTime: '5 min read',
    targetServiceSlug: 'warranty-inspection',
    targetServiceAnchor: '11-Month Builder Warranty Inspection',
    summary:
      'Most newly built Wisconsin homes include a 1-year builder warranty. An 11-month warranty inspection uncovers lumber shrinkage, truss uplift, and mechanical settlement before your protection ends.',
    sections: [
      {
        heading: 'Protect Your Warranty Rights Before Time Runs Out',
        paragraphs: [
          'During your first four seasons in a new home, framing lumber dries out, concrete foundation walls cure, and the house settles under seasonal snow and rain loads. This natural shifting frequently causes ceiling drywall cracks, nail pops, sticking exterior doors, displaced attic insulation, and loose roof flashing.',
          'An 11-month warranty inspection provides an expert, photo-annotated punch list that you can submit directly to your builder’s warranty department, requiring them to make necessary repairs at their expense rather than yours.',
        ],
        checklist: [
          'Truss uplift and ceiling/wall intersection cracking.',
          'Exterior soil settlement around the foundation causing negative grading.',
          'Displaced or missing blown-in attic insulation around recessed lights.',
          'HVAC ductwork separations and register airflow imbalances.',
          'Plumbing drain leaks under sinks, tubs, and disposals.',
          'Window and door weatherstripping gaps allowing winter drafts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When is the best time to schedule an 11-month inspection?',
        answer:
          'Schedule around month 10 or 11 of your ownership so your builder has ample time to schedule subcontractors and complete repairs before your 365-day deadline expires.',
      },
    ],
  },
];

export const ARTICLE_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
