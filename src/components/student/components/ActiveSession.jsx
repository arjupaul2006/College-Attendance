import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const ActiveSession = () => {
  const [showActiveSession, setShowActiveSession] = useState(true);

  if (!showActiveSession) {
    return null;
  }

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <IoIosInformationCircleOutline
            className="text-blue-600 mr-3 mt-1"
            size={20}
          />
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Active Session Available
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Physics Laboratory session is now active. Submit your attendance
              before 4:00 PM.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 hover:scale-105 hover:shadow-xl">
            Submit Now
          </button>
          <button
            onClick={() => setShowActiveSession(false)}
            className="ml-4 text-slate-400 hover:text-slate-600"
          >
            <IoClose size={16} />
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2">5 minutes ago</p>
    </motion.div>
  );
};

export default ActiveSession;
