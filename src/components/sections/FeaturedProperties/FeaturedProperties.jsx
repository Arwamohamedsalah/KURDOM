import { motion } from 'framer-motion';
import { HiOutlineHome } from 'react-icons/hi';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import SectionHeader from '../../ui/SectionHeader';
import Button from '../../ui/Button';
import { featuredProperties } from '../../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../../utils/animations';
import styles from './FeaturedProperties.module.scss';

const FeaturedProperties = () => {
  return (
    <section id="properties" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Featured Properties"
          title="عقارات مميزة"
          subtitle="اكتشف مجموعة مختارة من أفضل الفرص العقارية في جدة"
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {featuredProperties.map((property) => (
            <motion.article
              key={property.id}
              className={styles.card}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.imageWrap}>
                <img src={property.image} alt={property.title} loading="lazy" />
                <span className={styles.typeBadge}>{property.type}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{property.title}</h3>

                <div className={styles.price}>
                  <span className={styles.amount}>{property.price}</span>
                  <span className={styles.currency}>{property.currency}</span>
                </div>

                <div className={styles.features}>
                  {property.beds && (
                    <span>
                      <FaBed /> {property.beds}
                    </span>
                  )}
                  <span>
                    <FaBath /> {property.baths}
                  </span>
                  <span>
                    <FaRulerCombined /> {property.area} م²
                  </span>
                </div>

                <Button variant="outline" size="sm" className={styles.btn}>
                  <HiOutlineHome />
                  عرض التفاصيل
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
