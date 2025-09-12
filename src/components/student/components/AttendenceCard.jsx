import React from "react";
import { FaCamera } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { PiMonitorPlayBold } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import { FaClock } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";



const AttendenceCard = ({ attendance }) => {
  const statusColor =
    attendance.status === "Present" ? "text-emerald-500" : "text-orange-500";
  const verifiedIcons = {
    Selfie: <FaCamera size={16} />,
    Location: <FiMapPin size={16} />,
    Screenshot: <PiMonitorPlayBold size={16} />,
  };

  return (
    <motion.div
     className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
     initial = {{opacity: 0, y: 50}}
     whileInView = {{opacity: 1, y: 0}}
     transition={{duration: 1}}
     viewport={{ once: true, amount: 0.2 }} // Animate only once, when 20% visible
     >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {attendance.title}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Dr. Sarah Wilson • {attendance.date}
          </p>
        </div>
        <div
          className={`flex items-center font-semibold text-sm ${statusColor}`}
        >
          <LuCircleCheckBig size={16} className="mr-1" />
          {attendance.status}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-slate-600 text-sm">
          <FaClock size={16} />
          <span>Submitted at {attendance.timeSubmitted}</span>
          <span className="font-medium">• {attendance.classType}</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-600 text-sm">
          <LuCircleCheckBig size={16} className="text-blue-500" />
          <span>Verified:</span>
          {attendance.verified.map((method, index) => (
            <span
              key={index}
              className="flex items-center space-x-1 text-blue-600"
            >
              {verifiedIcons[method]}
              <span>{method}</span>
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2 text-slate-600 text-sm">
          <IoMdInformationCircleOutline size={16} className="text-slate-400" />
          <span className="font-medium">{attendance.message}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AttendenceCard;
