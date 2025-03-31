import { createPortal } from "react-dom";
import { motion } from "motion/react";

export default function Modal({ title, children, onClose }) {
   return createPortal(
      <>
         <div className="backdrop" onClick={onClose} />
         <motion.dialog
            open
            className="modal"
            variants={{
               open: { opacity: 1, scale: 1, y: 0 },
               closed: { opacity: 0, scale: 0.1, y: 800 },
            }}
            initial="closed"
            animate="open"
            exit={{ opacity: 0, scale: 0 }}
         >
            <h2>{title}</h2>
            {children}
         </motion.dialog>
      </>,
      document.getElementById("modal")
   );
}
