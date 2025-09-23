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
            Um vale-psicólogo...
          </motion.span>
        </div>

        <motion.div
          className="grow mb-4"
          style={{
            // backgroundImage: 'url(/pato.avif)',
            // backgroundSize: 'contain',
            // backgroundPosition: 'center center',
            // backgroundRepeat: 'no-repeat',
          }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <div
            className="h-full bg-white flex justify-center items-center text-center border-8
              border-dashed border-neutral-200 p-2"
          >
            <span className="text-neutral-300 text-2xl">
              (Vale-psicólogo / 1 ano)
            </span>
          </div>
        </motion.div>

        <motion.div
          className="text-3xl text-center pb-4 font-main"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <span className="underline">Um ano de psicólogo grátis</span> com os profissionais que você quiser, nos preços que você quiser e na frequência que você quiser!
        </motion.div>
        <motion.div
          className="text-xl text-center pb-10 font-main"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 3.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Porque você merece apenas <span className="underline">do bom e do melhor</span>. Sempre.
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
