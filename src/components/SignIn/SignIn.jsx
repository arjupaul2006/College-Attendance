import React from "react";
import background from "../../assets/background.mp4";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div>
        <video
          className="absolute top-0 left-0 w-full h-full object-fill"
          src={background}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[100vh] text-center text-white px-4">
        {/* Heading animation */}
        <motion.h1
          className="text-5xl font-bold mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SIGN IN
        </motion.h1>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {/* Button animation */}
          <motion.button
            className="bg-red-600 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:bg-red-800 transition hover:scale-75 hover:duration-700"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Link to="/signin/signinAsStudent">Sign In as Student</Link>
          </motion.button>

          <motion.button
            className="bg-blue-600 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:bg-blue-800 transition hover:scale-75 hover:duration-700"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Link to="/signin/signinAsTeacher">Sign In as Teacher</Link>
          </motion.button>

          <motion.button
            className="bg-green-600 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:bg-green-800 transition hover:scale-75 hover:duration-700"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Link to="/signin/signinAsAdmintrator">Sign In as Administrator</Link>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
