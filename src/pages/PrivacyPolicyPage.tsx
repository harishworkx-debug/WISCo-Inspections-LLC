import LegalDocument from '@/components/LegalDocument';
import { BUSINESS } from '@/data/business';
import { usePageMeta } from '@/lib/seo';

export default function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy | WISCo Inspections, LLC',
    description: 'How WISCo Inspections, LLC handles information on its website and during phone calls.',
    path: '/privacy-policy',
  });

  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      updated="November 14, 2026"
      sections={[
        {
          heading: 'Overview',
          body: (
            <p>
              {BUSINESS.name} respects your privacy. This policy explains what information may be involved when you visit this
              website or contact us by phone.
            </p>
          ),
        },
        {
          heading: 'Information on this website',
          body: (
            <p>
              This website does not include contact forms, booking forms, or other tools that ask you to submit personal
              information online. Contacting us is done by phone.
            </p>
          ),
        },
        {
          heading: 'Phone calls',
          body: (
            <p>
              When you call us, we collect the information you choose to share so we can discuss your property and inspection
              needs. We use that information only to respond to your inquiry and provide the services you request.
            </p>
          ),
        },
        {
          heading: 'Third-party services',
          body: (
            <p>
              This website displays a Google Maps embed and links to our Google Maps listing. Google may collect information
              and set cookies under its own privacy policy when these features load. Please review Google’s policies for more
              details.
            </p>
          ),
        },
        {
          heading: 'Questions',
          body: (
            <p>
              For questions about this policy, call {BUSINESS.phoneDisplay}.
            </p>
          ),
        },
      ]}
    />
  );
}
