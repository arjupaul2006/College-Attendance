import React, { useState } from "react";
import Header from "./components/Header";
import { MdOutlineTimer } from "react-icons/md";
import ContainerHeader from "./components/ContainerHeader";
import ActiveSession from "./components/ActiveSession";
import JoinNewClass from "./components/JoinNewClass";
import QuickStart from "./components/QuickStart";
import ClassRoom from "./components/ClassRoom";
import UpcomingSession from "./components/UpcomingSession";
import AttendenceCard from "./components/AttendenceCard";
import { motion } from "framer-motion";

const Studentdashboard = () => {
  const [user] = useState({
    id: "student_001",
    name: "Arju Paul",
    email: "arju@gmail.com",
    studentId: "STU2024001",
    profileComplete: true,
  });

  const handleLogout = () => {
    console.log("Log Out");
  };

  const [showActiveSession, setShowActiveSession] = useState(true);

  const classrooms = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Wilson",
      schedule: "Mon, Wed, Fri 10:00 AM",
      students: 45,
      attendanceRate: "92%",
      isActive: true,
    },
    {
      id: 2,
      title: "Computer Science Fundamentals",
      instructor: "Prof. Michael Chen",
      schedule: "Tue, Thu 2:00 PM",
      students: 38,
      attendanceRate: "88%",
      isActive: false,
    },
    {
      id: 3,
      title: "Data Structure and Algorithm",
      instructor: "Prof. Sudipta Basak",
      schedule: "Tue, Thu 2:00 PM",
      students: 40,
      attendanceRate: "70%",
      isActive: true,
    },
  ];

  const upcomingSessions = [
    { id: 1, title: "Advanced Mathematics", time: "Tomorrow at 10:00 AM" },
    { id: 2, title: "Computer Science", time: "Tuesday at 2:00 PM" },
  ];

  const recentAttendances = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Wilson",
      date: "December 6, 2024",
      timeSubmitted: "10:15 AM",
      classType: "Offline Class",
      status: "Present",
      verified: ["Selfie", "Location"],
      message: "Attendance verified successfully",
    },
    {
      id: 2,
      title: "Computer Science Fundamentals",
      instructor: "Prof. Michael Chen",
      date: "December 5, 2024",
      timeSubmitted: "2:05 PM",
      classType: "Online Class",
      status: "Present",
      verified: ["Selfie", "Screenshot"],
      message: "Attendance verified successfully",
    },
    {
      id: 3,
      title: "Physics Laboratory",
      instructor: "Dr. Emily Rodriguez",
      date: "December 4, 2024",
      timeSubmitted: "8:45 AM",
      classType: "Offline Class",
      status: "Late",
      verified: ["Location"],
      message: "Attendance was submitted late",
    },
  ];

  return (
    <div>
      <Header
        userRole="student"
        userName={user?.name}
        onLogout={handleLogout}
      />

      <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-[Inter]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <ContainerHeader />
          <div className="flex flex-col sm:flex-row md:space-x-8 mt-4 md:mt-0 space-y-4 sm:space-y-0 w-full sm:w-auto">
            <div className="flex items-center text-slate-800">
              <span className="text-2xl font-semibold mr-2">3</span>
              <div className="flex-1">
                <span className="font-semibold block">Classrooms</span>
              </div>
            </div>
            <div className="flex items-center text-slate-800">
              <span className="text-2xl font-semibold mr-2">92%</span>
              <div className="flex-1">
                <span className="font-semibold block text-emerald-500">
                  Attendance
                </span>
              </div>
            </div>
            <div className="flex items-center text-slate-800">
              <span className="text-2xl font-semibold mr-2">2</span>
              <div className="flex-1">
                <span className="font-semibold block text-blue-500">
                  Active Sessions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Active Session Card */}
            <ActiveSession />

            {/* Join New Classroom Card */}
            <JoinNewClass />
          </div>

          {/* Quick Stats Card */}
          <QuickStart />
        </div>

        {/* My Classrooms Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-xl font-bold text-slate-900">
                My Classrooms
              </h2>
              <div className="flex items-center text-orange-500 text-sm font-semibold">
                <MdOutlineTimer size={16} className="mr-1" />2 active sessions
              </div>
            </div>

            <div className="space-y-6">
              {classrooms.map((classroom) => (
                <ClassRoom key={classroom.id} classroom={classroom} />
              ))}
            </div>
          </div>

          {/* Upcoming Sessions Section */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 h-fit"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }} // Animate only once, when 20% visible
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Upcoming Sessions
            </h3>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <UpcomingSession key={session.id} session={session} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Attendence Section */}
        <div className="grid grid-cols-1 gap-6 mt-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Attendance Section */}
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-xl font-bold text-slate-900">
                Recent Attendance
              </h2>
              <p className="text-sm text-slate-600">
                Your latest attendance submissions
              </p>
            </div>
            <div className="space-y-6">
              {recentAttendances.map((attendance) => (
                <AttendenceCard key={attendance.id} attendance={attendance} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentdashboard;
