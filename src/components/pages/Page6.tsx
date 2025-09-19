import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page6() {
  return (
    <div className="page relative bg-gradient-to-br from-green-700 to-emerald-600 flex flex-col">
      <div className="grow flex flex-col justify-center text-center space-y-4">
        <motion.span
          className="text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          E eu gostaria de
        </motion.span>
        <motion.span
          className="text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          lhe presentear...
        </motion.span>
      </div>

      <ScrollIndicator />
    </div>
  );
}
