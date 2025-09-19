import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 select-none pointer-events-none
        flex justify-center text-center pb-3"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 0.5, y: 0 }}
      transition={{ duration: 0.75, delay: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={['initial']}
        variants={{
          initial: {
            y: [-10, 10],
            transition: {
              // delay: 0.4,
              duration: 0.75,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          style={{ transform: 'scale(2)' }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
