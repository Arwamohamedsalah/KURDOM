import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ParallaxImage.module.scss';

const ParallaxImage = ({ src, alt, className = '', badge = null }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1.12]);

  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`}>
      <motion.div className={styles.inner} style={{ y, scale }}>
        <img src={src} alt={alt} loading="lazy" />
      </motion.div>
      {badge && (
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {badge}
        </motion.div>
      )}
    </div>
  );
};

export default ParallaxImage;
