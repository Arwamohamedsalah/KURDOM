import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyInfo, navLinks } from '../../../data/content';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>K</span>
              <div>
                <span className={styles.logoName}>{companyInfo.nameAr}</span>
                <span className={`${styles.logoSub} en`}>{companyInfo.name}</span>
              </div>
            </div>
            <p className={styles.tagline}>
              شريكك الموثوق في الاستثمار العقاري — جدة، المملكة العربية السعودية
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
          <p className={`${styles.location} en`}>{companyInfo.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
