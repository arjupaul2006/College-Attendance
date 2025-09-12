import React from "react";

const ContainerHeader = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
        Welcome back, Alex!
      </h1>
      <p className="text-sm md:text-base text-slate-600 mt-1">
        Manage your classroom attendance and track your progress
      </p>
    </div>
  );
};

export default ContainerHeader;
