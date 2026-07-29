import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import SectionHeader from '../../ui/SectionHeader';
import { companyInfo } from '../../../data/content';
import { staggerContainer, scaleFadeIn, viewportOnce } from '../../../utils/animations';
import styles from './Contact.module.scss';

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: 'العنوان',
    content: companyInfo.address,
    href: null,
  },
  {
    icon: FaPhone,
    title: 'الهاتف',
    content: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
  },
  {
    icon: FaEnvelope,
    title: 'البريد الإلكتروني',
    content: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: FaWhatsapp,
    title: 'واتساب',
    content: 'تواصل عبر واتساب',
    href: `https://wa.me/${companyInfo.phone.replace(/\s/g, '')}`,
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.decor} aria-hidden="true" />
      <div className={styles.container}>
        <SectionHeader
          label="Contact Us"
          title="تواصل معنا"
          subtitle="نحن هنا لمساعدتك في رحلتك الاستثمارية العقارية"
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={styles.infoCard}
                variants={scaleFadeIn}
              >
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={item.title === 'الهاتف' ? 'ltr' : undefined}
                      dir={item.title === 'الهاتف' ? 'ltr' : undefined}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
