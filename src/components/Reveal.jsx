import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-reveal wrapper. Replaces the original IntersectionObserver +
 * `.reveal`/`.show` CSS classes with framer-motion's whileInView, which
 * gives the same "fade up into place" effect with springier, more fluid
 * easing — this is the bulk of the "improved feel" from the React move.
 */
export default function Reveal({ as: Component = 'div', delay = 0, className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
