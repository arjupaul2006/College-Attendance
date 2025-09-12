import React from "react";
import { FaUser } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

const QuickStart = () => {

    const StatItem = ({ icon, label, value, color }) => (
    <div className="flex justify-between items-center text-slate-700">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-full bg-slate-100 ${color}`}>{icon}</div>
        <span className="font-medium text-slate-600">{label}</span>
      </div>
      <span className="font-semibold text-right">{value}</span>
    </div>
  );

  return (
    <motion.div
     className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 h-fit"
     initial = {{opacity: 0, x: 50}}
     whileInView = {{opacity: 1, x: 0}}
     transition={{duration: 1}}
     viewport={{ once: true, amount: 0.2 }} // Animate only once, when 20% visible
     >
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Stats</h3>
      <div className="space-y-4">
        <StatItem
          icon={<FaUser size={20} />}
          label="Total Classrooms"
          value="3"
          color="text-slate-800"
        />
        <StatItem
          icon={<FaAward size={20} />}
          label="Avg. Attendance"
          value="92%"
          color="text-emerald-500"
        />
        <StatItem
          icon={<MdOutlineTimer size={20} />}
          label="Active Sessions"
          value="2"
          color="text-blue-500"
        />
        <StatItem
          icon={<SlCalender size={20} />}
          label="This Week"
          value="3 submissions"
          color="text-slate-500"
        />
      </div>
    </motion.div>
  );
};

export default QuickStart;
