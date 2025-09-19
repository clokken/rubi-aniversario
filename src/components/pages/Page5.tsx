import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page5() {
  return (
    <div className="page relative bg-gradient-to-br from-green-700 to-emerald-600 flex flex-col">
      <div className="grow flex flex-col justify-center text-center space-y-4">
        <motion.span
          className="text-3xl"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          O mundo é um lugar muito melhor
        </motion.span>
        <motion.span
          className="text-4xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          com você dentro dele!
        </motion.span>
      </div>

      <ScrollIndicator />
    </div>
  );
}
