"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EvaluationPage: React.FC = () => {
  const [evaluations, setEvaluations] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [newEvaluation, setNewEvaluation] = useState({
    studentName: '',
    studentId: '',
    tasksPerformed: 0,
    learningExperience: 0,
    overcomingChallenges: 0,
    comments: '',
  });

  // Fetch evaluations from the API
  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const response = await axios.get('/api/evaluations');
        setEvaluations(response.data);
      } catch (error) {
        console.error('Error fetching evaluations:', error);
      }
    };

    fetchEvaluations();
  }, []);

  // Handle the selection of an evaluation
  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvaluation({ ...newEvaluation, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/evaluations', newEvaluation);
      // Fetch updated evaluations
      const response = await axios.get('/api/evaluations');
      setEvaluations(response.data);
      setNewEvaluation({
        studentName: '',
        studentId: '',
        tasksPerformed: 0,
        learningExperience: 0,
        overcomingChallenges: 0,
        comments: '',
      });
    } catch (error) {
      console.error('Error adding evaluation:', error);
    }
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
                  key={evaluation._id}
                  className="p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => handleClick(evaluation._id)}
                >
                  <h3 className="text-lg font-semibold">{evaluation.studentName}</h3>
                </div>
              ))}
            </div>

            {/* Form to add a new evaluation */}
            <h3 className="mt-8 text-lg font-semibold">Add New Evaluation</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                value={newEvaluation.studentName}
                onChange={handleInputChange}
                required
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="studentId"
                placeholder="Student ID"
                value={newEvaluation.studentId}
                onChange={handleInputChange}
                required
                className="p-2 border rounded"
              />
              <input
                type="number"
                name="tasksPerformed"
                placeholder="Tasks Performed (1-5)"
                value={newEvaluation.tasksPerformed}
                onChange={handleInputChange}
                required
                min={1}
                max={5}
                className="p-2 border rounded"
              />
              <input
                type="number"
                name="learningExperience"
                placeholder="Learning Experience (1-5)"
                value={newEvaluation.learningExperience}
                onChange={handleInputChange}
                required
                min={1}
                max={5}
                className="p-2 border rounded"
              />
              <input
                type="number"
                name="overcomingChallenges"
                placeholder="Overcoming Challenges (1-5)"
                value={newEvaluation.overcomingChallenges}
                onChange={handleInputChange}
                required
                min={1}
                max={5}
                className="p-2 border rounded"
              />
              <textarea
                name="comments"
                placeholder="Comments"
                value={newEvaluation.comments}
                onChange={handleInputChange}
                required
                className="p-2 border rounded"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Add Evaluation
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Evaluation Details</h2>
            <div className="flex flex-col">
              <h3>Student Name: {evaluations.find(e => e._id === selectedId)?.studentName}</h3>
              <h3>Tasks Performed: {evaluations.find(e => e._id === selectedId)?.tasksPerformed}</h3>
              <h3>Learning Experience: {evaluations.find(e => e._id === selectedId)?.learningExperience}</h3>
              <h3>Overcoming Challenges: {evaluations.find(e => e._id === selectedId)?.overcomingChallenges}</h3>
              <h3>Comments: {evaluations.find(e => e._id === selectedId)?.comments}</h3>
            </div>
            <button onClick={handleClose} className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md">
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EvaluationPage;
