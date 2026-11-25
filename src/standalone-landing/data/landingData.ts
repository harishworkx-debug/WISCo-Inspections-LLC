/**
 * Verified data for the Standalone Local Service Landing Page
 *
 * STRICT RESIDENTIAL HOMEOWNER RULE:
 * This landing page targets Wisconsin homeowners and residential properties exclusively.
 * ZERO commercial, office, retail, or warehouse mentions.
 */

export const LANDING_CONFIG = {
  nicheTitle: 'Residential Mold & Water Damage Restoration',
  locationCity: 'Edgerton',
  locationState: 'WI',
  locationFull: 'Edgerton, WI',
  locationZip: '53534',
  serviceRegion: 'Southern Wisconsin',
  phoneDisplay: '(608) 642-1112',
  phoneHref: 'tel:+16086421112',
  licenseDisplay: 'IICRC Certified & Insured',
  standardsBody: 'IICRC S500 Water Damage & S520 Mold Remediation Standards',
  hours: '24/7 Emergency Dispatch — Day & Night',
  reviewSummary: {
    rating: '4.9',
    count: '87 verified local homeowner reviews',
  },
  coordinates: {
    lat: 42.8352,
    lng: -89.0675,
  },
  // Clean geographic map embed centered on Edgerton, WI
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Edgerton,+WI+53534&t=&z=12&ie=UTF8&iwloc=&output=embed',
};

export const LANDING_PHOTOS = {
  hero: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  waterExtraction: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
  moldRemediation: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  thermalImaging: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
  basementFlood: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  crawlSpace: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80',
  dryingEquipment: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
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
    id: 'emergency-water-extraction',
    title: '24/7 Emergency Water Extraction',
    badge: 'Immediate Dispatch',
    shortDesc:
      'High-capacity standing water extraction from flooded basements, living areas, and crawl spaces using truck-mounted vacuum pumps.',
    image: LANDING_PHOTOS.waterExtraction,
    checkpoints: [
      'Rapid 45–60 minute on-site emergency response',
      'High-power submersible trash pumps and vacuum claws',
      'Removal of standing floodwater before foundation absorption',
      'Emergency main water shut-off and loss mitigation',
      'Direct insurance claims billing and digital documentation',
    ],
  },
  {
    id: 'mold-remediation',
    title: 'Certified Residential Mold Remediation',
    badge: 'IICRC S520 Certified',
    shortDesc:
      'Safe containment, toxic spore filtration, and EPA-registered antimicrobial treatment to eradicate black mold and protect indoor air quality.',
    image: LANDING_PHOTOS.moldRemediation,
    checkpoints: [
      'Negative-air containment chambers preventing spore spread',
      'Hospital-grade HEPA air filtration capturing 99.97% of spores',
      'Safe removal of contaminated drywall, insulation & trim',
      'EPA-registered antimicrobial timber washdown & sealing',
      'Post-remediation air quality clearance verification',
    ],
  },
  {
    id: 'basement-flood',
    title: 'Basement Flood & Sump Pump Mitigation',
    badge: 'Homeowner Protection',
    shortDesc:
      'Immediate extraction of storm runoff and sump failure water, contaminated carpet tear-out, and deep masonry slab disinfection.',
    image: LANDING_PHOTOS.basementFlood,
    checkpoints: [
      'Emergency pumping of several inches or feet of standing water',
      'Sump pump failure cleanup and overflow mitigation',
      'Tear-out of waterlogged carpet, pad, and flood-cut drywall',
      'Antimicrobial disinfection of concrete foundation walls',
      'High-capacity dehumidification to dry dense masonry',
    ],
  },
  {
    id: 'structural-drying',
    title: 'Residential Structural Drying & Dehumidification',
    badge: 'Psychrometric Science',
    shortDesc:
      'High-capacity LGR dehumidifiers and directed air movers to extract bound moisture from wood framing, drywall, and hardwood floors.',
    image: LANDING_PHOTOS.dryingEquipment,
    checkpoints: [
      'High-capacity Low Grain Refrigerant (LGR) dehumidifiers',
      'High-velocity axial air movers creating circular vortex airflow',
      'Hardwood floor rescue mat systems that draw water through floor seams',
      'Cabinet and wall cavity injection drying setups',
      'Daily digital psychrometric moisture logs until dry standard is met',
    ],
  },
  {
    id: 'burst-pipe',
    title: 'Frozen & Burst Pipe Water Extraction',
    badge: 'Winter Disaster Response',
    shortDesc:
      'Urgent response for catastrophic winter copper or PEX pipe ruptures, ceiling collapses, and multi-level living area water mitigation.',
    image: LANDING_PHOTOS.hero,
    checkpoints: [
      'Emergency water shut-off and containment across all floors',
      'Extraction of pressurized burst pipe water from ceilings and floors',
      'Thermal imaging leak tracing behind finished walls',
      'Continuous drying to prevent toxic fungal spore germination',
      'Itemized Xactimate loss records for your insurance adjuster',
    ],
  },
  {
    id: 'crawlspace-mitigation',
    title: 'Crawl Space Mold & Moisture Mitigation',
    badge: 'Foundation Defense',
    shortDesc:
      'Eradication of crawl space wood rot and mold colonies, standing water drainage, and heavy-duty vapor barrier encapsulation.',
    image: LANDING_PHOTOS.crawlSpace,
    checkpoints: [
      'Mold eradication on wooden floor joists, subfloors, and sill plates',
      'Removal of wet, contaminated, sagging fiberglass insulation',
      'Pumping out standing water and leveling crawl space dirt floors',
      'Heavy-duty 12–20 mil reinforced puncture-resistant vapor barrier lining',
      'Dedicated low-temperature crawl space dehumidification',
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
    notes: 'Home Base — Downtown historic residences, Lake Koshkonong waterfront cottages, and suburban neighborhoods.',
  },
  {
    city: 'Janesville',
    county: 'Rock County',
    zip: '53545, 53546',
    notes: 'Rock River waterfront homes, mid-century ranches with finished basements, and residential subdivisions.',
  },
  {
    city: 'Madison',
    county: 'Dane County',
    zip: '53703, 53704, 53711',
    notes: 'Craftsman homes on the isthmus, lakeside single-family properties, and residential townhomes.',
  },
  {
    city: 'Beloit',
    county: 'Rock County',
    zip: '53511',
    notes: 'Historic brick colonials, riverfront neighborhoods, and single-family residential properties.',
  },
  {
    city: 'Stoughton',
    county: 'Dane County',
    zip: '53589',
    notes: 'Yahara River character homes, historic properties, and modern residential additions.',
  },
  {
    city: 'Sun Prairie',
    county: 'Dane County',
    zip: '53590',
    notes: 'Suburban single-family homes with finished basements and surrounding residential properties.',
  },
  {
    city: 'Fitchburg',
    county: 'Dane County',
    zip: '53711',
    notes: 'Single-family homes with walkout basements, master-planned neighborhoods, and residential communities.',
  },
  {
    city: 'Verona',
    county: 'Dane County',
    zip: '53593',
    notes: 'High-demand residential neighborhoods, custom walkout basements, and contemporary family homes.',
  },
  {
    city: 'Milton',
    county: 'Rock County',
    zip: '53563',
    notes: 'Established community homes, rural single-family residences, and lake-adjacent properties.',
  },
  {
    city: 'Fort Atkinson',
    county: 'Jefferson County',
    zip: '53538',
    notes: 'Rock River valley homes, historic residential districts, and single-family properties.',
  },
];

export const TRUST_PILLARS = [
  {
    title: '100% Residential Homeowner Focus',
    subtitle: 'Homeowners Exclusively',
    description:
      'We are strictly dedicated to private residential homeowners (single-family homes, townhouses, and condos). We do NOT accept commercial, retail, or warehouse projects.',
  },
  {
    title: '24/7 Rapid Emergency Response',
    subtitle: '45–60 Min Response Across Southern WI',
    description:
      'Water damage escalates every hour. Our certified emergency crews arrive promptly with high-power truck-mounted extraction units to stop damage in its tracks.',
  },
  {
    title: 'IICRC Certified Remediation',
    subtitle: 'S500 & S520 Standards of Practice',
    description:
      'We follow strict industry protocols: hospital-grade HEPA air scrubbers, negative-pressure containment barriers, and EPA-registered antimicrobial timber washes.',
  },
  {
    title: 'Direct Insurance Claims Billing',
    subtitle: 'Itemized Xactimate Documentation',
    description:
      'We document every stage of your loss with digital moisture maps and thermal images, billing your homeowners insurance provider directly to minimize your out-of-pocket stress.',
  },
];

export const LANDING_FAQS = [
  {
    question: 'Do you service commercial properties, retail stores, or warehouses?',
    answer:
      'No. Our emergency restoration services are exclusively dedicated to residential homeowners. We specialize 100% in single-family homes, townhouses, condominiums, and private residential properties. We do not accept commercial buildings, offices, retail stores, or industrial warehouses.',
  },
  {
    question: 'Who qualifies for your emergency water damage and mold services?',
    answer:
      'We exclusively serve Wisconsin homeowners and residential property owners facing sudden water leaks, basement flooding, plumbing freeze bursts, sewage backups, or toxic mold outbreaks.',
  },
  {
    question: 'Does homeowners insurance cover emergency water damage and mold remediation?',
    answer:
      'Yes, most homeowners insurance policies cover sudden and accidental water losses (such as frozen pipe bursts, water heater failures, or appliance leaks) as well as the resulting mold remediation. We work directly with your insurance adjuster and submit itemized Xactimate claims.',
  },
  {
    question: 'How fast can your emergency team arrive?',
    answer:
      'We maintain 24/7 emergency dispatch across Southern Wisconsin, including Edgerton, Janesville, Madison, Beloit, Stoughton, Sun Prairie, Fitchburg, and surrounding communities. Typical on-site arrival is 45 to 60 minutes.',
  },
  {
    question: 'How long does structural drying take?',
    answer:
      'Standard residential structural drying takes between 3 to 5 days using professional-grade LGR dehumidifiers and high-velocity axial air movers. Our technicians perform daily moisture checks to ensure every structural framing member has returned to normal equilibrium moisture content.',
  },
];
