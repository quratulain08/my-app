"use client";
import React, { useState } from 'react';
import { HiPlus, HiViewList, HiDocumentReport, HiEye, HiMenu, HiX } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const AUPPlacementSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  const router = useRouter();

  const handleNavigation = (path: string) => {
    setShowWelcomeMessage(false);
    router.push(path);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center mb-6">
          <div className="text-2xl font-bold text-white mb-6">AU Placement Office</div>
        </div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleNavigation('/Forms/PostInternship')} // Navigate to the page for listing new internships
              className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
            >
              <HiPlus className="mr-3 text-xl" />
              <span>List New Internships</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/GetData/GetPostedInternship')} // Navigate to the page for viewing listed internships
              className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
            >
              <HiViewList className="mr-3 text-xl" />
              <span>View Listed Internships</span>
            </button> 
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/GetData/GetStudentInternshipApproval')} // Navigate to the page for viewing the consolidated report
              className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
            >
              <HiDocumentReport className="mr-3 text-xl" />
              <span>View Consolidated Report</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Sidebar Toggle Button (visible on small screens) */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-gray-200 p-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
      </button>

      {/* Main Content */}
      <div className={`flex-1 p-4 transition-transform ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {showWelcomeMessage && (
          <div className="flex justify-center items-center h-full">
            <div className="p-4 w-full max-w-4xl text-center text-xl text-[#112d60]">
              <h1 className="font-serif">Welcome to the AU Placement Office</h1>
              <p>Select an option from the sidebar to get started.</p>
              {/* Add any additional content or components here if needed */}
            </div>
          </div>
        )}
        {/* Other content */}
      </div>
    </div>
  );
};

export default AUPPlacementSidebar;
