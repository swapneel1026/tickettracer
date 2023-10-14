'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CustomError = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-full h-full bg-gradient-to-br from-pink-500 to-purple-500">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-40">
          <Image
            src="https://storyset.com/illustration/oops-404-error-with-a-broken-robot/cuate#0957FBFF&hide=&hide=complete"
            alt="Background"
            className="object-cover w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center p-6 bg-white rounded-lg shadow-md">
          {/* <img src="/error-image.png" alt="Error" className="w-24 h-24 mx-auto mb-4" /> */}
          <h1 className="text-3xl font-bold mb-2">Oops! Something went wrong.</h1>
          <p className="text-lg mb-4">We couldn't find what you were looking for.</p>
          <Link href="/"className="text-blue-500 underline cursor-pointer">Go back to the home page
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomError;
