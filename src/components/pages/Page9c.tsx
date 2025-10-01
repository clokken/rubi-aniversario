import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page9c() {
  return (
    <div
      id="gift-airpods"
      className="page relative bg-gradient-to-br from-zinc-500 to-zinc-600 flex flex-col
        font-gift"
    >
      <div className="wrapper flex flex-col">
        <div className="flex flex-col justify-center py-4">
          <motion.span
            className="text-4xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            Um AirPods Pro 2...
          </motion.span>
        </div>

        <motion.div
          className="grow relative mb-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/airpods.avif"
              className="max-h-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="text-center text-3xl pb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <span className="font-main">pra ouvir música</span>
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
