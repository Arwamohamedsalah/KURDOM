import { motion } from 'framer-motion';
import { blurFadeInUp, slideInLeft, slideInRight, viewportOnce } from '../../../utils/animations';

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  variant = 'default',
}) => {
  const variants = {
    up: blurFadeInUp,
    down: {
      hidden: { opacity: 0, y: -40, filter: 'blur(8px)' },
      visible: {
        ...blurFadeInUp.visible,
        transition: { ...blurFadeInUp.visible.transition, delay },
      },
    },
    left: slideInLeft,
    right: slideInRight,
  };

  const selected = variants[direction] || blurFadeInUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: selected.hidden,
        visible: {
          ...selected.visible,
          transition: {
            ...selected.visible?.transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
