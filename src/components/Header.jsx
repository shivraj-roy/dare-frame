import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import NewChallenge from "./NewChallenge.jsx";

export default function Header() {
   const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

   function handleStartAddNewChallenge() {
      setIsCreatingNewChallenge(true);
   }

   function handleDone() {
      setIsCreatingNewChallenge(false);
   }

   return (
      <>
         <AnimatePresence>
            {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
         </AnimatePresence>

         <header id="main-header">
            <h1>Your Challenges</h1>
            <motion.button
               onClick={handleStartAddNewChallenge}
               className="button"
               whileHover={{ backgroundColor: "#8b11f0", scale: 1.03 }}
            >
               Add Challenge
            </motion.button>
         </header>
      </>
   );
}
