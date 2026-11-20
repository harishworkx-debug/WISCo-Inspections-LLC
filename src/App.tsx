import SiteLayout from '@/components/layout/SiteLayout';
import { ARTICLE_BY_SLUG } from '@/data/articles';
import { SERVICE_LOCATIONS } from '@/data/locations';
import { SERVICES, SERVICE_BY_SLUG } from '@/data/services';
import AboutPage from '@/pages/AboutPage';
import ArticleDetailPage from '@/pages/ArticleDetailPage';
import ArticlesPage from '@/pages/ArticlesPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import ServicesPage from '@/pages/ServicesPage';
import TermsPage from '@/pages/TermsPage';
import { usePathname } from '@/lib/router';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';
import StandaloneLandingPage from '@/standalone-landing/StandaloneLandingPage';

const STATIC_ROUTES: Record<string, () => JSX.Element> = {
  '/': HomePage,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/service-areas': ServiceAreasPage,
  '/articles': ArticlesPage,
  '/contact': ContactPage,
  '/privacy-policy': PrivacyPolicyPage,
  '/terms-and-conditions': TermsPage,
};

function renderArticle(path: string) {
  if (path.startsWith('/articles/')) {
    const slug = path.replace('/articles/', '');
    const article = ARTICLE_BY_SLUG[slug];
    if (article) {
      return <ArticleDetailPage article={article} />;
    }
  }
  return null;
}

function renderServiceLocation(path: string) {
  for (const location of SERVICE_LOCATIONS) {
    for (const service of SERVICES) {
      if (path === `/${service.slug}-${location.slug}`) {
        return <ServiceLocationPage service={SERVICE_BY_SLUG[service.slug]} location={location} />;
      }
    }
  }
  return null;
}

function App() {
  const path = usePathname();

  // Standby preview route for the standalone landing page
  if (path === '/home-page') {
    return <StandaloneLandingPage />;
  }

  // 🎛️ Root Switcher Active: Direct landing page at root "/" and primary niche-location slug
  if (USE_LANDING_PAGE_AS_HOME) {
    if (path === '/' || path === '/home-inspection-edgerton-wi') {
      return <StandaloneLandingPage />;
    }
  }

  // Standard multi-page site routing wrapped in main SiteLayout
  const StaticPage = STATIC_ROUTES[path];
  const content =
    StaticPage ? <StaticPage /> : renderArticle(path) ?? renderServiceLocation(path) ?? <NotFoundPage />;

  return <SiteLayout>{content}</SiteLayout>;
}

export default App;
