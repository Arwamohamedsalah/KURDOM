import { motion } from 'framer-motion';
import { headerStagger, headerItem, viewportOnce } from '../../../utils/animations';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  return (
    <motion.header
      className={`${styles.header} ${styles[align]} ${light ? styles.light : ''}`}
      variants={headerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {label && (
        <motion.span className={`${styles.label} en`} variants={headerItem}>
          {label}
        </motion.span>
      )}

      <motion.h2 className={styles.title} variants={headerItem}>
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p className={styles.subtitle} variants={headerItem}>
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
};

export default SectionHeader;
