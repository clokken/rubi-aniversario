import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page3() {
  return (
    <div className="page relative bg-gradient-to-br from-green-700 to-emerald-600 flex flex-col">
      <div className="grow flex flex-col justify-center text-center space-y-4">
        <motion.span
          className="text-4xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Você é uma pessoa
        </motion.span>
        <motion.span
          className="text-5xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Muito querida e especial!
        </motion.span>
      </div>

      <ScrollIndicator />
    </div>
  );
}
