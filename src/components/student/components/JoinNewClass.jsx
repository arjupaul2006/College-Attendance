import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const JoinNewClass = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Animate only once, when 20% visible
    >
      <div className="flex items-center mb-4">
        <FaPlus className="text-slate-900 mr-3" size={24} />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Join New Classroom
          </h3>
          <p className="text-sm text-slate-600">
            Enter the join code provided by your instructor
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="joinCode"
            className="text-sm font-medium text-slate-600 mb-1"
          >
            Classroom Join Code
          </label>
          <input
            id="joinCode"
            type="text"
            placeholder="Enter 6-digit code (e.g., ABC123)"
            className="w-full rounded-lg border border-slate-300 p-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-start text-slate-500 text-sm mt-4">
          <IoIosInformationCircleOutline className="mr-2 mt-1" size={16} />
          <p>Join codes are case-insensitive and provided by your instructor</p>
        </div>

        <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 hover:scale-90 duration-800">
          <FaPlus size={20} />
          <span>Join Classroom</span>
        </button>
      </div>
    </motion.div>
  );
};

export default JoinNewClass;
