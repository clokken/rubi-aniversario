import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page10() {
  return (
    <div
      className="page relative bg-gradient-to-br from-blue-600 to-cyan-600 flex flex-col
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
            E um gift card do PlayStation 5
          </motion.span>
        </div>

        <motion.div
          className="grow mb-4"
          style={{
            backgroundImage: 'url(/ps5.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />

        {/* <div className="grow flex flex-col">
          <motion.img
            src="/ps5.png"
            alt=""
            className="max-w-full max-h-full border-2 border-white rounded"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
        </div> */}
      </div>

      <ScrollIndicator />
    </div>
  );
}
