import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ title, body, id }) => {
  return (
    <AnimatePresence>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={id}
        className=' xxxs:bg-sky-500 xxs:bg-gray-900 xs:bg-yellow-400 sm:bg-slate-400 w-full h-[200px] rounded-lg p-8 md:bg-red-400 lg:bg-green-500 xl:bg-indigo-500 2xl:bg-pink-600'
      >
        <p>{title}</p>
        <p>{body}</p>
      </motion.li>
    </AnimatePresence>
  );
};

export default Card;
