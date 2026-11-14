import { BUSINESS } from '@/data/business';

export type GoogleReview = {
  author: string;
  isLocalGuide?: boolean;
  reviewCountText?: string;
  rating: number;
  timeAgo: string;
  quote: string;
  service?: string;
  positiveTraits?: string[];
};

export const REVIEWS_OVERVIEW = {
  rating: 4.9,
  totalReviews: 87,
  source: 'Google Reviews',
  mapsUrl: BUSINESS.mapsUrl,
  topics: [
    { label: 'Clear explanations', count: 13 },
    { label: 'Timely report', count: 8 },
    { label: 'First home purchase', count: 5 },
    { label: 'Walk-through', count: 4 },
    { label: 'Clear communication', count: 4 },
    { label: 'Easy to follow report', count: 3 },
    { label: 'Kind staff', count: 3 },
    { label: 'Explanation of report', count: 3 },
    { label: 'Radon test', count: 2 },
    { label: 'Digital report', count: 2 },
  ],
};

export const REAL_REVIEWS: GoogleReview[] = [
  {
    author: 'Sasha Vizvary',
    reviewCountText: '3 reviews',
    rating: 5,
    timeAgo: '4 years ago',
    quote:
      'Phil was great to work with! Thorough, professional, personable, and knowledgeable. This is our second home and this inspection with Phil was far and away superior to the inspection we had with a different company on our first house. My father is an electrician and all-around handy kind of guy and he joined us on the inspection. After hearing Phil’s assessment and explanations, he looked at me and said "Yep. I agree." This, dear reader, is the highest praise this man can offer. Go with Phil, you won’t be disappointed.',
    service: 'Buyer Home Inspection',
  },
  {
    author: 'Julie Daube',
    isLocalGuide: true,
    reviewCountText: '42 reviews',
    rating: 5,
    timeAgo: '6 years ago',
    quote:
      'Phil was extremely thorough with the inspection of the home I wanted to purchase. He actually found an issue with the furnace and when an HVAC company came in to follow up and said there was nothing wrong, he stuck with his original recommendation and urged me to have it inspected by the gas company. I called the gas company to come out and double check and sure enough there was a gas leak. If I would have believed the HVAC company, I would have purchased the home with a gas leak and not known anything different! Phil was also a great communicator and his reports are easy to follow and very detailed. I would recommend Phil and use him again in a heart beat!',
    service: 'Furnace & Safety Inspection',
    positiveTraits: ['Responsiveness', 'Punctuality', 'Quality', 'Value'],
  },
  {
    author: 'Tiffany Mitchell',
    reviewCountText: '6 reviews',
    rating: 5,
    timeAgo: '4 years ago',
    quote:
      'Phil was great to work with! He is very thorough, detailed, professional, and knowledgeable. I’ve purchased two other homes and unfortunately did not have the same experience with those inspectors. Scheduling was easy, I just scheduled an appointment online and received a confirmation shortly thereafter. My inspection was in the morning and received the inspection report later that same night. I will definitely work with Phil again in the future!',
    service: 'Buyer Home Inspection',
    positiveTraits: ['Responsiveness', 'Quality', 'Professionalism', 'Value'],
  },
  {
    author: 'DanIel Bridge',
    isLocalGuide: true,
    reviewCountText: '10 reviews',
    rating: 5,
    timeAgo: '6 years ago',
    quote:
      'We were referred to WISCo Inspections and understood that our inspector, Phil, does thorough and deep inspections. When we met up with him at the inspection, he walked us through and around the property pointing out areas of concern as well as areas that were in great condition. He covered everything top to bottom. He followed up with an equally detailed written report sent to us that evening. His evaluation improved our position when negotiating with the sellers. We have since hired him again to conduct a radon test in our home. Overall I would recommend Phil and his company to anyone for home inspections.',
    service: 'Home Inspection & Radon Testing',
    positiveTraits: ['Quality', 'Professionalism'],
  },
  {
    author: 'Hillary Severson',
    reviewCountText: '1 review',
    rating: 5,
    timeAgo: '4 years ago',
    quote:
      'This is my first time purchasing a home. If you need someone to do a home inspection, Phil is your guy! He made me feel so comfortable and confident right from the start. He was very responsive and punctual. He showed me numerous pictures to help me visualize his explanations as we walked through and always answered my questions. Issues were put into color coded categories of "defects" and "needs repair". This really helped me to prioritize what I need to address after closing. I had an afternoon inspection and he had the entire report available within hours!',
    service: 'First-Time Homebuyer Inspection',
    positiveTraits: ['Responsiveness', 'Quality', 'Professionalism', 'Value'],
  },
  {
    author: 'Joe Ramirez',
    isLocalGuide: true,
    reviewCountText: '8 reviews',
    rating: 5,
    timeAgo: '8 years ago',
    quote:
      'Phil did an amazing job on my pre-listing inspection! Most comprehensive home inspection I have ever had. Very knowledgeable about current codes and good at spotting things that I had never noticed. He went out of his way to accommodate my schedule and came back with a full report with pictures within hours. When the inspection is complete, you get a full online report that is clean and easy to understand, broken into logical sections. Surpassed my expectations.',
    service: 'Pre-Listing Inspection',
  },
  {
    author: 'Caitlyn Dubester',
    reviewCountText: '4 reviews',
    rating: 5,
    timeAgo: '4 years ago',
    quote:
      'Phil was extremely thorough and explained everything he found in detail while walking us around the house showing us all that he found. Very professional and responsive anytime I had questions. The inspection report was also very detailed and easy to follow, and he includes annotated pictures and videos as well. Highly recommend him for your home inspection!!',
    service: 'Home Inspection & Walkthrough',
  },
  {
    author: 'Kayla DiPrima',
    isLocalGuide: true,
    reviewCountText: '17 reviews',
    rating: 5,
    timeAgo: '2 years ago',
    quote:
      'Phil was very thorough and detail oriented. I’m a single mom & it was important to me to know that my home was safe for my son & I. From start to finish Phil was so professional and communicative. He was willing to answer all questions I had. If you’re looking for the best inspector you just found him!',
    service: 'Family Home Safety Inspection',
  },
  {
    author: 'Debbie Hinker',
    reviewCountText: '3 reviews',
    rating: 5,
    timeAgo: '5 years ago',
    quote:
      'WISCo Inspections did a great job with our 11th month warranty inspection. We hadn’t done an inspection with our new construction home when purchased but wanted one prior to the end of our warranty. Phil did a great job walking me through his findings and answering any questions I had. I highly recommend WISCo.',
    service: '11th Month Warranty Inspection',
    positiveTraits: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
  },
];
