"use client";
import React, { useState } from 'react';

interface InternshipPlacement {
  studentName: string;
  studentId: string;
  department: string;
  internshipInstitution: string;
  internshipPosition: string;
  startDate: string;
  endDate: string;
}

const ConsolidatedReportForm: React.FC = () => {
  const [placements, setPlacements] = useState<InternshipPlacement[]>([
    {
      studentName: '',
      studentId: '',
      department: '',
      internshipInstitution: '',
      internshipPosition: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const updatedPlacements = [...placements];
    updatedPlacements[index] = { ...updatedPlacements[index], [name]: value };
    setPlacements(updatedPlacements);
  };

  const handleAddRow = () => {
    setPlacements([
      ...placements,
      {
        studentName: '',
        studentId: '',
        department: '',
        internshipInstitution: '',
        internshipPosition: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const handleRemoveRow = (index: number) => {
    const updatedPlacements = placements.filter((_, i) => i !== index);
    setPlacements(updatedPlacements);
  };

  const handleSubmit = () => {
    // Logic to handle submitting the data
    console.log('Submitting placements:', placements);
    // Here you would normally send the data to a server or handle it as needed
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-lg max-w-full overflow-x-auto">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Enter Consolidated Report</h2>
        <div className="flex flex-col gap-4">
          {/* Table for entering placements */}
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
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {placements.map((placement, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        name="studentName"
                        value={placement.studentName}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        name="studentId"
                        value={placement.studentId}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        name="department"
                        value={placement.department}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        name="internshipInstitution"
                        value={placement.internshipInstitution}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        name="internshipPosition"
                        value={placement.internshipPosition}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="date"
                        name="startDate"
                        value={placement.startDate}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="date"
                        name="endDate"
                        value={placement.endDate}
                        onChange={(e) => handleInputChange(e, index)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleRemoveRow(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddRow}
              className="py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
            >
              Add Row
            </button>

            <button
              onClick={handleSubmit}
              className="py-2 px-4 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700"
            >
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsolidatedReportForm;
