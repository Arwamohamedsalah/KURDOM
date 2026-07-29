import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import ParallaxImage from '../../ui/ParallaxImage';
import ScrollReveal from '../../ui/ScrollReveal';
import { services } from '../../../data/content';
import { staggerContainer, cardReveal, viewportOnce } from '../../../utils/animations';
import styles from './Services.module.scss';

const showcaseImage =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80';

const highlights = [
  { value: '5', label: 'مجالات خدمة' },
  { value: '360°', label: 'حلول متكاملة' },
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.decor} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.aside}>
            <SectionHeader
              label="Our Services"
              title="خدماتنا العقارية"
              subtitle="حلول عقارية متكاملة للأفراد والمستثمرين في السوق السعودي"
              align="start"
            />

            <ScrollReveal direction="right">
              <div className={styles.showcase}>
                <ParallaxImage
                  src={showcaseImage}
                  alt="خدمات كردم العقارية"
                  className={styles.showcaseImage}
                />
                <div className={styles.showcaseOverlay}>
                  <span className={styles.showcaseLabel}>Kurdm Real Estate</span>
                  <p className={styles.showcaseText}>
                    شريكك الموثوق في كل خطوة من رحلتك العقارية
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className={styles.highlights}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.highlight}>
                  <span className={styles.highlightValue}>{item.value}</span>
                  <span className={styles.highlightLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>

          <motion.div
            className={styles.grid}
            variants={staggerContainer(0.07, 0.09)}
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
                  <div className={styles.cardMain}>
                    <div className={styles.iconWrap}>
                      <Icon aria-hidden="true" />
                    </div>

                    <div className={styles.cardContent}>
                      <span className={`${styles.serviceLabel} en`}>
                        Service 0{index + 1}
                      </span>
                      <h3 className={styles.title}>{service.title}</h3>
                      <p className={styles.description}>{service.description}</p>
                    </div>
                  </div>

                  <span className={styles.watermark} aria-hidden="true">
                    0{index + 1}
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
