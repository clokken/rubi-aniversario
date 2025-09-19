// import { DateTime } from "luxon";

import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page2() {
  /*const nascimento = DateTime.fromObject({
    day: 13,
    month: 10,
    year: 2005,
  });

  const idade = DateTime.now().diff(nascimento, "years").years | 0;*/

  return (
    <div
      className="page relative bg-gradient-to-br from-pink-700 to-rose-600 flex flex-col"
    >
      <div className="grow flex flex-col justify-center text-center space-y-4">
        <motion.span
          className="text-4xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Muitos parabéns
        </motion.span>
        <motion.span
          className="text-5xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Pelos 20 anos de vida!
        </motion.span>
      </div>

      <ScrollIndicator />
    </div>
  );
}
