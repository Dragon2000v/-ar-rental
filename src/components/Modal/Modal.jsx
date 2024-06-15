import { useEffect } from 'react';
import s from './Modal.module.css';
import { motion } from 'framer-motion';

export const Modal = ({ children, onClose }) => {
  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={s.wrapper}
      onClick={handleBackDropClick}
    >
      {children}
    </motion.div>
  );
};
