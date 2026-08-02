import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import { visionMissionGoals } from '../../../data/content';
import styles from './VisionMission.module.scss';

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
  }),
};

const VisionMission = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % visionMissionGoals.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSelect = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const activeItem = visionMissionGoals[activeIndex];
  const Icon = activeItem.icon;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Vision & Mission"
          title="رؤيتنا ورسالتنا وأهدافنا"
          subtitle="نسعى لتحقيق التميز في قطاع العقارات من خلال رؤية واضحة ورسالة ملهمة"
        />

        <div className={styles.slider}>
          <div className={styles.tabs} role="tablist" aria-label="رؤيتنا ورسالتنا وأهدافنا">
            {visionMissionGoals.map((item, index) => (
              <button
                key={item.type}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={`${styles.tab} ${activeIndex === index ? styles.tabActive : ''}`}
                onClick={() => handleSelect(index)}
              >
                <span className={`${styles.tabLabel} en`}>{item.titleEn}</span>
                <span className={styles.tabTitle}>{item.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.stage}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={activeItem.type}
                className={styles.card}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                role="tabpanel"
              >
                <div className={styles.iconWrap}>
                  <Icon aria-hidden="true" />
                </div>
                <span className={`${styles.typeLabel} en`}>{activeItem.titleEn}</span>
                <h3 className={styles.cardTitle}>{activeItem.title}</h3>
                <p className={styles.cardDesc}>{activeItem.description}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className={styles.dots} aria-hidden="true">
            {visionMissionGoals.map((item, index) => (
              <button
                key={item.type}
                type="button"
                className={`${styles.dot} ${activeIndex === index ? styles.dotActive : ''}`}
                onClick={() => handleSelect(index)}
                aria-label={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
