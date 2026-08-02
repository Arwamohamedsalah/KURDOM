import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import { coreValues } from '../../../data/content';
import logoMark from '../../../assets/logo-mark.svg';
import { staggerContainer, scaleFadeIn, viewportOnce } from '../../../utils/animations';
import styles from './CoreValues.module.scss';

const CoreValues = () => {
  const [trustValue, qualityValue] = coreValues;
  const TrustIcon = trustValue.icon;
  const QualityIcon = qualityValue.icon;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Core Values"
          title="قيمنا الأساسية"
          subtitle="القيم التي تقودنا في كل تعامل وخدمة نقدمها"
          light
        />

        <motion.div
          className={styles.diagram}
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.article
            className={`${styles.valueCard} ${styles.valueStart}`}
            variants={scaleFadeIn}
          >
            <div className={styles.iconWrap}>
              <TrustIcon aria-hidden="true" />
            </div>
            <h3 className={styles.title}>{trustValue.title}</h3>
            <p className={styles.description}>{trustValue.description}</p>
          </motion.article>

          <motion.div className={styles.logoHub} variants={scaleFadeIn}>
            <span className={`${styles.connector} ${styles.connectorStart}`} aria-hidden="true" />
            <span className={`${styles.connector} ${styles.connectorEnd}`} aria-hidden="true" />
            <div className={styles.logoRing} aria-hidden="true" />
            <img src={logoMark} alt="" className={styles.logoMark} />
            <span className={`${styles.logoCaption} en`}>Kurdm Real Estate</span>
          </motion.div>

          <motion.article
            className={`${styles.valueCard} ${styles.valueEnd}`}
            variants={scaleFadeIn}
          >
            <div className={styles.iconWrap}>
              <QualityIcon aria-hidden="true" />
            </div>
            <h3 className={styles.title}>{qualityValue.title}</h3>
            <p className={styles.description}>{qualityValue.description}</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
