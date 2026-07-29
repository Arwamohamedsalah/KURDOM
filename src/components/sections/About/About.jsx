import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import AnimatedCounter from '../../ui/AnimatedCounter';
import ParallaxImage from '../../ui/ParallaxImage';
import ScrollReveal from '../../ui/ScrollReveal';
import { aboutContent } from '../../../data/content';
import { staggerContainer, scaleFadeIn, viewportOnce } from '../../../utils/animations';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal direction="right">
            <ParallaxImage
              src={aboutContent.image}
              alt="Real estate consultation"
              badge="خبرة +15 سنة"
            />
          </ScrollReveal>

          <div className={styles.textSide}>
            <SectionHeader
              label={aboutContent.label}
              title={aboutContent.title}
              align="start"
            />
            <ScrollReveal delay={0.15}>
              <p className={styles.description}>{aboutContent.description}</p>
            </ScrollReveal>

            <motion.div
              className={styles.stats}
              variants={staggerContainer(0.08, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {aboutContent.stats.map((stat) => (
                <motion.div key={stat.label} className={styles.stat} variants={scaleFadeIn}>
                  <span className={styles.statValue}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
