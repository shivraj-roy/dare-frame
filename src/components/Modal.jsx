import { createPortal } from "react-dom";
import { motion } from "motion/react";

export default function Modal({ title, children, onClose }) {
   return createPortal(
      <>
         <div className="backdrop" onClick={onClose} />
         <motion.dialog
            open
            className="modal"
            initial={{ opacity: 0, scale: 0.2, y: 600 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.1, y: 800 }}
         >
            <h2>{title}</h2>
            {children}
         </motion.dialog>
      </>,
      document.getElementById("modal")
   );
}
