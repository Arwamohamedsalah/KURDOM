import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import { coreValues } from '../../../data/content';
import { staggerContainer, scaleFadeIn, viewportOnce } from '../../../utils/animations';
import styles from './CoreValues.module.scss';

const CoreValues = () => {
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
          className={styles.grid}
          variants={staggerContainer(0.08, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                variants={scaleFadeIn}
              >
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <h3 className={styles.title}>{value.title}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
