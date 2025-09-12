import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const CameraCapture = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [image, setImage] = useState(null);

  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    console.log('Screenshot: ', screenshot)
    setImage(screenshot);
    console.log('Image: ', image)
    setIsCameraOpen(false); // Close camera after capture (optional)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isCameraOpen && !image && (
        <button
          onClick={() => setIsCameraOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Take a Selfie
        </button>
      )}

      {isCameraOpen && (
        <div className="flex flex-col items-center space-y-4">
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
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            Capture
          </button>
        </div>
      )}

      {image && (
        <div className="flex flex-col items-center space-y-4 mt-6">
          <img src={image} alt="selfie" className="rounded-xl shadow-lg" />
          <button
            onClick={() => setImage(null)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Retake
          </button>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
