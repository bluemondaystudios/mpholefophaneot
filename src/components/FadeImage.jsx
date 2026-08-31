import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/** Fades an image in once it has loaded, instead of popping in. */
export default function FadeImage({ className, onLoad, ...imgProps }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // Images already served from cache won't reliably re-fire onLoad — catch those.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <motion.img
      {...imgProps}
      ref={imgRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
