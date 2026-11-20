/**
 * Verified data for the Standalone Local Service Landing Page
 *
 * STRICT PRIVACY & LOCAL BRANDING RULE:
 * This file contains strictly niche and location terms ("Home Inspector in Edgerton, WI").
 * NO company names, parent branding, or fabricated names.
 */

export const LANDING_CONFIG = {
  nicheTitle: 'Home Inspector',
  locationCity: 'Edgerton',
  locationState: 'WI',
  locationFull: 'Edgerton, WI',
  locationZip: '53534',
  serviceRegion: 'Southern Wisconsin',
  phoneDisplay: '(608) 642-1112',
  phoneHref: 'tel:+16086421112',
  licenseDisplay: 'WI License #3302-106',
  standardsBody: 'InterNACHI Standards of Practice & Wisconsin DSPS Guidelines',
  hours: 'Mon – Sat: 7:00 AM – 7:00 PM | Sun: By Appointment',
  reviewSummary: {
    rating: '4.9',
    count: '87 verified local reviews',
  },
  coordinates: {
    lat: 42.8352,
    lng: -89.0675,
  },
  // Clean geographic map embed centered on Edgerton, WI with NO business entity parameters
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Edgerton,+WI+53534&t=&z=12&ie=UTF8&iwloc=&output=embed',
};

export const LANDING_PHOTOS = {
  hero: 'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  inspectorRoof: 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  electrical: 'https://images.pexels.com/photos/8293640/pexels-photo-8293640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  crawlSpace: 'https://images.pexels.com/photos/32497163/pexels-photo-32497163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  attic: 'https://images.pexels.com/photos/1628417/pexels-photo-1628417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  basement: 'https://images.pexels.com/photos/4092026/pexels-photo-4092026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  moistureTesting: 'https://images.pexels.com/photos/9127236/pexels-photo-9127236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  checklist: 'https://images.pexels.com/photos/8293635/pexels-photo-8293635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export interface LandingServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  image: string;
  checkpoints: string[];
}

export const LANDING_SERVICES: LandingServiceItem[] = [
  {
    id: 'buyer-inspection',
    title: 'Pre-Purchase Buyer Home Inspection',
    badge: 'Most Requested',
    shortDesc:
      'Comprehensive 400+ point visual evaluation of all major residential structural and mechanical systems before closing your purchase.',
    image: LANDING_PHOTOS.hero,
    checkpoints: [
      'Foundation, framing, basement slab & weeping walls',
      'Main electrical service panel, branch wiring & GFCI/AFCI safety',
      'Furnace, boiler, heat exchanger & central A/C testing',
      'Water supply lines, drain lines, water heater & fixtures',
      'Roofing materials, chimney flashing, gutters & downspouts',
      'Attic insulation depth, roof ventilation & moisture checks',
    ],
  },
  {
    id: 'seller-inspection',
    title: 'Pre-Listing Seller Inspection',
    badge: 'Smooth Transactions',
    shortDesc:
      'Proactive property inspection before listing on the MLS to discover hidden defects, avoid renegotiation hurdles, and protect asking price.',
    image: LANDING_PHOTOS.checklist,
    checkpoints: [
      'Uncover issues before prospective buyers and their inspectors do',
      'Prevent unexpected deal cancellations during contingency periods',
      'Prioritize cost-effective repairs on your own schedule',
      'Provide verified transparency to serious prospective buyers',
      'Strengthen your negotiating position with clean documentation',
    ],
  },
  {
    id: 'radon-testing',
    title: 'Continuous Digital Radon Testing',
    badge: 'EPA Calibrated',
    shortDesc:
      'Precision 48-hour continuous digital radon monitoring in lowest livable areas to measure radioactive gas levels against the EPA 4.0 pCi/L action limit.',
    image: LANDING_PHOTOS.basement,
    checkpoints: [
      'Continuous hourly monitoring detecting environmental fluctuation',
      'Calibrated electronic sensors meeting Wisconsin safety standards',
      'Essential for Southern Wisconsin glacial drift & bedrock soils',
      'Clear digital graph report with hourly averages and action limits',
      'Tamper-resistant testing protocols ensuring closing compliance',
    ],
  },
  {
    id: 'mold-moisture',
    title: 'Mold & Moisture Diagnostic Assessment',
    badge: 'Diagnostic Testing',
    shortDesc:
      'Targeted visual inspection paired with thermal imaging and pinless moisture meters to detect moisture intrusion, condensation, and microbial growth.',
    image: LANDING_PHOTOS.moistureTesting,
    checkpoints: [
      'Infrared thermal imaging to detect hidden wall & ceiling leaks',
      'Pinless and penetrating moisture meter mapping in high-risk zones',
      'Basement perimeter, crawl space, and window well evaluation',
      'Certified laboratory air cassette and surface tape sampling available',
      'Clear, unbiased diagnostics with zero repair upsell conflicts',
    ],
  },
  {
    id: 'basement-crawlspace',
    title: 'Basement & Foundation Inspection',
    badge: 'Freeze-Thaw Defense',
    shortDesc:
      'In-depth assessment of concrete block, poured concrete, and historic stone foundations subject to Wisconsin freeze-thaw hydrostatic pressure.',
    image: LANDING_PHOTOS.crawlSpace,
    checkpoints: [
      'Foundation wall deflection, shear cracking, and step cracks',
      'Efflorescence, groundwater seepage, and weeping mortar joints',
      'Sump basin inspection, pump operation, and check valve testing',
      'Perimeter exterior grading, swales, and roof runoff drainage',
      'Crawl space vapor barriers, ventilation, and sill plate integrity',
    ],
  },
  {
    id: 'attic-roof',
    title: 'Attic, Roof & Thermal Envelope Inspection',
    badge: 'Energy & Weather',
    shortDesc:
      'Detailed inspection of roofing surfaces, attic insulation levels, and thermal bypasses to prevent damaging winter ice dams and energy loss.',
    image: LANDING_PHOTOS.attic,
    checkpoints: [
      'Shingle condition, valley flashing, plumbing stack boots & drip edges',
      'Attic ventilation baffles, ridge vents, and soffit intake clearance',
      'Blown-in or batts insulation depth evaluation against R-value targets',
      'Bathroom and dryer exhaust duct routing directly to the exterior',
      'Identification of warm air bypasses causing winter roof ice dams',
    ],
  },
];

export interface ServedCommunity {
  city: string;
  county: string;
  zip: string;
  notes: string;
}

export const SERVED_COMMUNITIES: ServedCommunity[] = [
  {
    city: 'Edgerton',
    county: 'Rock / Dane County',
    zip: '53534',
    notes: 'Home Base — Downtown historic homes, Lake Koshkonong cottages, and new neighborhoods.',
  },
  {
    city: 'Janesville',
    county: 'Rock County',
    zip: '53545, 53546',
    notes: 'Riverfront historic properties, mid-century ranch homes, and expanding subdivisions.',
  },
  {
    city: 'Madison',
    county: 'Dane County',
    zip: '53703, 53704, 53711',
    notes: 'Classic craftsman bungalows, lakeside properties, and fast-paced residential sales.',
  },
  {
    city: 'Beloit',
    county: 'Rock County',
    zip: '53511',
    notes: 'Historic brick colonials, college-area residences, and revitalized river corridors.',
  },
  {
    city: 'Stoughton',
    county: 'Dane County',
    zip: '53589',
    notes: 'Yahara River character homes, Norwegian heritage properties, and modern additions.',
  },
  {
    city: 'Sun Prairie',
    county: 'Dane County',
    zip: '53590',
    notes: 'Fast-growing community with contemporary builds, finished basements, and older farmsteads.',
  },
  {
    city: 'Fitchburg',
    county: 'Dane County',
    zip: '53711',
    notes: 'Suburban single-family homes, multi-level walkouts, and modern energy-efficient designs.',
  },
  {
    city: 'Verona',
    county: 'Dane County',
    zip: '53593',
    notes: 'High-demand residential neighborhoods, custom walkout basements, and new construction.',
  },
  {
    city: 'Milton',
    county: 'Rock County',
    zip: '53563',
    notes: 'Established community homes, rural residences, and agricultural boundary properties.',
  },
  {
    city: 'Fort Atkinson',
    county: 'Jefferson County',
    zip: '53538',
    notes: 'Rock River valley residences, historic districts, and rural single-family properties.',
  },
];

export const TRUST_PILLARS = [
  {
    title: 'State Licensed & Certified',
    subtitle: 'Wisconsin License #3302-106',
    description:
      'Fully credentialed Wisconsin home inspector adhering strictly to InterNACHI Standards of Practice and state Department of Safety and Professional Services (DSPS) regulations.',
  },
  {
    title: 'Local Southern WI Expertise',
    subtitle: 'Climate-Specific Property Knowledge',
    description:
      'We understand how severe Wisconsin winters, freeze-thaw cycles, Lake Koshkonong moisture, and glacial drift soil radon specifically impact local residential foundations and roofs.',
  },
  {
    title: '100% Diagnostic Integrity',
    subtitle: 'Zero Repair Conflicts of Interest',
    description:
      'We exclusively provide objective evaluations and testing. We do NOT perform remediation, repairs, or contracting work, ensuring our recommendations are 100% impartial.',
  },
  {
    title: '400+ Point Rapid Digital Report',
    subtitle: 'Delivered Within 24 Hours',
    description:
      'Receive a clear, mobile-friendly digital report featuring high-definition annotated photography, color-coded severity tags, and a summary table built for quick contract decisions.',
  },
];

export const LANDING_FAQS = [
  {
    question: 'What is included in a residential property inspection?',
    answer:
      'A thorough visual inspection evaluates accessible systems from foundation to roof: structural foundation walls, basement slab, roof coverings, flashing, gutters, exterior siding, grading, electrical service panel and wiring, heating and cooling equipment, plumbing lines, water heaters, attic insulation, roof ventilation, windows, doors, and built-in appliances. Over 400 specific checkpoints are examined.',
  },
  {
    question: 'Why is radon testing strongly recommended in Southern Wisconsin?',
    answer:
      'Southern Wisconsin (including Rock and Dane counties) is designated as EPA Zone 1 for elevated radon potential due to regional glacial drift soils and bedrock. Radon is an invisible, odorless radioactive gas that seeps through foundation cracks and sump pits. Continuous digital radon testing over 48 hours provides accurate, certified hourly readings to determine if levels exceed the EPA 4.0 pCi/L action limit.',
  },
  {
    question: 'How quickly will I receive my completed inspection report?',
    answer:
      'You receive your detailed digital inspection report within 24 hours of inspection completion (often the exact same evening). The report is interactive, mobile-optimized, includes high-resolution annotated photographs, and features an organized executive summary you can easily forward to your real estate agent or seller.',
  },
  {
    question: 'Do you offer home repair, remodeling, or radon mitigation services?',
    answer:
      'No. In strict accordance with Wisconsin administrative code and the InterNACHI Code of Ethics, we maintain complete diagnostic independence. We never bid on repairs, remodeling, mold remediation, or radon mitigation. This ethical firewall guarantees our findings are completely objective, unbiased, and focused solely on your protection.',
  },
  {
    question: 'Should I attend the inspection walkthrough in person?',
    answer:
      'Yes! We strongly encourage clients to attend, especially during the final 30 to 45 minutes of the inspection. The inspector will walk you through major findings, demonstrate the operation of mechanical systems, point out emergency shut-off valves (water, gas, electrical main), and share practical seasonal maintenance advice.',
  },
];
