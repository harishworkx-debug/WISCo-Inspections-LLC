import type { LucideIcon } from 'lucide-react';
import { ClipboardCheck, Droplets, FileSearch, House, Wind } from 'lucide-react';
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
    seoTitle: 'Home Inspection in Edgerton, WI | WISCo Inspections, LLC',
    metaDescription:
      'Professional home inspection in Edgerton, WI covering roof, foundation, electrical, plumbing, HVAC, attic, and more. Call WISCo Inspections at (608) 642-1112.',
    summary:
      'A visual evaluation of the accessible systems and components of a residential property, with clear findings you can use to make an informed decision.',
    overview: [
      'A home inspection is a visual, non-invasive evaluation of a residential property. The inspector reviews the accessible parts of the home, including the roof, structure, exterior, interior, and major building systems, and documents the conditions observed.',
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
      'A written report of the inspection findings',
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
          'Inspection duration depends on the size, age, and condition of the property. Call WISCo Inspections to discuss the property and get an accurate timeframe.',
      },
      {
        question: 'Should I attend the inspection?',
        answer:
          'Attending is often helpful because the inspector can show you findings and explain them in person. Confirm arrangements when you call.',
      },
      {
        question: 'Does a home inspection find every problem?',
        answer:
          'No. A home inspection is a visual evaluation of accessible components and does not identify every defect, including concealed or future issues.',
      },
    ],
    related: ['buyer-home-inspection', 'pre-listing-inspection', 'radon-testing', 'mold-testing'],
  },
  {
    slug: 'buyer-home-inspection',
    name: 'Buyer Home Inspection',
    icon: FileSearch,
    image: { src: PHOTOS.buyerKeys, alt: 'Family receiving the keys to their new home from a real estate agent' },
    seoTitle: 'Buyer Home Inspection in Edgerton, WI | WISCo Inspections, LLC',
    metaDescription:
      'Buyer home inspection in Edgerton, WI to understand a property’s condition, visible defects, and major systems before you buy. Call (608) 642-1112.',
    summary:
      'An inspection designed for people considering a home purchase, focused on helping you understand the property before you commit.',
    overview: [
      'Buying a home is one of the largest financial decisions most people make. A buyer inspection gives you an independent, visual evaluation of the property so you can understand its condition before you finalize the purchase.',
      'Inspection findings can help you decide whether to move forward, which maintenance concerns to plan for, and which questions to raise with the seller or your real estate professional.',
    ],
    localIntro:
      'Buyers considering a home in Edgerton, Wisconsin can call WISCo Inspections to discuss the property, the inspection scope, and availability before making an offer or completing due diligence.',
    covers: [
      'Overall condition of the property as observed during the inspection',
      'Visible defects in the roof, structure, exterior, and interior',
      'Major systems, including electrical, plumbing, and heating and cooling',
      'Maintenance concerns that may need attention soon or in the future',
      'Accessible areas such as the attic, garage, and crawl space entrance, where applicable',
    ],
    whoNeedsIt: [
      'First-time homebuyers who want to understand what they are purchasing',
      'Buyers of older homes who want a clear view of major systems',
      'Buyers who want an independent review separate from the seller’s disclosures',
    ],
    whatToExpect: [
      'An evaluation of the property scheduled around your purchase timeline',
      'Clear explanations of findings so you can prioritize concerns',
      'A written report you can review with your agent or others involved in the transaction',
    ],
    limitations: [
      'A buyer inspection is a visual evaluation of accessible components on the day of the inspection. It does not guarantee the absence of defects.',
      'The inspection does not evaluate the property’s value, market conditions, or whether a purchase is advisable.',
      'Specialized testing, such as radon or mold testing, is a separate service and must be requested.',
    ],
    faqs: [
      {
        question: 'When should a buyer schedule an inspection?',
        answer:
          'Many buyers schedule an inspection after an offer is accepted and before the inspection deadline in the purchase agreement. Confirm your timeline with your real estate professional and call to check availability.',
      },
      {
        question: 'Can I use the inspection to negotiate?',
        answer:
          'Inspection findings are often part of purchase discussions. How findings are used depends on your agreement and your real estate professional’s guidance.',
      },
      {
        question: 'Will the inspector tell me whether to buy the home?',
        answer:
          'The inspector documents the condition of the property. The decision to buy is yours, and you may wish to consult your real estate professional for advice.',
      },
    ],
    related: ['home-inspection', 'radon-testing', 'mold-testing', 'pre-listing-inspection'],
  },
  {
    slug: 'pre-listing-inspection',
    name: 'Pre-Listing Inspection',
    icon: ClipboardCheck,
    image: { src: PHOTOS.checklist, alt: 'Hands holding a home inspection checklist on a clipboard' },
    seoTitle: 'Pre-Listing Inspection in Edgerton, WI | WISCo Inspections, LLC',
    metaDescription:
      'Pre-listing home inspection in Edgerton, WI for sellers who want to understand their home’s condition before listing. Call WISCo Inspections at (608) 642-1112.',
    summary:
      'An inspection for homeowners preparing to sell, so you know the property’s condition before buyers begin asking questions.',
    overview: [
      'A pre-listing inspection gives sellers a look at their home before it goes on the market. Knowing about visible maintenance concerns in advance allows you to plan, prioritize, and prepare for buyer questions.',
      'The inspection does not replace the disclosures you may be required to provide. It is an informational step that helps you approach the sale with a clearer understanding of the property.',
    ],
    localIntro:
      'Homeowners in Edgerton, Wisconsin who are preparing to sell can call WISCo Inspections to discuss a pre-listing inspection and find out what the process involves before listing.',
    covers: [
      'Overall condition of the roof, exterior, and foundation as accessible',
      'Visible maintenance concerns in the interior and major systems',
      'Electrical, plumbing, and heating and cooling observations',
      'Attic, ventilation, and visible insulation',
      'Accessible areas of the garage and other living spaces',
    ],
    whoNeedsIt: [
      'Homeowners preparing to list their home for sale',
      'Sellers of older homes who want to understand likely buyer questions',
      'Sellers who want to plan repairs before negotiations begin',
    ],
    whatToExpect: [
      'An evaluation of the property before it is listed',
      'Explanations of visible concerns and which items may be priorities',
      'A written report you can use to plan repairs or disclosures with your real estate professional',
    ],
    limitations: [
      'A pre-listing inspection is a visual evaluation of accessible components. It does not guarantee the absence of defects and does not replace required seller disclosures.',
      'Repair work is outside the scope of this inspection. Call to ask about the services offered.',
      'Buyers may request their own inspections regardless of a pre-listing inspection.',
    ],
    faqs: [
      {
        question: 'Why would a seller get a pre-listing inspection?',
        answer:
          'It helps sellers understand visible maintenance concerns before buyers see them, so they can plan repairs and answer questions with confidence.',
      },
      {
        question: 'Does a pre-listing inspection replace a buyer’s inspection?',
        answer:
          'No. Buyers typically arrange their own inspections. A pre-listing inspection is for the seller’s own information.',
      },
      {
        question: 'Should I make the report available to buyers?',
        answer:
          'Whether and how to share a report is a decision to make with your real estate professional, especially in relation to required disclosures.',
      },
    ],
    related: ['home-inspection', 'buyer-home-inspection', 'radon-testing', 'mold-testing'],
  },
  {
    slug: 'radon-testing',
    name: 'Radon Testing',
    icon: Wind,
    image: { src: PHOTOS.safetyDevices, alt: 'Smart home safety devices including a smoke detector and camera' },
    seoTitle: 'Radon Testing in Edgerton, WI | WISCo Inspections, LLC',
    metaDescription:
      'Radon testing in Edgerton, WI for homebuyers, sellers, and homeowners. Learn what radon is, why testing matters, and how to schedule. Call (608) 642-1112.',
    summary:
      'Radon testing helps you understand the radon gas level in a home, which is one of the most useful pieces of information for a healthy living environment.',
    overview: [
      'Radon is a naturally occurring, colorless, odorless gas that forms when uranium in soil and rock breaks down. It can enter a home through cracks and openings in the foundation and can accumulate indoors.',
      'Because radon cannot be detected by smell or sight, testing is the only way to know the level in a home. Radon testing is commonly considered during a home purchase or sale, and by homeowners who have never tested.',
    ],
    localIntro:
      'Radon can be present in homes in Edgerton, Wisconsin. Call WISCo Inspections to ask about radon testing for your property and confirm the testing procedure and availability.',
    covers: [
      'Testing for radon gas in the home',
      'Explanation of results and what the measured levels mean',
      'Guidance on understanding the test and its limitations',
    ],
    whoNeedsIt: [
      'Homebuyers who want to know radon levels before purchase',
      'Sellers who want to understand their home’s radon level before listing',
      'Homeowners who have not tested, or who want a retest after changes to the home',
    ],
    whatToExpect: [
      'A discussion of the testing method and the testing period before the test begins',
      'Clear explanation of results once the test is complete',
      'Information to help you understand next steps, based on the test outcome',
    ],
    limitations: [
      'Radon testing measures radon at the time of testing. Levels can vary over time and between areas of a home.',
      'WISCo Inspections does not advertise radon mitigation or radon reduction services. Ask about the services offered when you call.',
      'Test results are informational and do not replace advice from qualified radon professionals.',
    ],
    faqs: [
      {
        question: 'What is radon?',
        answer:
          'Radon is a naturally occurring radioactive gas that comes from the breakdown of uranium in soil and rock. It is colorless and odorless.',
      },
      {
        question: 'Why does radon testing matter?',
        answer:
          'Radon can accumulate indoors, and the only way to know the level in a home is to test. Testing gives you information to make informed decisions.',
      },
      {
        question: 'When should I test for radon?',
        answer:
          'Many people test during a home purchase or sale, or when they have never tested. Call to discuss your situation and the timing that fits your needs.',
      },
    ],
    related: ['home-inspection', 'buyer-home-inspection', 'pre-listing-inspection', 'mold-testing'],
  },
  {
    slug: 'mold-testing',
    name: 'Mold Testing',
    icon: Droplets,
    image: { src: PHOTOS.wallMoisture, alt: 'Close-up of a weathered wall showing cracks and moisture staining' },
    seoTitle: 'Mold Testing in Edgerton, WI | WISCo Inspections, LLC',
    metaDescription:
      'Mold testing in Edgerton, WI for visible moisture concerns and home air quality questions. Call WISCo Inspections at (608) 642-1112 to discuss testing.',
    summary:
      'Testing and evaluation for homes where moisture or suspected mold is a concern, so you can understand what is present before you decide on next steps.',
    overview: [
      'Mold grows where moisture is present. Visible staining, musty odors, past water events, and humidity problems are common reasons homeowners and buyers ask about mold.',
      'Mold testing can help clarify a concern, but it is only one part of understanding a property. Visible moisture sources, ventilation, and drainage are often just as important.',
    ],
    localIntro:
      'If you are concerned about moisture or mold in a home in Edgerton, Wisconsin, call WISCo Inspections to discuss what testing is available for your property and what the process involves.',
    covers: [
      'Observation of visible moisture concerns and staining during the inspection',
      'Discussion of likely moisture sources, such as drainage, ventilation, and leaks',
      'Mold testing, where offered, with an explanation of how the process works',
      'Explanation of test findings in plain language',
    ],
    whoNeedsIt: [
      'Buyers who noticed staining, odor, or a past water problem',
      'Homeowners concerned about humidity or moisture in the home',
      'Sellers who want to understand moisture concerns before listing',
    ],
    whatToExpect: [
      'A review of visible conditions and the areas you are concerned about',
      'An explanation of the testing process and what samples or measurements are involved',
      'Findings explained so you can decide on next steps',
    ],
    limitations: [
      'Mold testing results describe conditions at the time of sampling. They do not measure every area of a home.',
      'WISCo Inspections does not advertise mold remediation or mold removal. Call to ask about the services offered.',
      'A visual inspection cannot see inside walls or other concealed spaces.',
    ],
    faqs: [
      {
        question: 'When might I need mold testing?',
        answer:
          'Testing may be considered when there is visible mold, a musty smell, past water damage, or ongoing moisture concerns. Call to discuss your situation.',
      },
      {
        question: 'Does a home inspection include mold testing?',
        answer:
          'A home inspection is a visual evaluation. Mold testing is a separate service and must be requested when you call.',
      },
      {
        question: 'Can testing tell me how to fix a moisture problem?',
        answer:
          'Testing describes conditions present at the time. Correcting moisture sources usually requires a qualified contractor or remediation professional.',
      },
    ],
    related: ['home-inspection', 'buyer-home-inspection', 'pre-listing-inspection', 'radon-testing'],
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
