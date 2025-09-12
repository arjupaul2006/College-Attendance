import React from "react";
import { IoClose } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { useRef, useState } from "react";
import Webcam from "react-webcam";

const AttendanceModel = ({ onClose }) => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [image, setImage] = useState(null);

  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    console.log("Screenshot: ", screenshot);
    setImage(screenshot);
    console.log("Image: ", image);
    setIsCameraOpen(false); // Close camera after capture (optional)
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 p-4">
      {!isCameraOpen && !image && (
        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md h-[90%] overflow-scroll">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Submit Attendance
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <IoClose size={24} />
            </button>
          </div>
          <div className="mb-6 space-y-4">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <FaBookOpen size={16} className="text-slate-400" />
              <span>Advanced Mathematics • Identity Verification</span>
            </div>
            <div className="bg-slate-200 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
              <FaCamera size={36} />
            </div>
            <h4 className="text-lg font-semibold text-slate-800">
              Take a Selfie
            </h4>
            <p className="text-sm text-slate-500">
              We'll verify your identity against your profile photo
            </p>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6">
              <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                <FaCamera size={36} />
              </div>
              <p className="text-sm text-slate-500">
                Position your face in the center and ensure good lighting
              </p>
              <button
                className="w-full bg-blue-600 text-white font-semibold py-3 mt-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                onClick={() => setIsCameraOpen(true)}
              >
                <FaCamera size={20} />
                <span>Take Selfie</span>
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Next
            </button>
          </div>
        </div>
      )}

      {isCameraOpen && (
        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md h-[90%] overflow-scroll">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Submit Attendance
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <IoClose size={24} />
            </button>
          </div>
          <div className="mb-6 space-y-4">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <FaBookOpen size={16} className="text-slate-400" />
              <span>Advanced Mathematics • Identity Verification</span>
            </div>
            <div className="bg-slate-200 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
              <FaCamera size={36} />
            </div>
            <h4 className="text-lg font-semibold text-slate-800">
              Take a Selfie
            </h4>
            <p className="text-sm text-slate-500">
              We'll verify your identity against your profile photo
            </p>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6">
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="rounded-xl shadow-lg"
                videoConstraints={{
                  facingMode: "user", // front camera on mobile
                }}
              />
              <button
                onClick={capture}
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition mt-4"
              >
                Capture
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Next
            </button>
          </div>
        </div>
      )}

      {image && (
        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md h-[90%] overflow-scroll">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Submit Attendance
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <IoClose size={24} />
            </button>
          </div>
          <div className="mb-6 space-y-4">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <FaBookOpen size={16} className="text-slate-400" />
              <span>Advanced Mathematics • Identity Verification</span>
            </div>
            <div className="bg-slate-200 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
              <FaCamera size={36} />
            </div>
            <h4 className="text-lg font-semibold text-slate-800">
              Take a Selfie
            </h4>
            <p className="text-sm text-slate-500">
              We'll verify your identity against your profile photo
            </p>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6">
              <img src={image} alt="selfie" className="rounded-xl shadow-lg" />
              <button
                onClick={() => setImage(null)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition mt-4"
              >
                Retake
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceModel;
