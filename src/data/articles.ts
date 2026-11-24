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
    slug: 'how-to-handle-water-damage-wisconsin-home',
    title: 'How to Handle Sudden Water Damage in a Wisconsin Home',
    mainKeyword: 'Wisconsin water damage restoration',
    metaDescription:
      'Critical emergency steps to take immediately when water damage strikes your Wisconsin home. Stop the leak, prevent toxic mold, and ensure insurance coverage.',
    publishDate: '2026-11-20',
    readTime: '6 min read',
    targetServiceSlug: 'water-damage-restoration',
    targetServiceAnchor: 'Professional Water Damage Restoration Services',
    summary:
      'Sudden water damage from pipe bursts, storm runoff, or appliance failures requires rapid action within the first 24 to 48 hours to prevent structural warping and toxic mold colonization.',
    sections: [
      {
        heading: 'The 24-Hour Clock: Why Rapid Action Saves Your Home',
        paragraphs: [
          'Water is the single most destructive element inside a residential building. Within minutes of a leak, water spreads through porous drywall, seeps into subflooring, and saturates wall insulation. Within 24 to 48 hours, stagnant moisture and ambient warmth trigger active mold spore germination.',
          'In Wisconsin, where winter temperatures cause pipe bursts and summer thunderstorms saturate low-lying basements, knowing what to do immediately can save tens of thousands of dollars in structural repairs and prevent long-term health hazards.',
        ],
      },
      {
        heading: 'Immediate Emergency Checklist for Homeowners',
        paragraphs: [
          'Before professional mitigation crews arrive with truck-mounted pumps, complete these safety and mitigation steps if it is safe to do so:',
        ],
        checklist: [
          'Shut Off the Main Water Supply: Locate your home’s main shut-off valve (typically in the basement near the water meter) and turn it clockwise until fully closed.',
          'Turn Off Electricity in Wet Zones: If standing water reaches electrical outlets or baseboard heaters, cut power at the main circuit breaker. Never enter standing water with live power.',
          'Document Everything Before Cleanup: Take high-resolution photographs and videos of standing water levels, damaged furniture, and wet structural walls for your insurance adjuster.',
          'Call a Certified 24/7 Mitigation Team: Contact WISCo Mold & Water Damage at (608) 642-1112 for immediate water extraction and containment.',
        ],
      },
      {
        heading: 'Why Household Fans Are Not Enough',
        paragraphs: [
          'Many homeowners mistakenly believe placing standard box fans and running a small dehumidifier will dry a water-damaged room. Unfortunately, surface moisture is only 20% of the problem. Up to 80% of water absorbs deep into sill plates, subflooring, and interior wall studs.',
          'Professional structural drying requires commercial Low Grain Refrigerant (LGR) dehumidifiers and high-velocity axial air movers that create low vapor pressure differentials, literally pulling bound moisture out of the pores of building materials.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How quickly does mold grow after a water leak?',
        answer:
          'Under typical indoor temperatures (65°F to 80°F), microscopic mold spores will begin germinating within 24 to 48 hours of sustained moisture contact.',
      },
      {
        question: 'Should I call my insurance company or a restoration contractor first?',
        answer:
          'Call your restoration contractor immediately. Most insurance policies require homeowners to take reasonable steps to mitigate secondary damage right away. A certified mitigation company can begin emergency water extraction while helping you open the insurance claim.',
      },
    ],
  },
  {
    slug: 'mold-remediation-vs-mold-testing',
    title: 'Mold Remediation vs. Mold Testing: What Homeowners Need to Know',
    mainKeyword: 'Mold remediation vs mold testing',
    metaDescription:
      'Understand the crucial difference between mold testing and mold remediation. Learn when you need air spore lab testing and when full containment removal is required.',
    publishDate: '2026-11-20',
    readTime: '5 min read',
    targetServiceSlug: 'mold-remediation',
    targetServiceAnchor: 'Certified Mold Remediation & Removal Services',
    summary:
      'Mold testing provides scientific proof of spore species and concentrations, while mold remediation is the physical containment, removal, and antimicrobial eradication of fungal growth.',
    sections: [
      {
        heading: 'Defining Mold Testing vs. Remediation',
        paragraphs: [
          'Homeowners facing mold concerns often confuse testing with remediation. While both are critical phases of indoor environmental management, they serve entirely different functions.',
          'Mold Testing is diagnostic: an environmental specialist collects indoor air cassettes and surface swabs to send to an accredited microbiology laboratory. The lab report identifies exact mold species (e.g., Stachybotrys, Aspergillus, Cladosporium) and counts per cubic meter.',
          'Mold Remediation is physical cleanup and removal: certified technicians erect negative air containment barriers, run HEPA scrubbers, remove contaminated porous materials, and apply EPA-registered fungicidal coatings to permanently kill root systems.',
        ],
      },
      {
        heading: 'When Do You Need Testing Before Remediation?',
        paragraphs: [
          'Testing is recommended when you smell musty odors but see no visible mold, when unexplained respiratory illness occurs, or when buying/selling a property. If you already have extensive visible black mold covering several square feet of drywall following a pipe leak, remediation is immediately required.',
        ],
        checklist: [
          'Pre-Remediation Testing: Establishes baseline contamination levels and maps all affected rooms.',
          'Post-Remediation Clearance Testing: Conducted after cleanup to independently verify airborne spore counts have returned to normal clean outdoor baseline levels.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I just spray bleach on mold instead of remediating?',
        answer:
          'No! The EPA and OSHA do not recommend bleach for porous surfaces like wood framing or drywall. Bleach is mostly water; the chlorine evaporates rapidly while the water soaks into the wood, feeding the mold roots beneath the surface.',
      },
      {
        question: 'What is clearance testing?',
        answer:
          'Clearance testing is an air spore trap test taken inside the containment zone after remediation to certify that airborne spore concentrations are at or below healthy outdoor levels.',
      },
    ],
  },
  {
    slug: 'signs-of-hidden-mold-behind-drywall',
    title: '10 Warning Signs of Hidden Mold Behind Drywall and Basements',
    mainKeyword: 'Hidden mold signs in home',
    metaDescription:
      'Discover the top 10 hidden signs that toxic mold is growing inside your walls, ceilings, and basement framing before serious structural rot occurs.',
    publishDate: '2026-11-21',
    readTime: '7 min read',
    targetServiceSlug: 'mold-testing',
    targetServiceAnchor: 'Professional Mold Inspection & Testing',
    summary:
      'Mold colonies often thrive completely out of sight inside wall cavities and subfloors. Learn the subtle physical, visual, and olfactory clues that reveal hidden fungal growth.',
    sections: [
      {
        heading: 'Why Hidden Mold is the Most Dangerous',
        paragraphs: [
          'Because mold thrives in dark, stagnant, and humid environments, the largest colonies in residential properties are rarely found in plain view on an open wall. Instead, they proliferate behind baseboards, inside exterior wall insulation, beneath glued vinyl flooring, and behind basement wood paneling.',
        ],
      },
      {
        heading: 'The Top 10 Hidden Mold Indicators',
        paragraphs: [
          'Inspect your home for these ten warning signs:',
        ],
        checklist: [
          '1. Persistent Musty or Earthy Odor: A distinctive sour, damp smell that lingers even after thorough house cleaning.',
          '2. Unexplained Chronic Allergic Reactions: Sneezing, eye irritation, chronic sinus headaches, or asthma symptoms that improve when away from home.',
          '3. Peeling or Bubbling Paint and Wallpaper: Moisture vapor trapped behind paint forces it to separate from drywall paper.',
          '4. Discoloration or Yellow Water Rings: Past leaks on ceilings or walls that appear dry on the surface frequently conceal mold inside the stud cavity.',
          '5. Powdery White Efflorescence on Masonry: Mineral salt deposits left by moisture migrating through basement foundation blocks.',
          '6. Soft, Spongy Drywall or Trim: Cellulose materials that flex under gentle finger pressure indicate moisture decay.',
          '7. Warped or Cupped Wood Flooring: Floorboards curling upward indicate excessive subfloor humidity.',
          '8. History of Past Ice Dams or Roof Leaks: Moisture from past winter storms trapped in attic insulation.',
          '9. Condensation on Window Panes and Cold Corners: Consistently high indoor relative humidity above 55%.',
          '10. High Readings on Pinless Moisture Meters: Detected during a professional thermal imaging inspection.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do professionals find mold behind walls without knocking them down?',
        answer:
          'We use calibrated infrared thermal cameras that detect temperature changes caused by hidden moisture evaporation, combined with penetrating radio-frequency moisture meters and wall-cavity air sampling cassettes.',
      },
    ],
  },
  {
    slug: 'frozen-pipe-burst-winter-emergency-steps',
    title: 'Emergency Action Steps After a Frozen Pipe Bursts in Wisconsin',
    mainKeyword: 'Burst frozen pipe cleanup Wisconsin',
    metaDescription:
      'What to do immediately when sub-zero Wisconsin temperatures cause a frozen copper or PEX pipe to burst. Stop flooding, minimize water damage, and start drying.',
    publishDate: '2026-11-21',
    readTime: '6 min read',
    targetServiceSlug: 'emergency-water-extraction',
    targetServiceAnchor: '24/7 Emergency Water Extraction Services',
    summary:
      'Wisconsin winters regularly bring polar vortex freezes that burst residential plumbing. Follow this emergency guide to stop the flood and extract water before structural damage escalates.',
    sections: [
      {
        heading: 'The Mechanics of a Winter Pipe Freeze',
        paragraphs: [
          'When temperatures dip below 20°F in Southern Wisconsin, water inside uninsulated pipes in crawl spaces, attics, and exterior walls freezes. As water turns to ice, it expands by approximately 9%, generating thousands of pounds of hydraulic pressure that splits copper, CPVC, and PEX pipes.',
          'The catastrophic flooding typically begins when the freeze thaws, unleashing hundreds of gallons of pressurized water into finished walls and ceilings every hour.',
        ],
      },
      {
        heading: 'Five Critical Steps to Take Right Now',
        paragraphs: [
          'Follow these immediate action steps:',
        ],
        checklist: [
          '1. Shut off the main water valve immediately to cut water pressure.',
          '2. Turn off the water heater breaker so the heating elements do not burn out when the tank drains.',
          '3. Open faucets on lower levels to relieve residual line pressure.',
          '4. Call a licensed plumber to repair the ruptured pipe.',
          '5. Call WISCo Mold & Water Damage at (608) 642-1112 for immediate commercial water extraction and drying.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will homeowners insurance pay for burst frozen pipe damage?',
        answer:
          'Yes, most standard homeowners policies cover water damage resulting from burst frozen pipes provided the home was kept heated to a reasonable temperature (typically at least 55°F).',
      },
    ],
  },
  {
    slug: 'does-homeowners-insurance-cover-water-mold-damage',
    title: 'Does Homeowners Insurance Cover Water and Mold Damage in Wisconsin?',
    mainKeyword: 'Insurance coverage water mold damage Wisconsin',
    metaDescription:
      'Learn what types of water damage and mold remediation are covered by standard Wisconsin homeowners insurance policies, and how to file a successful claim.',
    publishDate: '2026-11-22',
    readTime: '7 min read',
    targetServiceSlug: 'water-damage-restoration',
    targetServiceAnchor: 'Water Damage Restoration & Insurance Claims Assistance',
    summary:
      'Understanding the difference between "sudden and accidental" water losses versus gradual neglect is the key to getting your water mitigation and mold remediation claims approved.',
    sections: [
      {
        heading: 'Sudden & Accidental vs. Gradual Damage',
        paragraphs: [
          'Wisconsin homeowners insurance policies are designed to cover sudden, accidental, and unexpected water emergencies—such as a burst supply line, water heater tank failure, or washing machine hose rupture.',
          'Conversely, claims are frequently denied if the damage resulted from gradual long-term seepage, unresolved roof leaks, or deferred maintenance. Furthermore, standard policies typically require a separate "Water Backup of Sewer/Drain" rider to cover flooded basements caused by sump pump failures.',
        ],
      },
      {
        heading: 'How Mold Coverage Works',
        paragraphs: [
          'In many Wisconsin policies, mold remediation coverage is capped (often between $5,000 and $10,000) unless it directly stems from a covered sudden water incident that was professionally mitigated immediately.',
        ],
        checklist: [
          'Always notify your insurance carrier within 24 to 48 hours of discovering water damage.',
          'Never discard water-damaged appliances or broken pipe fittings before the insurance adjuster inspects them.',
          'Work with a restoration company that provides certified Xactimate itemized estimates and digital psychrometric moisture logs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does WISCo work directly with my insurance company?',
        answer:
          'Yes. We work directly with all major homeowners insurance carriers across Wisconsin, providing itemized Xactimate estimates, thermal photos, and drying logs to streamline your claim.',
      },
    ],
  },
  {
    slug: 'basement-flooding-sump-pump-failure-guide',
    title: 'Basement Flooding and Sump Pump Failure: Immediate Cleanup Guide',
    mainKeyword: 'Basement flood cleanup Wisconsin',
    metaDescription:
      'Complete emergency guide for flooded basements caused by sump pump failures, heavy rains, and spring snowmelts in Wisconsin. Fast extraction and sanitization.',
    publishDate: '2026-11-22',
    readTime: '6 min read',
    targetServiceSlug: 'basement-water-damage',
    targetServiceAnchor: 'Basement Flood Cleanup & Water Damage Restoration',
    summary:
      'When your sump pump fails during a heavy Wisconsin rainstorm, basements flood fast. Learn how to safely extract water, salvage finished materials, and prevent mold.',
    sections: [
      {
        heading: 'Why Sump Pumps Fail at the Worst Moments',
        paragraphs: [
          'Sump pumps fail most often during intense thunderstorms due to power outages, stuck mechanical float switches, clogged intake impellers, or frozen exterior discharge pipes during late winter.',
          'Within hours, thousands of gallons of saturated groundwater pour over the basement floor, saturating drywall, baseboards, and carpet padding.',
        ],
      },
      {
        heading: 'Steps to Restore a Flooded Basement',
        paragraphs: [
          'Follow these restoration phases:',
        ],
        checklist: [
          'Rapid Water Extraction: Commercial pumps remove standing water down to the concrete slab.',
          'Tear-Out of Contaminated Porous Materials: Wet carpet pad, lower drywall (flood cut), and baseboards are removed.',
          'Antimicrobial Sanitizing: EPA-approved disinfectants are applied to concrete floors and foundation walls.',
          'Commercial Structural Drying: Dehumidifiers and air movers run continuously for 3 to 5 days to dry out framing and masonry.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you save drywall that got wet in a basement flood?',
        answer:
          'If drywall was submerged in ground floodwater for more than a few hours, building codes require making a clean "flood cut" 12 to 24 inches above the water line to remove saturated gypsum and prevent mold growth behind the wall.',
      },
    ],
  },
  {
    slug: 'black-mold-stachybotrys-health-risks-removal',
    title: 'Black Mold (Stachybotrys): Health Hazards and Safe Removal Protocols',
    mainKeyword: 'Black mold removal Wisconsin',
    metaDescription:
      'Learn the true health hazards of toxic black mold (Stachybotrys chartarum), how it spreads in Wisconsin homes, and how certified containment removal works.',
    publishDate: '2026-11-23',
    readTime: '6 min read',
    targetServiceSlug: 'mold-remediation',
    targetServiceAnchor: 'Safe Toxic Black Mold Removal Services',
    summary:
      'Stachybotrys chartarum is a toxic fungal species that thrives on water-damaged cellulose. Discover the health symptoms it causes and why certified negative-pressure containment is required for safe removal.',
    sections: [
      {
        heading: 'Understanding Stachybotrys Chartarum',
        paragraphs: [
          'Stachybotrys chartarum, commonly known as toxic black mold, is a dark greenish-black fungus that grows on cellulose-rich materials (drywall paper, wood framing, drop ceiling tiles) that have experienced continuous, heavy water saturation.',
          'Unlike ordinary household mildew, Stachybotrys produces dangerous trichothecene mycotoxins that bond to airborne dust particles and spores, posing severe health hazards when disturbed.',
        ],
      },
      {
        heading: 'Health Symptoms Associated with Black Mold',
        paragraphs: [
          'Common health impacts include chronic respiratory distress, severe headaches, coughing, persistent fatigue, skin rashes, and heightened asthma attacks, especially in children and elderly residents.',
        ],
        checklist: [
          'Negative Air Containment: Heavy plastic sheeting and industrial air filtration units prevent mycotoxins from escaping into unaffected rooms.',
          'HEPA Vacuuming: Specialized vacuums capture 99.97% of micro-particles down to 0.3 microns.',
          'Controlled Material Disposal: Contaminated materials are bagged in heavy-duty 6-mil poly bags inside the containment zone.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why should I never scrape dry black mold myself?',
        answer:
          'Scraping or brushing dry mold releases millions of microscopic spores and mycotoxins into your home’s air and HVAC ductwork, contaminating your entire house and exposing your family to acute respiratory toxins.',
      },
    ],
  },
  {
    slug: 'how-long-does-structural-drying-take',
    title: 'How Long Does Structural Drying Take After a Water Leak?',
    mainKeyword: 'Structural drying time water damage',
    metaDescription:
      'Find out how many days commercial dehumidification and structural drying take after a flood or pipe leak in Wisconsin, and what factors control the timeline.',
    publishDate: '2026-11-23',
    readTime: '5 min read',
    targetServiceSlug: 'structural-drying-dehumidification',
    targetServiceAnchor: 'Structural Drying & Dehumidification Services',
    summary:
      'Standard residential structural drying takes between 3 to 5 days using commercial equipment. Learn what factors influence drying speed and how technicians measure equilibrium moisture content.',
    sections: [
      {
        heading: 'The Science of Psychrometric Drying',
        paragraphs: [
          'Structural drying is not a guessing game. Certified restoration specialists use psychrometry—the science of the relationship between temperature, humidity, and vapor pressure—to calculate the exact drying rate of wet building assemblies.',
          'By maintaining optimal specific humidity (grains per pound) and continuous high-velocity airflow across wet surfaces, water is systematically drawn from the core of dense materials into the air, where commercial dehumidifiers condense and pump it away.',
        ],
      },
      {
        heading: 'Factors That Affect Drying Duration',
        paragraphs: [
          'Typical drying times range from 72 to 120 hours depending on:',
        ],
        checklist: [
          'Type of Building Materials: Drywall and pine framing dry faster than dense concrete slabs, masonry blocks, and solid hardwood flooring.',
          'Water Classification: Clean water dries faster than Category 2 or 3 water, which requires sanitation steps before drying begins.',
          'Ambient Outdoor Weather: Cold, humid Wisconsin winter weather requires careful indoor heat supplementation to support rapid evaporation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can drying equipment be turned off at night because of the noise?',
        answer:
          'No! Turning off drying fans or dehumidifiers causes relative humidity to skyrocket overnight, stalling the evaporation curve and allowing mold to begin colonizing within hours.',
      },
    ],
  },
  {
    slug: 'attic-mold-winter-condensation-ice-dams',
    title: 'Preventing and Remediating Attic Mold from Winter Ice Dams',
    mainKeyword: 'Attic mold ice dam remediation Wisconsin',
    metaDescription:
      'How harsh Wisconsin winters trigger severe attic mold through roof ice dams and bypass condensation. Learn safe remediation and ventilation solutions.',
    publishDate: '2026-11-24',
    readTime: '6 min read',
    targetServiceSlug: 'attic-mold-remediation',
    targetServiceAnchor: 'Attic Mold Remediation & Roof Leak Cleanup',
    summary:
      'Attic mold is a widespread winter phenomenon in Southern Wisconsin caused by ice dams and warm air bypasses. Discover how to remediate roof sheathing and restore attic air quality.',
    sections: [
      {
        heading: 'Why Wisconsin Attics Breed Winter Mold',
        paragraphs: [
          'Wisconsin winters feature prolonged sub-zero temperatures followed by heavy snowfalls. When heated indoor air leaks through unsealed ceiling light fixtures, plumbing stacks, and attic hatches, it warms the underside of the roof decking.',
          'Snow on the roof melts, runs down to cold unheated eaves, and refreezes into massive ice dams. Trapped meltwater backs up under shingles, soaking roof sheathing and attic insulation, creating prime conditions for rampant fungal growth.',
        ],
      },
      {
        heading: 'Professional Attic Remediation Process',
        paragraphs: [
          'Remediating attic mold safely requires specialized techniques:',
        ],
        checklist: [
          'Containment of Attic Access: Prevents thousands of disturbed spores from showering into second-floor bedrooms.',
          'Abrasive or Dry-Ice Blasting of Sheathing: Removes fungal staining down to clean structural timber.',
          'Antimicrobial Fungicidal Sealing: Application of commercial protective coatings that permanently inhibit future fungal growth.',
          'Exhaust Duct Correction: Ensuring all bathroom fans vent through roof caps rather than blowing moist air into the attic.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does attic mold affect the living space downstairs?',
        answer:
          'Yes. Due to stack effect and HVAC pressure differentials, air from the attic frequently migrates down through ceiling drywall joints and light fixtures into bedrooms and living areas.',
      },
    ],
  },
  {
    slug: 'crawl-space-encapsulation-moisture-control',
    title: 'Crawl Space Encapsulation and Fungal Mitigation for Wisconsin Homes',
    mainKeyword: 'Crawl space mold encapsulation Wisconsin',
    metaDescription:
      'Protect your home’s foundation and indoor air quality with crawl space mold remediation and heavy-duty vapor barrier encapsulation in Wisconsin.',
    publishDate: '2026-11-24',
    readTime: '6 min read',
    targetServiceSlug: 'crawl-space-moisture-mold',
    targetServiceAnchor: 'Crawl Space Mold & Moisture Mitigation',
    summary:
      'Dirt crawl spaces emit constant moisture that rots floor joists and fuels toxic mold. Learn how crawl space encapsulation transforms damp foundations into clean, dry spaces.',
    sections: [
      {
        heading: 'The Dangers of an Unsealed Dirt Crawl Space',
        paragraphs: [
          'In Wisconsin’s humid summers and rainy springs, unsealed dirt crawl spaces act like giant evaporation sponge basins. Gallons of groundwater vapor rise continuously into subfloor framing, rotting wooden joists, inviting carpenter ants, and producing heavy mold growth.',
          'Because warm air rises through your home (the stack effect), up to 50% of the air you breathe on the first floor originates in your crawl space, bringing mold spores and humidity directly into your living room.',
        ],
      },
      {
        heading: 'The Encapsulation Solution',
        paragraphs: [
          'Complete crawl space mitigation involves:',
        ],
        checklist: [
          'Mold Remediation on Subflooring: Cleaning and treating all floor joists, beams, and subfloor plywood with antimicrobials.',
          'Grading and Standing Water Removal: Pumping out water and leveling dirt surfaces.',
          'Heavy-Duty Vapor Barrier Installation: Sealing floors and foundation walls with 12 to 20-mil puncture-resistant reinforced liners.',
          'Crawl Space Dehumidification: Installing dedicated low-temperature dehumidifiers that keep humidity below 50% year-round.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What are the benefits of crawl space encapsulation?',
        answer:
          'Benefits include permanent elimination of musty odors, prevention of floor joist wood rot, improved indoor air quality, warmer floors in winter, and lower monthly heating and cooling bills.',
      },
    ],
  },
];

export const ARTICLE_BY_SLUG = ARTICLES.reduce<Record<string, Article>>((acc, art) => {
  acc[art.slug] = art;
  return acc;
}, {});
