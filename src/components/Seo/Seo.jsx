import { companyInfo, siteSeo } from '../../data/content';

const logoImage = {
  '@type': 'ImageObject',
  url: siteSeo.logoUrl,
  width: siteSeo.logoWidth,
  height: siteSeo.logoHeight,
  caption: companyInfo.nameAr,
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteSeo.siteUrl}/#organization`,
      name: companyInfo.nameAr,
      alternateName: companyInfo.name,
      url: siteSeo.siteUrl,
      logo: logoImage,
      image: logoImage,
      description: siteSeo.description,
      email: companyInfo.email,
      telephone: companyInfo.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jeddah',
        addressRegion: 'Makkah',
        addressCountry: 'SA',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteSeo.siteUrl}/#website`,
      url: siteSeo.siteUrl,
      name: companyInfo.nameAr,
      inLanguage: 'ar-SA',
      publisher: {
        '@id': `${siteSeo.siteUrl}/#organization`,
      },
    },
    {
      '@type': 'RealEstateAgent',
      '@id': `${siteSeo.siteUrl}/#business`,
      name: companyInfo.nameAr,
      alternateName: companyInfo.name,
      url: siteSeo.siteUrl,
      logo: logoImage,
      image: logoImage,
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
      parentOrganization: {
        '@id': `${siteSeo.siteUrl}/#organization`,
      },
    },
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
