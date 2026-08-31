import { motion } from 'framer-motion';

export default function ScrollProgress({ progress }) {
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-coral-500 to-navy"
      style={{ scaleX: progress }}
      transition={{ duration: 0.1, ease: 'linear' }}
    />
  );
}
