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
      updated="November 25, 2026"
      sections={[
        {
          heading: 'Use of this website',
          body: (
            <p>
              This website provides general information about residential water damage mitigation and certified mold remediation services offered by {BUSINESS.name}. By
              using this website, you agree to use it lawfully and for its intended purpose.
            </p>
          ),
        },
        {
          heading: 'Restoration & remediation services',
          body: (
            <p>
              Our emergency water extraction, drying, and mold remediation services are exclusively dedicated to residential homeowners and private properties. Service scope,
              drying protocols, equipment placement, and insurance claim coordination details are confirmed directly with you by our on-site certified technicians.
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
