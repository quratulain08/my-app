"use client";
import React, { useState } from 'react';
import { HiPlus, HiViewList, HiDocumentReport, HiEye, HiStar, HiDocument } from 'react-icons/hi';
import Link from 'next/link';
import ProjectIntentionForm from '../components/Forms/ProjectIntentionForm';

const Sidebar: React.FC = () => {
  const [showProjectForm, setShowProjectForm] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center mb-6">
          <div className="text-2xl font-bold text-white mb-6">Faculty Portal</div>
        </div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setShowProjectForm(true)}
              className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
            >
              <HiPlus className="mr-3 text-xl" />
              <span>Project Intention Form</span>
            </button>
          </li>
          <li>
            <Link href="/faculty/view-student-progress" legacyBehavior>
              <a className="flex items-center p-2 rounded hover:bg-blue-900">
                <HiDocumentReport className="mr-3 text-xl" />
                <span>View Student Progress Report</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faculty/view-student-activity-log" legacyBehavior>
              <a className="flex items-center p-2 rounded hover:bg-blue-900">
                <HiViewList className="mr-3 text-xl" />
                <span>View Student Activity Log</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faculty/view-student-final-report" legacyBehavior>
              <a className="flex items-center p-2 rounded hover:bg-blue-900">
                <HiDocument className="mr-3 text-xl" />
                <span>View Student Final Report</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faculty/view-site-supervisor-evaluation" legacyBehavior>
              <a className="flex items-center p-2 rounded hover:bg-blue-900">
                <HiEye className="mr-3 text-xl" />
                <span>View Site Supervisor Evaluation Form</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faculty/evaluate-students" legacyBehavior>
              <a className="flex items-center p-2 rounded hover:bg-blue-900">
                <HiStar className="mr-3 text-xl" />
                <span>Evaluate Students</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar Toggle Button (visible on small screens) */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-gray-200 p-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      {/* Main Content */}
      <div className={`flex-1 p-4 transition-transform ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {showProjectForm && (
          <div className="flex justify-center items-center h-full">
            <div className="p-4 w-full max-w-4xl">
              <ProjectIntentionForm />
            </div>
          </div>
        )}
        {/* Other content */}
      </div>
    </div>
  );
};

export default Sidebar;
