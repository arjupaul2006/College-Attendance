import React from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";


const ClassRoom = ({ classroom, onOpenModel }) => {
  

  return (
    <motion.div
     className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
     initial = {{opacity: 0, x: -50}}
     whileInView = {{opacity: 1, x: 0}}
     transition={{duration: 1}}
     viewport={{ once: true, amount: 0.2 }} // Animate only once, when 20% visible
     >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {classroom.title}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Instructor: {classroom.instructor}
          </p>
        </div>
        <div className="flex items-center text-emerald-500 font-semibold text-sm">
          <LuCircleCheckBig size={16} className="mr-1" />
          Present
        </div>
      </div>
      <div className="flex items-center space-x-4 text-slate-600 text-sm">
        <div className="flex items-center space-x-1">
          <SlCalender size={16} />
          <span>{classroom.schedule}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaUser size={16} />
          <span>{classroom.students} students</span>
        </div>
      </div>

      {classroom.isActive && (
        <div className="bg-blue-50 bg-opacity-75 rounded-xl p-4 mt-4 flex justify-between items-center border border-blue-200">
          <div>
            <p className="text-blue-600 font-semibold text-sm">
              Active Session
            </p>
            <p className="text-xs text-blue-500 mt-1">Started 2 hours ago</p>
          </div>
          <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center space-x-2" onClick={onOpenModel}>
            <FaRegClipboard size={16} />
            <span>Submit Attendance</span>
          </button>
        </div>
      )}

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200">
        <p className="text-sm text-slate-600 font-medium">
          Attendance Rate:{" "}
          <span className="font-bold">{classroom.attendanceRate}</span>
        </p>
        <button className="text-slate-500 text-sm hover:text-blue-600 transition-colors flex items-center space-x-1">
          <FaClock size={16} />
          <span>View History</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ClassRoom;
