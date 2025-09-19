import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import Confetti from 'react-confetti';
import ScrollIndicator from "../ScrollIndicator";

export default function Page1() {
  const { width, height } = useWindowSize();

  return (
    <div
      className="page relative bg-gradient-to-br from-amber-600 to-orange-700 flex flex-col
        font-starter"
    >
      <Confetti
        width={width}
        height={height}
      />
      <div className="wrapper flex flex-col justify-center text-6xl text-center space-y-2">
        <span>Feliz</span>
        <span>Aniversário</span>
        <span>✨</span>
      </div>
      <motion.div
        className="absolute top-0 left-0 text-5xl select-none pointer-events-none"
        style={{ padding: 15 }}
        animate={['initial']}
        variants={{
          initial: {
            y: [-10, 10],
            transition: {
              delay: 0.5,
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }
          },
        }}
      >
        🎉
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 text-5xl select-none pointer-events-none"
        style={{ padding: 15 }}
        animate={['initial']}
        variants={{
          initial: {
            y: [-10, 10],
            transition: {
              startTime: 0.5,
              delay: 0.5,
              duration: 1.1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }
          },
        }}
      >
        🎊
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 text-5xl select-none pointer-events-none"
        style={{ padding: 15 }}
        animate={['initial']}
        variants={{
          initial: {
            y: [-10, 10],
            transition: {
              startTime: 1.6,
              delay: 0.4,
              duration: 0.9,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }
          },
        }}
      >
        🎆
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 text-5xl select-none pointer-events-none"
        style={{ padding: 15 }}
        animate={['initial']}
        variants={{
          initial: {
            y: [-10, 10],
            transition: {
              startTime: 0.4,
              delay: 0.6,
              duration: 1.1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }
          },
        }}
      >
        🎇
      </motion.div>
      <ScrollIndicator />
    </div>
  );
}
