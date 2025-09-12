import React from "react";
import { motion } from "framer-motion";

const UpcomingSession = ({ session }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
      <div>
        <h4 className="font-semibold text-slate-800">{session.title}</h4>
        <p className="text-sm text-slate-500">{session.time}</p>
      </div>
    </div>
  );
};

export default UpcomingSession;
