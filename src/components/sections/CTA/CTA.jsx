import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import Button from '../../ui/Button';
import { ctaContent } from '../../../data/content';
import { headerStagger, headerItem, viewportOnce } from '../../../utils/animations';
import styles from './CTA.module.scss';

const CTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.18]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bgImage} aria-hidden="true">
        <motion.div className={styles.bgInner} style={{ y: bgY, scale: bgScale }}>
          <img src={ctaContent.background} alt="" loading="lazy" decoding="async" />
        </motion.div>
        <div className={styles.overlay} />
      </div>

      <motion.div
        className={styles.content}
        variants={headerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2 className={styles.title} variants={headerItem}>
          {ctaContent.title}
        </motion.h2>
        <motion.p className={styles.description} variants={headerItem}>
          {ctaContent.description}
        </motion.p>
        <motion.div variants={headerItem}>
          <Button size="lg" variant="accent" onClick={scrollToContact}>
            {ctaContent.button}
            <HiArrowLeft />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
