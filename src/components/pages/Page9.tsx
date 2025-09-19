import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page9() {
  return (
    <div
      className="page relative bg-gradient-to-br from-amber-500 to-yellow-600 flex flex-col
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
            Um patinho de pelúcia
          </motion.span>
        </div>

        <motion.div
          className="grow mb-4"
          style={{
            backgroundImage: 'url(/pato.avif)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />

        {/* <div className="grow flex flex-col">
          <motion.img
            src="/pato.avif"
            alt=""
            className="max-w-full max-h-full border-2 border-white rounded"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
        </div> */}

        <motion.div
          className="text-center pb-10"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          (dessa vez do tamanho certo que eu queria ter comprado antes)
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
