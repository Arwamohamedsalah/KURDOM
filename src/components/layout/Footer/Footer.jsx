import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyInfo, navLinks, brandLogos } from '../../../data/content';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img
                src={brandLogos.onLight}
                alt={companyInfo.nameAr}
                className={styles.logoImage}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className={styles.tagline}>
              شريكك الموثوق في الاستثمار العقاري — {companyInfo.serviceArea}
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>روابط سريعة</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>تواصل معنا</h4>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <FaPhone />
                <a href={`tel:${companyInfo.phone}`} className="ltr" dir="ltr">
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <FaEnvelope />
                <a href={`mailto:${companyInfo.email}`} className="ltr" dir="ltr">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {currentYear}{' '}
            <span className="en">{companyInfo.name}</span>. جميع الحقوق محفوظة.
          </p>
          <p className={`${styles.location} en`}>{companyInfo.website}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
