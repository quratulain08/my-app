"use client";
import React, { useState } from 'react';
import { HiDocumentReport, HiViewList, HiChartBar, HiCog, HiLogout, HiMenu, HiX, HiEye } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';

const DICSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  const router = useRouter();

  const handleLogout = () => {
    console.log('Logging out...');
    router.push('/');
  };

  const handleNavigation = (path: string) => {
    setShowWelcomeMessage(false);
    router.push(path);
  };

  return (
    <Layout>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="flex flex-col items-start mt-12 mb-6"> {/* Adjusted margin-top */}
            <div className="text-2xl font-bold text-white">Departmental Internship Coordinator</div>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavigation('/GetData/GetProjectIntentionByFaculty')} // Navigate to the page
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiDocumentReport className="mr-3 text-xl" />
                <span>Intention Forms by Faculty</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/GetData/GetPostedInternship')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiViewList className="mr-3 text-xl" />
                <span>Available Internships</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/GetData/GetStudentInternshipApproval')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiChartBar className="mr-3 text-xl" />
                <span>Share Consolidated Report</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/OverallProgressConsolidatedReport')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiChartBar className="mr-3 text-xl" />
                <span>Overall Progress Consolidated Report</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/EnterGrades')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiCog className="mr-3 text-xl" />
                <span>Enter Grades</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/GetData/GetFacultyEvaluationForm')} // Navigate to the Faculty Supervisor Evaluation Form
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiEye className="mr-3 text-xl" />
                <span>View Faculty Supervisor Evaluation Form</span>
              </button>
            </li>
            {/* Logout Button */}
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiLogout className="mr-3 text-xl" />
                <span>Logout</span>
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
                <h1 className="font-serif">Welcome to the Departmental Internship Coordinator Portal</h1>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            </div>
          )}
          {/* Other content */}
        </div>
      </div>
    </Layout>
  );
};

export default DICSidebar;
