import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import SectionHeader from '../../ui/SectionHeader';
import { testimonials } from '../../../data/content';
import { staggerContainer, fadeInUp, viewportOnce } from '../../../utils/animations';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Testimonials"
          title="آراء عملائنا"
          subtitle="ثقة عملائنا هي أكبر دليل على جودة خدماتنا"
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.id}
              className={styles.card}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <FaQuoteRight className={styles.quoteIcon} />

              <div className={styles.rating}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className={styles.text}>{item.text}</p>

              <footer className={styles.author}>
                <img src={item.image} alt={item.name} />
                <div>
                  <cite className={styles.name}>{item.name}</cite>
                  <span className={styles.role}>{item.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
