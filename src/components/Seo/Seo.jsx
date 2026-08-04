import { companyInfo, siteSeo } from '../../data/content';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: companyInfo.nameAr,
  alternateName: companyInfo.name,
  url: siteSeo.siteUrl,
  logo: `${siteSeo.siteUrl}${siteSeo.ogImage}`,
  image: `${siteSeo.siteUrl}${siteSeo.ogImage}`,
  description: siteSeo.description,
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jeddah',
    addressRegion: 'Makkah',
    addressCountry: 'SA',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  sameAs: [`https://${companyInfo.website}`],
  knowsAbout: [
    'Real Estate',
    'Property Management',
    'Real Estate Marketing',
    'Real Estate Consulting',
  ],
};

const Seo = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default Seo;
