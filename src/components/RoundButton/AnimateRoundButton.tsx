import React from "react";

import styles from "./RoundButton.module.scss";
import { motion } from "framer-motion";

interface AnimateRoundButtonProps {
  children: React.ReactElement;
}

const AnimateRoundButton: React.FC<AnimateRoundButtonProps> = ({ children }) => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
};

export { AnimateRoundButton };
