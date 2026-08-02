import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import SectionHeader from '../../ui/SectionHeader';
import { faqItems } from '../../../data/content';
import { staggerContainer, scaleFadeIn, springSoft, viewportOnce } from '../../../utils/animations';
import styles from './FAQ.module.scss';

const PHONE_PATTERN = /(\+966[\d\s]+)/g;
const PHONE_SEGMENT = /^\+966[\d\s]+$/;

const renderAnswer = (answer) =>
  answer.split(PHONE_PATTERN).map((part, index) =>
    PHONE_SEGMENT.test(part) ? (
      <span key={index} className="ltr" dir="ltr">
        {part}
      </span>
    ) : (
      part
    )
  );

const FAQItem = ({ item, isOpen, onToggle, index }) => {
  return (
    <motion.div
      className={`${styles.item} ${isOpen ? styles.open : ''}`}
      variants={scaleFadeIn}
    >
      <button className={styles.question} onClick={onToggle} aria-expanded={isOpen}>
        <span className={styles.qIndex} dir="ltr">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={styles.qText}>{item.question}</span>
        <motion.span
          className={styles.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={springSoft}
        >
          <HiChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.answerWrap}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.answer}>{renderAnswer(item.answer)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="FAQ"
          title="الأسئلة الشائعة"
          subtitle="إجابات على أكثر الأسئلة التي يطرحها عملاؤنا"
        />

        <motion.div
          className={styles.list}
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
