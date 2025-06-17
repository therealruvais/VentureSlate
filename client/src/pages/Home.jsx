import React from "react";
import PDFViewer from "../Components/PDFViewer";

const Home = () => {
  return (
    <div className="  min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-10 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          TMT VENTURESLATE
        </h1>
        <PDFViewer />
      </div>
    </div>
  );
};

export default Home;
