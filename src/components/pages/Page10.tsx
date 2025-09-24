import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

export default function Page10() {
  return (
    <div
      className="page relative bg-gradient-to-br from-yellow-600 to-amber-600 flex flex-col
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
            E um gift card da Amazon
          </motion.span>
        </div>

        <motion.div
          className="grow mb-4"
          style={{
            backgroundImage: 'url(/amazon.jpg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.80, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />

        <motion.div
          className="text-center text-3xl pb-10"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.50, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          pra você escolher um livro bem legal!
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
