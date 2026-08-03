import { motion } from 'framer-motion';
import { services, servicesContent, companyInfo } from '../../../data/content';
import { cardReveal, staggerContainer, viewportOnce } from '../../../utils/animations';
import styles from './Services.module.scss';

const highlights = [
  { value: '4', label: 'مجالات خدمة' },
  { value: companyInfo.serviceArea, label: 'نطاق العمل' },
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.decor} aria-hidden="true" />

      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75 }}
        >
          <span className={`${styles.label} en`}>Our Services</span>
          <h2 className={styles.sectionTitle}>{servicesContent.title}</h2>
          <p className={styles.intro}>{servicesContent.intro}</p>
        </motion.header>

        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.08, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className={styles.card}
                variants={cardReveal}
              >
                <span className={`${styles.serviceIndex} en`} dir="ltr">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon aria-hidden="true" />
                  </div>
                  <div className={styles.cardHeading}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                </div>

                <ul className={styles.points}>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

        <div className={styles.highlights}>
          {highlights.map((item) => (
            <div key={item.label} className={styles.highlight}>
              <span
                className={
                  item.label === 'نطاق العمل'
                    ? styles.highlightValueText
                    : styles.highlightValue
                }
              >
                {item.value}
              </span>
              <span className={styles.highlightLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
