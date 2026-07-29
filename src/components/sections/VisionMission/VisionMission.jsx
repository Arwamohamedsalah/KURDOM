import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import { visionMissionGoals } from '../../../data/content';
import { staggerContainer, cardReveal, viewportOnce } from '../../../utils/animations';
import styles from './VisionMission.module.scss';

const VisionMission = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Vision & Mission"
          title="رؤيتنا ورسالتنا وأهدافنا"
          subtitle="نسعى لتحقيق التميز في قطاع العقارات من خلال رؤية واضحة ورسالة ملهمة"
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {visionMissionGoals.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.type}
                className={styles.card}
                variants={cardReveal}
              >
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <span className={`${styles.typeLabel} en`}>{item.titleEn}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
