import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page7() {
  return (
    <div
      className="page relative bg-gradient-to-br from-sky-600 to-blue-700 flex flex-col
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
            Uma miniatura do R2-D2
          </motion.span>
        </div>

        <motion.div
          className="grow relative mb-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/r2d2.png"
              className="max-h-full"
            />
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
