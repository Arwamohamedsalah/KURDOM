import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import Button from '../../ui/Button';
import { heroContent } from '../../../data/content';
import { heroContentVariants, heroItemVariants } from '../../../utils/animations';
import styles from './Hero.module.scss';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgImage}>
        <img src={heroContent.image} alt="Luxury real estate in Jeddah" />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.textContent}
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className={`${styles.badge} en`}
            variants={heroItemVariants}
          >
            {heroContent.headlineEn}
          </motion.span>

          <motion.h1 className={styles.headline} variants={heroItemVariants}>
            <span className={styles.headlineLead}>{heroContent.headlineArLead}</span>
            <span className={styles.headlineBrand}>
              <span className={styles.headlineBrandName}>{heroContent.headlineArBrandName}</span>
              <span className={styles.headlineBrandSuffix}>{heroContent.headlineArBrandSuffix}</span>
            </span>
          </motion.h1>

          <motion.p className={styles.description} variants={heroItemVariants}>
            {heroContent.description}
          </motion.p>

          <motion.div className={styles.actions} variants={heroItemVariants}>
            <Button onClick={() => scrollTo('contact')}>
              {heroContent.primaryBtn}
              <HiArrowLeft />
            </Button>
            <Button variant="secondary" onClick={() => scrollTo('contact')}>
              {heroContent.secondaryBtn}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span />
      </motion.div>
    </section>
  );
};

export default Hero;
