import { motion } from "motion/react";

export default function Badge({ caption }) {
   return (
      <motion.span
         animate={{ scale: [1, 1.3, 0.5, 1] }}
         transition={{ duration: 0.3 }}
         className="badge"
      >
         {caption}
      </motion.span>
   );
}
