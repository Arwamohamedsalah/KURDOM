import { motion } from 'framer-motion';
import { specializedServicesContent } from '../../../data/content';
import { cardReveal, staggerContainer, viewportOnce } from '../../../utils/animations';
import styles from './SpecializedServices.module.scss';

const SpecializedServices = () => {
  const { title, background, items } = specializedServicesContent;

  return (
    <section className={styles.section} aria-labelledby="specialized-services-title">
      <div className={styles.background} aria-hidden="true">
        <img src={background} alt="" loading="lazy" />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <h2 id="specialized-services-title" className={styles.title}>
          {title}
        </h2>

        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.12, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map((item) => (
            <motion.article
              key={item.title}
              className={styles.card}
              variants={cardReveal}
            >
              <div className={styles.cardHeader}>
                <h3>{item.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecializedServices;
