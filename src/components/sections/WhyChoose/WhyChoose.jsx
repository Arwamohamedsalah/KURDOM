import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import SectionHeader from '../../ui/SectionHeader';
import ParallaxImage from '../../ui/ParallaxImage';
import ScrollReveal from '../../ui/ScrollReveal';
import { whyChoose, whyChooseImage } from '../../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../../utils/animations';
import styles from './WhyChoose.module.scss';

const WhyChoose = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal direction="right">
            <ParallaxImage
              src={whyChooseImage}
              alt="واجهة جدة البحرية"
            />
          </ScrollReveal>

          <div className={styles.contentSide}>
            <SectionHeader
              label="Why Kurdm"
              title="لماذا تختار كردم العقارية؟"
              subtitle="نقدم تجربة استثمارية فريدة مبنية على الخبرة والثقة"
              align="start"
            />

            <motion.ul
              className={styles.list}
              variants={staggerContainer(0.08, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {whyChoose.map((item) => (
                <motion.li key={item.title} className={styles.item} variants={fadeInUp}>
                  <HiCheckCircle className={styles.checkIcon} aria-hidden="true" />
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
