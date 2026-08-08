import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import ParallaxImage from '../../ui/ParallaxImage';
import ScrollReveal from '../../ui/ScrollReveal';
import { aboutContent } from '../../../data/content';
import { staggerContainer, scaleFadeIn, viewportOnce } from '../../../utils/animations';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal direction="right">
            <ParallaxImage
              src={aboutContent.image}
              alt="كردم العقارية"
            />
          </ScrollReveal>

          <div className={styles.textSide}>
            <SectionHeader
              label={aboutContent.label}
              title={aboutContent.title}
              align="start"
            />
            <ScrollReveal delay={0.15}>
              <p className={styles.description}>{aboutContent.description}</p>
            </ScrollReveal>

            <motion.div
              className={styles.stats}
              variants={staggerContainer(0.08, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {aboutContent.highlights.map((item) => (
                <motion.div key={item.label} className={styles.stat} variants={scaleFadeIn}>
                  <span
                    className={`${styles.statValue} ${
                      item.label === 'الموقع الإلكتروني'
                        ? styles.statValueWebsite
                        : item.label === 'رخصة فال'
                          ? styles.statValueLicense
                          : ''
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className={styles.statLabel}>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
