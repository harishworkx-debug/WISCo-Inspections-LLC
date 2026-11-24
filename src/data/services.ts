import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  ClipboardCheck,
  Droplets,
  House,
  Layers,
  ShieldAlert,
  Thermometer,
  Waves,
  Wind,
  Zap,
} from 'lucide-react';
import { PHOTOS } from '@/data/business';

export type Faq = { question: string; answer: string };

export type ServiceContent = {
  slug: string;
  name: string;
  primaryKeyword: string;
  supportingKeywords: string[];
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
    slug: 'mold-remediation',
    name: 'Mold Remediation & Removal',
    primaryKeyword: 'Mold remediation',
    supportingKeywords: ['Mold removal', 'Black mold remediation', 'Professional mold remediation company'],
    icon: ShieldAlert,
    image: { src: PHOTOS.moldRemediation, alt: 'Certified technicians performing professional mold remediation with containment barriers' },
    seoTitle: 'Mold Remediation & Removal | WISCo Mold & Water Damage',
    metaDescription:
      'Certified mold remediation and safe mold removal across Wisconsin. Containment, HEPA air filtration, antimicrobial treatment, and clearance testing. Call (608) 642-1112.',
    summary:
      'Comprehensive containment, safe removal of contaminated materials, and EPA-registered antimicrobial treatment to eradicate toxic mold colonies and restore indoor air quality.',
    overview: [
      'Mold growth can spread behind walls, under floorboards, and across framing within 24 to 48 hours of water intrusion. Unchecked mold releases millions of airborne mycotoxins and spores that degrade structural wood and cause chronic respiratory illness.',
      'WISCo Mold & Water Damage uses strict IICRC S520 remediation protocols. We establish negative air pressure containment chambers, operate industrial HEPA air scrubbers, safely remove unsalvageable porous materials, and fog framing with botanical antimicrobial sanitizers.',
    ],
    localIntro:
      'Wisconsin homes in Edgerton, Janesville, Madison, and surrounding counties experience frequent mold from winter condensation, humid basements, and spring thaw seepage. Contact WISCo Mold & Water Damage for prompt, certified mold removal.',
    covers: [
      'Containment chamber setup with plastic sheeting and negative air pressure machines',
      'Industrial HEPA air scrubbing (filtering 99.97% of airborne spores down to 0.3 microns)',
      'Safe removal and disposal of contaminated drywall, insulation, and carpeting',
      'HEPA vacuuming and antimicrobial sanitizing of structural wood framing and concrete',
      'Air duct and ventilation system decontamination',
      'Post-remediation moisture tracking and third-party clearance air testing verification',
    ],
    whoNeedsIt: [
      'Homeowners with visible black, green, or white mold on walls, ceilings, or baseboards',
      'Residents experiencing persistent musty odors, coughing, eye irritation, or asthma flare-ups',
      'Property owners discovering mold during real estate transactions or home remodeling',
      'Anyone who recently suffered a basement flood, roof leak, or plumbing failure',
    ],
    whatToExpect: [
      'Immediate on-site containment to isolate the mold colony from healthy living areas',
      'Use of protective personal equipment (PPE) and sealed bag disposal protocols',
      'Thorough antimicrobial treatment preventing regrowth on remaining structural elements',
      'Clear documentation provided for your records and homeowners insurance claims',
    ],
    limitations: [
      'Mold remediation requires the underlying source of moisture (leak, drainage, or humidity) to be resolved to prevent future re-growth.',
      'Heavily rotted framing compromised by long-term fungal decay may require structural carpentry repair.',
    ],
    faqs: [
      {
        question: 'How long does professional mold remediation take?',
        answer:
          'Most residential mold remediation projects take between 1 to 3 days depending on the square footage affected and whether wall demolition or carpet removal is necessary. We provide an exact timeline during our initial inspection.',
      },
      {
        question: 'Can my family stay in the home during mold remediation?',
        answer:
          'For localized containment (such as a single bathroom or basement utility room), you can typically remain in the home while our negative air machines run. For widespread whole-house contamination, temporary relocation for 24-48 hours may be recommended for safety.',
      },
      {
        question: 'Does homeowners insurance cover mold remediation in Wisconsin?',
        answer:
          'Many insurance policies cover mold remediation if it resulted from a "sudden and accidental" covered water event, such as a burst frozen pipe or water heater failure. We work directly with all major insurance carriers to document damage and expedite your claim.',
      },
    ],
    related: ['water-damage-restoration', 'mold-testing', 'basement-water-damage', 'thermal-imaging-leak-detection'],
  },
  {
    slug: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    primaryKeyword: 'Water damage restoration',
    supportingKeywords: ['Water mitigation company', 'Home water damage repair', 'Flood damage restoration'],
    icon: Droplets,
    image: { src: PHOTOS.heroWaterDamage, alt: 'Commercial water damage restoration equipment and drying fans in a flooded home' },
    seoTitle: 'Water Damage Restoration & Mitigation | WISCo Mold & Water Damage',
    metaDescription:
      'Fast 24/7 water damage restoration and flood mitigation in Wisconsin. Rapid extraction, thermal moisture mapping, and structural drying. Call (608) 642-1112.',
    summary:
      'Rapid emergency water extraction, thermal imaging moisture tracking, and commercial structural dehumidification to stop water damage before mold sets in.',
    overview: [
      'Water damage worsens by the hour. Within minutes, water saturates drywall, swells wood trim, and seeps into subflooring. Within 24 hours, secondary damage begins as high humidity warps framing and triggers hazardous mold growth.',
      'WISCo Mold & Water Damage provides prompt emergency water damage restoration across Southern Wisconsin. We extract standing water, deploy high-velocity air movers and low-grain refrigerant (LGR) dehumidifiers, and monitor drying progress with calibrated psychrometric meters until your home reaches dry standard.',
    ],
    localIntro:
      'From frozen pipe bursts in Janesville to torrential summer storm runoff in Madison, Wisconsin weather constantly threatens residential properties. We respond rapidly across Edgerton and surrounding communities.',
    covers: [
      '24/7 Emergency response and rapid water extraction with truck-mounted pumps',
      'Infrared thermal imaging inspection to detect water trapped behind walls and beneath flooring',
      'Strategic structural drying utilizing industrial LGR dehumidifiers and axial air movers',
      'Antimicrobial application to prevent bacterial contamination and mold spore germination',
      'Direct insurance claims assistance, itemized billing, and Xactimate documentation',
      'Hardwood floor and subfloor specialty drying mats',
    ],
    whoNeedsIt: [
      'Homeowners experiencing a burst frozen copper pipe, failed appliance hose, or water heater leak',
      'Properties with rainwater intrusion from damaged shingles, ice dams, or roof failures',
      'Buyers or sellers dealing with sudden unexpected water leaks prior to closing',
      'Anyone with water saturated carpeting, swollen drywall, or buckled floorboards',
    ],
    whatToExpect: [
      'Arrival of certified technicians equipped with commercial extraction and drying units',
      'Comprehensive moisture readings establishing baseline moisture levels in all affected materials',
      'Daily equipment check-ins and moisture mapping until dry standard is achieved',
      'Complete clearance documentation for your peace of mind and insurance file',
    ],
    limitations: [
      'Porous building materials (such as standard fiberglass insulation or pad under carpet) exposed to contaminated water must often be safely discarded and replaced.',
    ],
    faqs: [
      {
        question: 'How quickly should water damage restoration begin?',
        answer:
          'Restoration should ideally begin within the first 24 to 48 hours. Quick extraction and drying prevents irreversible structural warping, delamination, and fungal spore colonization.',
      },
      {
        question: 'How long do drying fans and dehumidifiers need to run?',
        answer:
          'Commercial drying equipment typically runs for 3 to 5 days. Our technicians perform daily moisture checks to ensure every structural stud, joist, and subfloor has returned to normal equilibrium moisture content (EMC).',
      },
      {
        question: 'Will water damage cause mold?',
        answer:
          'Yes, mold requires moisture and organic cellulose to proliferate. If saturated materials are not professionally dried within 48 hours, active mold colonies will begin growing behind baseboards and sheetrock.',
      },
    ],
    related: ['emergency-water-extraction', 'mold-remediation', 'structural-drying-dehumidification', 'basement-water-damage'],
  },
  {
    slug: 'emergency-water-extraction',
    name: 'Emergency Water Extraction',
    primaryKeyword: 'Emergency water extraction',
    supportingKeywords: ['Flood water removal', 'Standing water pumping', '24/7 water extraction service'],
    icon: Waves,
    image: { src: PHOTOS.waterExtraction, alt: 'High powered water extraction pumping standing flood water from a residential basement' },
    seoTitle: '24/7 Emergency Water Extraction | WISCo Mold & Water Damage',
    metaDescription:
      '24/7 Emergency water extraction and standing flood water pumping in Wisconsin. Fast arrival for burst pipes and storm floods. Call (608) 642-1112 immediately.',
    summary:
      'Immediate 24/7 extraction of standing flood water and pipe burst runoff using powerful commercial truck-mounted and submersible extraction pumps.',
    overview: [
      'When thousands of gallons of water inundate your living space or basement, every minute counts. Standing water puts immense hydrostatic pressure on floors and foundations while soaking upward into walls through capillary action.',
      'Our emergency response team arrives with heavy-duty submersible pumps, ride-on weighted extraction rovers, and truck-mounted vacuum systems capable of removing thousands of gallons per hour, saving your valuable property from total loss.',
    ],
    localIntro:
      'Standing water in your Edgerton, Stoughton, or Madison property requires immediate action. Call (608) 642-1112 anytime day or night for fast water extraction.',
    covers: [
      '24/7 emergency dispatch across Rock, Dane, and Jefferson counties',
      'Heavy-duty submersible trash pumps for deep basement floodwaters',
      'Weighted surface extraction claws that pull water from carpet pad without tearing carpets',
      'Rapid removal of Category 1 (clean), Category 2 (gray), and Category 3 (black) water',
      'Emergency containment and placement of initial commercial drying equipment',
      'Emergency shut-off assistance for broken main water valves',
    ],
    whoNeedsIt: [
      'Homes with several inches or feet of standing water in basements or living rooms',
      'Floods caused by severe storms, rapid snowmelt, or river tributary surges',
      'Catastrophic plumbing failures, fire sprinkler activations, or cracked water supply lines',
    ],
    whatToExpect: [
      'Rapid arrival of emergency dispatch technicians with commercial extraction gear',
      'Systematic pumping of standing water directly to authorized sanitary sewer drainage',
      'Immediate moisture assessment to initiate drying phase without delay',
    ],
    limitations: [
      'Electrical service to flooded areas must be safely isolated before technicians enter standing water.',
    ],
    faqs: [
      {
        question: 'What should I do while waiting for the water extraction team?',
        answer:
          'If safe to do so, shut off the main water valve to stop incoming water. Do not walk into standing water if electrical outlets or wiring are submerged. Move lightweight valuables to dry upper levels.',
      },
      {
        question: 'Can you pump water out of a completely flooded basement?',
        answer:
          'Yes. We use heavy-duty submersible pumps capable of pumping out flooded basements quickly while monitoring exterior groundwater levels to ensure foundation integrity.',
      },
      {
        question: 'Is emergency water extraction available on weekends and holidays?',
        answer:
          'Yes. Water disasters do not observe business hours. We maintain emergency response readiness 24 hours a day, 7 days a week, 365 days a year.',
      },
    ],
    related: ['water-damage-restoration', 'basement-water-damage', 'structural-drying-dehumidification', 'sewage-backup-cleanup'],
  },
  {
    slug: 'mold-testing',
    name: 'Mold Inspection & Air Quality Testing',
    primaryKeyword: 'Mold testing',
    supportingKeywords: ['Mold inspection', 'Indoor air quality mold testing', 'Air spore trap sampling'],
    icon: ClipboardCheck,
    image: { src: PHOTOS.inspectionEquipment, alt: 'Environmental technician taking air spore trap samples with calibrated testing equipment' },
    seoTitle: 'Mold Inspection & Air Quality Testing | WISCo Mold & Water Damage',
    metaDescription:
      'Professional mold inspection, air spore sampling, and surface testing in Wisconsin. Certified laboratory results and moisture investigations. Call (608) 642-1112.',
    summary:
      'Scientific mold inspection combining infrared leak detection, pinless moisture meter surveys, and certified laboratory air spore trap analysis.',
    overview: [
      'Not all mold problems are clearly visible. Fungal colonies frequently thrive behind drywall, under vinyl flooring, or inside HVAC plenums, emitting microscopic spores and volatile organic compounds (VOCs) that irritate lungs and cause illness.',
      'WISCo Mold & Water Damage performs rigorous diagnostic mold testing. We collect baseline outdoor control samples and comparative indoor air cassettes, along with bio-tape surface samples. All samples are analyzed by an accredited independent microbiology laboratory providing exact spore counts and species identification (including Stachybotrys, Aspergillus, and Penicillium).',
    ],
    localIntro:
      'Whether you smell damp, earthy odors in Edgerton or want pre-remediation documentation for an insurance claim in Madison, our certified testing gives you the facts.',
    covers: [
      'Visual examination for hidden microbial growth, water staining, and structural decay',
      'Non-invasive infrared thermal imaging to map hidden dampness inside walls',
      'Calibrated baseline outdoor air samples and targeted indoor air cassette collection',
      'Surface tape lifts and swab sampling of suspect surface staining',
      'Accredited third-party microbiology laboratory analysis report with spore count breakdown',
      'Clear remediation protocol guidance if elevated mold levels are confirmed',
    ],
    whoNeedsIt: [
      'Homeowners noticing unexplained persistent coughing, sinus congestion, or allergic reactions',
      'Real estate buyers conducting environmental due diligence before closing',
      'Property owners wanting post-remediation clearance to verify a mold cleanup was successful',
      'Anyone who has had past leaks and wants to ensure no hidden mold colonies developed',
    ],
    whatToExpect: [
      'Detailed on-site walkthrough with digital moisture meters and infrared cameras',
      'Careful collection of air and surface samples according to strict chain-of-custody protocols',
      'Comprehensive lab report delivered within 2 to 3 business days with clear explanations',
    ],
    limitations: [
      'Air sampling represents airborne spore levels at the specific time of collection under current HVAC/ventilation conditions.',
    ],
    faqs: [
      {
        question: 'What is the difference between mold testing and mold inspection?',
        answer:
          'A mold inspection is a physical visual and thermal search to locate moisture sources and visible growth. Mold testing involves collecting physical air and surface samples for certified laboratory analysis to quantify spore types and concentrations.',
      },
      {
        question: 'When is mold testing recommended?',
        answer:
          'Testing is recommended when you smell musty odors but see no visible mold, after completing water damage drying, during property transactions, or to verify that mold remediation successfully eliminated airborne spores.',
      },
      {
        question: 'What types of mold are most hazardous in Wisconsin homes?',
        answer:
          'Stachybotrys chartarum (commonly called black mold), Aspergillus, and Penicillium are common in damp Wisconsin basements and walls. These species produce mycotoxins that can trigger significant health complications.',
      },
    ],
    related: ['mold-remediation', 'thermal-imaging-leak-detection', 'crawl-space-moisture-mold', 'attic-mold-remediation'],
  },
  {
    slug: 'basement-water-damage',
    name: 'Basement Flood Cleanup & Water Damage',
    primaryKeyword: 'Basement water damage',
    supportingKeywords: ['Basement flooding cleanup', 'Sump pump failure cleanup', 'Flooded basement restoration'],
    icon: House,
    image: { src: PHOTOS.basementFlooding, alt: 'Flooded basement restoration showing water extraction and concrete drying equipment' },
    seoTitle: 'Basement Flood Cleanup & Water Damage | WISCo Mold & Water Damage',
    metaDescription:
      'Emergency flooded basement cleanup in Wisconsin. Sump pump failures, heavy storm seepage, sewage backups, and rapid drying. Call (608) 642-1112 24/7.',
    summary:
      'Complete flooded basement restoration: fast water extraction, sanitization of concrete and drywall, sump pump failure cleanup, and structural moisture removal.',
    overview: [
      'Basements in Southern Wisconsin bear the brunt of severe storms, rapid snowmelts, and saturated glacial drift soils. When a sump pump fails during a thunderstorm or hydrostatic groundwater forces moisture through foundation joints, basements flood rapidly.',
      'Water in a basement quickly ruins stored belongings, saturates finished framing, and triggers rampant mold in carpet pads and drywall. WISCo Mold & Water Damage extracts floodwaters, sanitizes concrete slab floors, applies antimicrobials to framing, and deploys high-volume drying equipment to protect your home.',
    ],
    localIntro:
      'From Lake Koshkonong high water levels in Edgerton to seasonal river flooding in Janesville, we provide specialized basement flood restoration throughout Southern Wisconsin.',
    covers: [
      'Extraction of water from poured concrete, block, and historic stone foundation basements',
      'Sump pump failure water removal and emergency backup equipment advice',
      'Removal of saturated drywall, trim, carpeting, and wet fiberglass insulation',
      'Antimicrobial disinfection of concrete slab and masonry foundation walls',
      'Commercial desiccant and LGR dehumidification to dry out moisture-laden concrete',
      'Elimination of lingering damp, sour basement flood odors',
    ],
    whoNeedsIt: [
      'Homeowners with a flooded basement after heavy rains or power outages',
      'Properties with groundwater weeping through cove joints, foundation floor cracks, or window wells',
      'Residents with water backing up through basement floor drains',
    ],
    whatToExpect: [
      'Immediate pumping of water followed by removal of damaged, unsalvageable porous items',
      'Deep antimicrobial washdown of concrete floors and foundation walls',
      'Strategic drying setup targeted at thick masonry materials that hold moisture',
    ],
    limitations: [
      'External foundation cracks, failed drain tile, or defective sump pumps must be repaired to stop future rain intrusion.',
    ],
    faqs: [
      {
        question: 'Why does my basement flood during Wisconsin spring thaws?',
        answer:
          'When frozen ground prevents melting snow and spring rains from absorbing into the soil, water pools around your foundation. The resulting hydrostatic pressure forces water through concrete block seams, cove joints, and hairline floor cracks.',
      },
      {
        question: 'Is water from a sump pump failure covered by homeowners insurance?',
        answer:
          'Many homeowners policies require a specific "Water Backup and Sump Overflow" endorsement. If you have this endorsement, the cleanup, extraction, and drying costs are typically covered. We assist in preparing full insurance documentation.',
      },
      {
        question: 'Can carpet in a flooded basement be saved?',
        answer:
          'If the floodwater was clean (Category 1) and extracted within 24 hours, the carpet may be saved, although the pad underneath is usually replaced. If the water came from exterior soil or a backed-up drain, carpet must be replaced for health safety.',
      },
    ],
    related: ['emergency-water-extraction', 'water-damage-restoration', 'crawl-space-moisture-mold', 'mold-remediation'],
  },
  {
    slug: 'crawl-space-moisture-mold',
    name: 'Crawl Space Mold & Moisture Mitigation',
    primaryKeyword: 'Crawl space mold',
    supportingKeywords: ['Crawl space encapsulation', 'Crawl space moisture control', 'Crawl space mold removal'],
    icon: Layers,
    image: { src: PHOTOS.crawlSpaceEncapsulation, alt: 'Clean crawl space with heavy duty vapor barrier encapsulation and mold remediation treatment' },
    seoTitle: 'Crawl Space Mold & Moisture Mitigation | WISCo Mold & Water Damage',
    metaDescription:
      'Crawl space mold removal, moisture drying, and heavy-duty vapor barrier encapsulation across Southern Wisconsin. Protect your foundation. Call (608) 642-1112.',
    summary:
      'Eradication of crawl space wood rot and mold colonies, standing water drainage, and heavy-duty vapor barrier encapsulation to stop humidity rising into living spaces.',
    overview: [
      'Up to 50% of the air on your home’s first floor originates in your crawl space due to the natural "stack effect." Dirt-floor crawl spaces constantly evaporate gallons of groundwater into subflooring, rotting floor joists, inviting wood-destroying insects, and feeding thick mold colonies.',
      'WISCo Mold & Water Damage cleans and sanitizes contaminated crawl spaces. We remediate mold on wooden beams, pump out standing water, and install durable multi-mil reinforced vapor barriers with dedicated crawl space dehumidifiers to keep your foundation dry permanently.',
    ],
    localIntro:
      'Historic homes and waterfront cottages in Edgerton, Rock County, and Dane County often suffer from wet, moldy crawl spaces. We deliver complete crawl space restoration.',
    covers: [
      'Mold eradication on floor joists, subflooring, girders, and sill plates',
      'HEPA vacuuming and antimicrobial timber sealing',
      'Removal of wet, contaminated, sagging fiberglass insulation batts',
      'Pumping out standing water and grading crawl space dirt floors',
      'Installation of heavy-duty puncture-resistant vapor barrier liners',
      'Placement of low-temperature commercial crawl space dehumidification units',
    ],
    whoNeedsIt: [
      'Homeowners with cold, damp, or sagging first-floor rooms',
      'Properties with musty or mildew odors rising through floor vents',
      'Houses with unsealed dirt or gravel crawl spaces with recurring standing water',
    ],
    whatToExpect: [
      'Thorough inspection of all framing members for fungal rot and structural sagging',
      'Cleanout of debris and complete antimicrobial decontamination',
      'Sealing of ground moisture and installation of proper humidity control',
    ],
    limitations: [
      'Crawl spaces with severe standing water springs may require an interior sump pit installation in conjunction with encapsulation.',
    ],
    faqs: [
      {
        question: 'Why does mold grow so fast in crawl spaces?',
        answer:
          'Crawl spaces provide ideal conditions for fungal growth: constant dark, stagnant air, unsealed soil moisture, and an abundance of organic wood framing for food.',
      },
      {
        question: 'Does crawl space mold affect indoor air quality upstairs?',
        answer:
          'Yes. As warm air rises through your home and exits through the attic, it pulls air upward from the crawl space. This brings microscopic mold spores, damp odors, and soil allergens directly into living areas.',
      },
      {
        question: 'What is crawl space encapsulation?',
        answer:
          'Encapsulation involves lining the entire crawl space floor and foundation walls with heavy-duty, commercial-grade polyethylene vapor barriers, sealing vents, and adding dehumidification to create a completely dry, clean, conditioned space.',
      },
    ],
    related: ['mold-remediation', 'basement-water-damage', 'structural-drying-dehumidification', 'mold-testing'],
  },
  {
    slug: 'sewage-backup-cleanup',
    name: 'Sewage Backup & Biohazard Cleanup',
    primaryKeyword: 'Sewage backup cleanup',
    supportingKeywords: ['Sewage cleanup company', 'Basement sewage removal', 'Black water extraction'],
    icon: AlertTriangle,
    image: { src: PHOTOS.sewageCleanup, alt: 'Specialized biohazard technicians safely cleaning and sanitizing after a residential sewage backup' },
    seoTitle: 'Sewage Backup & Biohazard Cleanup | WISCo Mold & Water Damage',
    metaDescription:
      'Emergency sewage backup cleanup in Wisconsin. Safe Category 3 black water extraction, hospital-grade disinfection, and odor removal. Call (608) 642-1112 24/7.',
    summary:
      'Safe, certified extraction of hazardous Category 3 black water sewage backups, contaminated material disposal, and hospital-grade antimicrobial disinfection.',
    overview: [
      'A sewer line backup is a serious biological emergency. Category 3 "black water" contains dangerous pathogens, bacteria (such as E. coli and Salmonella), viruses, and toxic parasites that pose acute health hazards to your household.',
      'Never attempt to clean a sewage backup without professional protective equipment. WISCo Mold & Water Damage provides immediate biohazard extraction, safely removes contaminated porous surfaces, applies hospital-grade disinfectants, and deodorizes your home using advanced hydroxyl generators.',
    ],
    localIntro:
      'Municipal sewer line surcharges and tree root blockages can trigger violent toilet or basement floor drain overflows in Edgerton, Janesville, and Madison. Call for emergency biohazard cleanup.',
    covers: [
      '24/7 rapid response for residential and commercial sewer backups',
      'Full personal protective equipment (PPE) and containment to prevent cross-contamination',
      'Safe extraction and biohazard disposal of sewage water and solids',
      'Removal of non-salvageable materials (drywall, carpet, baseboards, insulation)',
      'Hospital-grade EPA-registered biocides and virucides applied to all hard surfaces',
      'Thermal fogging and hydroxyl odor neutralization',
    ],
    whoNeedsIt: [
      'Homeowners with overflowing basement floor drains, toilets, or sewer cleanouts',
      'Properties impacted by city main line backups or septic tank failures',
      'Any property exposed to toilet black water or exterior stormwater overflow',
    ],
    whatToExpect: [
      'Immediate containment isolating the contaminated area from clean living spaces',
      'Thorough extraction followed by sanitization and removal of all organic hazards',
      'Rapid air filtration and drying to prevent secondary mold and bacteria growth',
    ],
    limitations: [
      'Porous items like mattresses, cushions, and carpet pads saturated with sewage cannot be safely sanitized and must be discarded.',
    ],
    faqs: [
      {
        question: 'Is sewage backup water dangerous to touch?',
        answer:
          'Yes. Raw sewage contains bloodborne pathogens, coliform bacteria, fungi, and dangerous microorganisms. Direct contact or inhaling aerosolized droplets can cause severe gastrointestinal and respiratory infections.',
      },
      {
        question: 'What causes sewer lines to back up into basements?',
        answer:
          'Common causes include municipal sewer overload during heavy rain, tree roots invading private sewer lateral pipes, grease accumulation, or broken cast iron sewer lines.',
      },
      {
        question: 'How do you eliminate the persistent sewer smell after cleanup?',
        answer:
          'We use industrial-strength antimicrobial washes and hydroxyl air generators. Hydroxyl radicals dismantle organic odor molecules at the molecular level without leaving toxic residues.',
      },
    ],
    related: ['emergency-water-extraction', 'water-damage-restoration', 'basement-water-damage', 'structural-drying-dehumidification'],
  },
  {
    slug: 'thermal-imaging-leak-detection',
    name: 'Thermal Imaging & Moisture Leak Detection',
    primaryKeyword: 'Thermal imaging leak detection',
    supportingKeywords: ['Infrared moisture detection', 'Hidden water leak detection', 'Thermal camera water inspection'],
    icon: Thermometer,
    image: { src: PHOTOS.thermalImaging, alt: 'High resolution thermal imaging camera screen detecting cold moisture spots hidden inside a wall' },
    seoTitle: 'Thermal Imaging & Leak Detection | WISCo Mold & Water Damage',
    metaDescription:
      'Pinpoint hidden plumbing leaks, roof water intrusion, and moisture behind walls with infrared thermal imaging cameras in Wisconsin. Call (608) 642-1112.',
    summary:
      'Non-destructive infrared thermal imaging and digital moisture meters to locate hidden pipe leaks, roof moisture paths, and wet insulation without tearing down walls.',
    overview: [
      'Water often travels far from its original entry point, running along floor joists and behind wall cavities before pooling in unexpected areas. Traditional inspection methods often require cutting open drywall to find the leak.',
      'WISCo Mold & Water Damage employs calibrated infrared thermal imaging technology. Because evaporating water cools adjacent building materials, thermal cameras clearly reveal the precise boundaries of hidden moisture plumes, allowing targeted, surgical repairs that save time and money.',
    ],
    localIntro:
      'Avoid unnecessary drywall demolition in your Edgerton, Madison, or Verona home. Our thermal imaging reveals hidden leaks instantly.',
    covers: [
      'High-resolution infrared thermal imaging scans of ceilings, walls, and flooring',
      'Pinless and penetrating RF moisture meter cross-verification',
      'Detection of pinhole copper pipe leaks, hidden drain line cracks, and shower pan failures',
      'Roof leak tracking from attic decking down through finished ceilings',
      'Ice dam moisture migration analysis behind siding and eaves',
      'Comprehensive digital thermal report with side-by-side visible and thermal photography',
    ],
    whoNeedsIt: [
      'Homeowners seeing mysterious ceiling water spots or blistering wall paint',
      'Residents with unexpectedly high water bills indicating a hidden running pipe leak',
      'Properties with recurring musty smells where no visible water can be found',
    ],
    whatToExpect: [
      'Non-invasive walkthrough scanning all suspect areas with high-sensitivity FLIR cameras',
      'Instant visual proof showing exact moisture boundaries on camera',
      'Clear advice on the exact location of the leak for your plumber or roofer to repair',
    ],
    limitations: [
      'Thermal cameras detect temperature differentials caused by moisture evaporation; they must be cross-verified with calibrated electronic moisture meters for positive identification.',
    ],
    faqs: [
      {
        question: 'Can a thermal imaging camera see water through walls?',
        answer:
          'Thermal cameras detect heat signatures rather than "seeing through" walls. Because water cools building materials through evaporation, the wet area appears distinctly cooler than surrounding dry drywall, outlining the exact moisture pattern.',
      },
      {
        question: 'Does thermal imaging locate pinhole plumbing leaks?',
        answer:
          'Yes. Water escaping from a pressurized pipe spreads into surrounding insulation and studs, creating a noticeable thermal footprint that we can pinpoint behind walls or under subfloors.',
      },
      {
        question: 'Do you provide a report of the thermal scan?',
        answer:
          'Yes. We provide an annotated digital report featuring high-resolution thermal images paired with standard visual photos, showing temperature deltas and moisture meter percentages for your records or insurance claims.',
      },
    ],
    related: ['water-damage-restoration', 'mold-testing', 'mold-remediation', 'attic-mold-remediation'],
  },
  {
    slug: 'attic-mold-remediation',
    name: 'Attic Mold Remediation & Roof Leak Cleanup',
    primaryKeyword: 'Attic mold remediation',
    supportingKeywords: ['Attic mold removal', 'Roof leak mold cleanup', 'Ice dam mold remediation'],
    icon: Wind,
    image: { src: PHOTOS.atticMold, alt: 'Technician treating roof sheathing and attic trusses for mold after a winter ice dam moisture leak' },
    seoTitle: 'Attic Mold Remediation & Roof Leak Cleanup | WISCo Mold & Water Damage',
    metaDescription:
      'Specialized attic mold remediation and roof moisture cleanup in Wisconsin. Treat roof sheathing, remove contaminated insulation, and seal timber. Call (608) 642-1112.',
    summary:
      'Safe removal of mold from attic roof decking and rafters, removal of damp compressed insulation, and antimicrobial sealing following roof leaks or winter ice dams.',
    overview: [
      'Attic mold is exceptionally common in Wisconsin due to extreme winter temperature contrasts. When warm, humid indoor air escapes into a cold attic through unsealed ceiling penetrations, it condenses against freezing plywood roof sheathing, feeding black and white mold colonies.',
      'Additionally, winter ice dams force water backward under shingles, saturating roof framing and insulation. WISCo Mold & Water Damage remediates attic fungal growth, treats roof decking with commercial fungicidal coatings, and extracts contaminated insulation to restore healthy airflow.',
    ],
    localIntro:
      'Wisconsin winters take a heavy toll on attics in Edgerton, Janesville, Sun Prairie, and Madison. We eliminate attic mold and seal your roof decking safely.',
    covers: [
      'Dry-ice blasting or abrasive scrubbing of mold-stained roof sheathing and rafters',
      'EPA-registered antimicrobial fogging and fungicidal protective coating on all attic timbers',
      'Removal and replacement of moisture-damaged, compressed fiberglass or cellulose insulation',
      'Attic containment preventing mold spores from entering living areas through access hatches',
      'Inspection of bathroom exhaust duct terminations to verify they vent outside rather than into the attic',
      'Airflow and ventilation assessment to stop recurring condensation',
    ],
    whoNeedsIt: [
      'Homeowners noticing dark, blackened staining on attic roof plywood or rafters',
      'Properties where winter ice dams caused ceiling water leaks',
      'Homes where bathroom fans were improperly vented directly into the attic cavity',
      'Sellers receiving a buyer home inspection report flagging attic fungal growth',
    ],
    whatToExpect: [
      'Installation of containment around the attic entrance with negative pressure filtration',
      'Aggressive removal of mold from roof framing without compromising structural integrity',
      'Application of white or clear antimicrobial fungicidal sealant with long-term protection',
    ],
    limitations: [
      'Underlying ventilation shortfalls (such as blocked soffit vents or lack of ridge vents) must be addressed to ensure permanent prevention.',
    ],
    faqs: [
      {
        question: 'What causes attic mold in Wisconsin homes?',
        answer:
          'Attic mold is primarily caused by two factors: winter condensation from warm indoor air leaking into a cold, under-ventilated attic, and roof leaks caused by damaged shingles or severe winter ice dams.',
      },
      {
        question: 'Will attic mold spread to the rest of the house?',
        answer:
          'Yes. As pressure changes occur throughout the year, airborne mold spores from the attic can migrate down through recessed light fixtures, electrical conduits, and ceiling access panels into your living spaces.',
      },
      {
        question: 'Can attic mold kill a home sale?',
        answer:
          'Attic mold is one of the most frequent deal-killers in Wisconsin real estate. Buyers and lenders often demand professional remediation before loan approval. We provide certified remediation and clearance documentation to keep your sale on track.',
      },
    ],
    related: ['mold-remediation', 'thermal-imaging-leak-detection', 'water-damage-restoration', 'mold-testing'],
  },
  {
    slug: 'structural-drying-dehumidification',
    name: 'Structural Drying & Dehumidification',
    primaryKeyword: 'Structural drying',
    supportingKeywords: ['Commercial dehumidification', 'Hardwood floor drying', 'Industrial air movers water damage'],
    icon: Zap,
    image: { src: PHOTOS.dehumidificationEquipment, alt: 'High capacity commercial LGR dehumidifiers and high velocity air movers drying structural floor joists' },
    seoTitle: 'Structural Drying & Dehumidification | WISCo Mold & Water Damage',
    metaDescription:
      'Commercial structural drying and industrial dehumidification in Wisconsin. Extract deep moisture from wall studs, concrete, and hardwood. Call (608) 642-1112.',
    summary:
      'High-capacity commercial LGR dehumidifiers and directed industrial air movers to extract deep, bound moisture from structural framing, drywall, and hardwood floors.',
    overview: [
      'Moisture doesn’t just sit on the surface—it absorbs deep into structural wood framing, concrete foundation slabs, and subfloors. Standard household fans and portable dehumidifiers simply cannot extract deep bound moisture before mold growth begins.',
      'WISCo Mold & Water Damage deploys commercial Low Grain Refrigerant (LGR) dehumidifiers and high-velocity axial air movers. By controlling temperature, airflow, and specific vapor pressure differentials, we draw moisture out of dense materials and exhaust dry, conditioned air until structural materials return to industry-standard dry thresholds.',
    ],
    localIntro:
      'Serving Edgerton, Dane County, Rock County, and Jefferson County with industrial drying equipment capable of handling any size residential or commercial water loss.',
    covers: [
      'Commercial LGR and desiccant dehumidifiers capable of removing 150+ pints per day per unit',
      'High-velocity axial and centrifugal air movers creating circular vortex airflow',
      'Specialty injector drying systems for cabinets, wall cavities, and finished ceilings',
      'Hardwood floor rescue mat systems that draw water directly through wood pores',
      'Daily psychrometric temperature and relative humidity tracking with digital logs',
      'Moisture mapping of framing, subfloor, and drywall to verify complete drying',
    ],
    whoNeedsIt: [
      'Properties where water soaked into hardwood floors, custom cabinetry, or concrete',
      'Buildings with wet insulation or water trapped inside wall cavities',
      'Commercial and residential properties following major fire hose operations or flood events',
    ],
    whatToExpect: [
      'Strategic layout of commercial drying equipment maximizing airflow across wet surfaces',
      'Continuous extraction of moisture from both materials and indoor ambient air',
      'Daily technician visits to adjust equipment positioning and record psychrometric drying curves',
    ],
    limitations: [
      'Drying equipment must remain powered on continuously until target dry standards are met to prevent fungal rebound.',
    ],
    faqs: [
      {
        question: 'Can hardwood floors be saved after water damage?',
        answer:
          'Yes, if drying begins promptly! We use negative-pressure hardwood drying mats that vacuum trapped water out through the floor seams, flattening cupped floorboards and saving thousands in replacement costs.',
      },
      {
        question: 'Why do drying fans need to stay running 24 hours a day?',
        answer:
          'Continuous airflow maintains evaporation momentum. Shutting fans off causes moisture trapped deep inside wood to equalize back to the surface, spiking humidity and creating a breeding ground for mold.',
      },
      {
        question: 'How do you know when a house is completely dry?',
        answer:
          'We use calibrated electronic moisture meters to test affected structural materials against unaffected dry baseline materials in your home. Once the readings match industry dry standards, equipment is safely removed.',
      },
    ],
    related: ['water-damage-restoration', 'emergency-water-extraction', 'basement-water-damage', 'mold-remediation'],
  },
];

export const SERVICE_BY_SLUG = SERVICES.reduce<Record<string, ServiceContent>>((acc, s) => {
  acc[s.slug] = s;
  return acc;
}, {});

export const HOME_PROCESS = [
  {
    step: '01',
    title: '24/7 Rapid Emergency Dispatch',
    description:
      'Call (608) 642-1112 anytime. Our certified restoration technicians mobilize immediately across Southern Wisconsin with commercial water extraction and containment equipment.',
  },
  {
    step: '02',
    title: 'Thermal Imaging & Damage Mapping',
    description:
      'We inspect affected areas with infrared cameras and electronic moisture meters to identify the full perimeter of water spread and detect hidden mold behind walls.',
  },
  {
    step: '03',
    title: 'Extraction, Containment & Air Filtration',
    description:
      'We extract standing water with commercial truck-mounted pumps, establish containment barriers to isolate mold, and run HEPA air scrubbers to clean the air.',
  },
  {
    step: '04',
    title: 'Antimicrobial Treatment & Structural Drying',
    description:
      'We treat framing with EPA-registered botanical antimicrobials to destroy mold colonies and run commercial LGR dehumidifiers until materials reach dry standard.',
  },
  {
    step: '05',
    title: 'Final Clearance & Direct Insurance Billing',
    description:
      'We verify drying completion, conduct clearance air quality checks, and submit comprehensive itemized documentation directly to your insurance company.',
  },
];
