// pages/DisplayReport.tsx
import React from 'react';

// Dummy data to simulate the submitted report
const dummyData = [
  {
    studentName: 'John Doe',
    studentId: '123456',
    department: 'Computer Science',
    internshipInstitution: 'Tech Solutions Inc.',
    internshipPosition: 'Software Intern',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
  },
  {
    studentName: 'Jane Smith',
    studentId: '654321',
    department: 'Mechanical Engineering',
    internshipInstitution: 'Engineers Ltd.',
    internshipPosition: 'Mechanical Intern',
    startDate: '2024-06-15',
    endDate: '2024-09-15',
  },
];

const DisplayReport: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-lg max-w-full overflow-x-auto">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Consolidated Report</h2>
        <div className="flex flex-col gap-4">
          {/* Table for displaying placements */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Internship Institution</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Internship Position</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dummyData.map((placement, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap">{placement.studentName}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{placement.studentId}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{placement.department}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{placement.internshipInstitution}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{placement.internshipPosition}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{placement.startDate}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{placement.endDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayReport;
