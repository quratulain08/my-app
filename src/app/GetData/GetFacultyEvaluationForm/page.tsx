"use client";
import React from 'react';
import { useState } from 'react';

// Dummy data for evaluations
const evaluations = [
  { id: '1', studentName: 'Alice Johnson', studentId: 'S123' },
  { id: '2', studentName: 'Bob Smith', studentId: 'S124' },
  { id: '3', studentName: 'Charlie Brown', studentId: 'S125' },
];

// Dummy data for evaluation details
const evaluationDetails: Record<string, {
  studentName: string;
  studentId: string;
  tasksPerformed: number;
  learningExperience: number;
  overcomingChallenges: number;
  comments: string;
}> = {
  '1': {
    studentName: 'Alice Johnson',
    studentId: 'S123',
    tasksPerformed: 4,
    learningExperience: 5,
    overcomingChallenges: 3,
    comments: 'Excellent performance overall.',
  },
  '2': {
    studentName: 'Bob Smith',
    studentId: 'S124',
    tasksPerformed: 3,
    learningExperience: 4,
    overcomingChallenges: 2,
    comments: 'Good effort but needs improvement.',
  },
  '3': {
    studentName: 'Charlie Brown',
    studentId: 'S125',
    tasksPerformed: 5,
    learningExperience: 5,
    overcomingChallenges: 4,
    comments: 'Outstanding performance in all areas.',
  },
};

const EvaluationPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        {!selectedId ? (
          <>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Evaluations List</h2>
            <div className="flex flex-col gap-4">
              {evaluations.map((evaluation) => (
                <div
                  key={evaluation.id}
                  className="p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => handleClick(evaluation.id)}
                >
                  <h3 className="text-lg font-semibold">{evaluation.studentName}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Evaluation Details</h2>
            <div className="flex flex-col gap-4">
              {/* Display evaluation information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Student Name</h3>
                  <p>{evaluationDetails[selectedId].studentName}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Student ID</h3>
                  <p>{evaluationDetails[selectedId].studentId}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Tasks Performed</h3>
                  <p>{evaluationDetails[selectedId].tasksPerformed}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Learning Experience</h3>
                  <p>{evaluationDetails[selectedId].learningExperience}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Overcoming Challenges</h3>
                  <p>{evaluationDetails[selectedId].overcomingChallenges}</p>
                </div>
              </div>

              {/* Display comments */}
              <div>
                <h3 className="text-lg font-semibold">Comments</h3>
                <p>{evaluationDetails[selectedId].comments}</p>
              </div>

              {/* Back Button */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleClose}
                  className="py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Back to List
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EvaluationPage;
