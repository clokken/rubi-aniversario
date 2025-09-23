import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page9() {
  return (
    <div
      className="page relative bg-gradient-to-br from-cyan-600 to-indigo-500 flex flex-col
        font-gift"
    >
      <div className="wrapper flex flex-col">
        <div className="flex flex-col justify-center py-4">
          <motion.span
            className="text-4xl"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            Um vale-terapia...
          </motion.span>
        </div>

        <motion.div
          className="grow mb-4 flex justify-center items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <img
            src="/vale-terapia.jpg"
            className="w-auto h-auto max-w-full max-h-full"
          />
        </motion.div>

        <motion.div
          className="text-3xl text-center pb-4 font-main"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <span className="underline">Um ano de psicólogo grátis</span> com os profissionais que você quiser, com os preços que você quiser e com a frequência que você quiser!
        </motion.div>
        <motion.div
          className="text-xl text-center pb-10 font-main"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Porque você merece apenas do bom e do melhor.
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
