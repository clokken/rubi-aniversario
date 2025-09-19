import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page8() {
  return (
    <div
      className="page relative bg-gradient-to-br from-red-600 to-rose-700 flex flex-col
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
            Um rubi natural autêntico
          </motion.span>
        </div>

        <motion.div
          className="grow mb-4"
          style={{
            backgroundImage: 'url(/rubi.jpg)',
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
            src="/rubi.jpg"
            alt=""
            className="max-w-full max-h-full border-2 border-white rounded"
            initial={{ opacity: 0, x: -80 }}
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
