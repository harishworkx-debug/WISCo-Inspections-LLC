import LegalDocument from '@/components/LegalDocument';
import { BUSINESS } from '@/data/business';
import { usePageMeta } from '@/lib/seo';

export default function TermsPage() {
  usePageMeta({
    title: 'Terms and Conditions | WISCo Inspections, LLC',
    description: 'Terms and conditions for using the WISCo Inspections, LLC website.',
    path: '/terms-and-conditions',
  });

  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms and Conditions"
      updated="November 14, 2026"
      sections={[
        {
          heading: 'Use of this website',
          body: (
            <p>
              This website provides general information about the home inspection services offered by {BUSINESS.name}. By
              using this website, you agree to use it lawfully and for its intended purpose.
            </p>
          ),
        },
        {
          heading: 'Inspection services',
          body: (
            <p>
              Home inspections are visual evaluations of accessible components at the time of inspection. Inspection scope,
              exclusions, fees, and report details are confirmed directly with us by phone and may be documented separately
              before any inspection takes place.
            </p>
          ),
        },
        {
          heading: 'No guarantee',
          body: (
            <p>
              Information on this website is provided for general guidance. It does not guarantee the condition of any
              property, the absence of defects, or the results of any test.
            </p>
          ),
        },
        {
          heading: 'Limitation of liability',
          body: (
            <p>
              To the fullest extent permitted by law, {BUSINESS.name} is not liable for decisions made in reliance on general
              information on this website.
            </p>
          ),
        },
        {
          heading: 'Contact',
          body: <p>Questions about these terms can be directed to us by phone at {BUSINESS.phoneDisplay}.</p>,
        },
      ]}
    />
  );
}
