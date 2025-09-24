import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page9a() {
  return (
    <div
      id="gift-viagem"
      className="page relative bg-gradient-to-br from-teal-500 to-sky-600 flex flex-col
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
            Um vale-viagem...
          </motion.span>
        </div>

        <motion.div
          className="grow relative mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/viagem-all3.png"
              className="max-h-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="text-2xl text-center pb-4 font-main"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Uma viagem grátis para o país que você quiser da América-Latina com <span className="underline">tudo</span> pago e com direito a uma acompanhante.
        </motion.div>

        <motion.div
          className="text-lg text-center pb-10 font-main"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Leve uma amiga sua em que você confia, tipo a Kariny! (Foi mal não sei escrever o nome
          dela)
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
