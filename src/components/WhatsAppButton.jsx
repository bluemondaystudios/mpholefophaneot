import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27661342941?text=Hello%20Mpho%2C%20I%27d%20like%20to%20make%20an%20occupational%20therapy%20enquiry."
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-2xl ring-4 ring-cream-50 md:hidden"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8L9 8c.1.4 0 .8-.3 1.1L7.2 10.6a12 12 0 006.2 6.2l1.5-1.5c.3-.3.7-.4 1.1-.3l3.2.8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1C9.9 20 4 14.1 4 6.5V5z" />
      </svg>
    </motion.a>
  );
}
