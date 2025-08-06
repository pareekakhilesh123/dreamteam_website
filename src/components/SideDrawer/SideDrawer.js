// components/SideDrawer.js
import React from 'react';
import { motion } from 'framer-motion';

const SideDrawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="fixed top-0 right-0 w-[90%] sm:w-[400px] h-full bg-white z-50 shadow-lg p-4 overflow-auto rounded-l-2xl"
      >
        <button
          className="absolute top-4 right-4 text-sm bg-red-500 text-white px-3 py-1 rounded-full"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </motion.div>
    </>
  );
};

export default SideDrawer;
