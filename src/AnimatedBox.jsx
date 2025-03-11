import { motion } from "framer-motion";

const AnimatedBox = ({
  number,
  bgColorClass,
  initialPosition,
  finalPosition,
  showInStage,
  currentStage,
  isRight,
}) => {
  if (showInStage > currentStage) return null;

  return (
    <motion.div
      className={`absolute w-1/2 h-1/4 ${bgColorClass} flex items-center justify-center text-white ${
        isRight ? "right-0" : "left-0"
      }`}
      initial={initialPosition}
      animate={{
        x: initialPosition.x ? 0 : undefined,
        y: initialPosition.y ? 0 : undefined,
        top: currentStage === 1 ? finalPosition.top : initialPosition.top,
      }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {number}
    </motion.div>
  );
};

export default AnimatedBox;
