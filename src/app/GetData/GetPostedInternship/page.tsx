"use client";
import React, { useEffect, useState } from 'react';

// Define the interface for the internship data
interface Internship {
  hostInstitution: string;
  siteSupervisor: string;
  projectDescription: string;
  availableInternships: string;
  internshipType: 'Onsite' | 'Oncampus';
  joiningDate: string;
  emailHostInstitution: string;
}

const InternshipList: React.FC = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch('/api/internships'); // Adjust the endpoint if needed
        if (!response.ok) {
          throw new Error('Failed to fetch internships');
        }
        const data = await response.json();
        setInternships(data);
      } catch (err: unknown) { // Specify the type as unknown
        if (err instanceof Error) { // Check if err is an instance of Error
          setError(err.message); // Safely access the message property
        } else {
          setError('An unknown error occurred'); // Handle unexpected error types
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-lg max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Available Internships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{internship.hostInstitution}</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>Site Supervisor:</strong> {internship.siteSupervisor}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Project Description:</strong> {internship.projectDescription}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Available Internships:</strong> {internship.availableInternships}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Internship Type:</strong> {internship.internshipType}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Joining Date:</strong> {internship.joiningDate}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Email of Host Institution:</strong> {internship.emailHostInstitution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipList;
