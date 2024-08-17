"use client";
import React, { useState, FormEvent } from 'react';

const PostInternshipForm: React.FC = () => {
  const [hostInstitution, setHostInstitution] = useState<string>('');
  const [siteSupervisor, setSiteSupervisor] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [availableInternships, setAvailableInternships] = useState<string>('');
  const [internshipType, setInternshipType] = useState<'Onsite' | 'Oncampus'>('Onsite');
  const [joiningDate, setJoiningDate] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const internshipObj = {
      hostInstitution,
      siteSupervisor,
      description,
      availableInternships,
      internshipType,
      joiningDate,
      email,
    };
    console.log(internshipObj);

    // Alert for successful submission (mock functionality)
    alert('Internship Posted Successfully!');

    // Reset form fields
    setHostInstitution('');
    setSiteSupervisor('');
    setDescription('');
    setAvailableInternships('');
    setInternshipType('Onsite');
    setJoiningDate('');
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Post an Internship</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Host Institution */}
            <div>
              <label htmlFor="hostInstitution" className="block mb-2 text-base sm:text-lg font-medium">
                Host Institution
              </label>
              <input
                id="hostInstitution"
                type="text"
                value={hostInstitution}
                onChange={(e) => setHostInstitution(e.target.value)}
                placeholder="Enter Host Institution"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Site Supervisor */}
            <div>
              <label htmlFor="siteSupervisor" className="block mb-2 text-base sm:text-lg font-medium">
                Site Supervisor
              </label>
              <input
                id="siteSupervisor"
                type="text"
                value={siteSupervisor}
                onChange={(e) => setSiteSupervisor(e.target.value)}
                placeholder="Enter Site Supervisor"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

          

            {/* Available Internships */}
            <div>
              <label htmlFor="availableInternships" className="block mb-2 text-base sm:text-lg font-medium">
                Available Internships
              </label>
              <input
                id="availableInternships"
                type="text"
                value={availableInternships}
                onChange={(e) => setAvailableInternships(e.target.value)}
                placeholder="Enter Available Internships"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Internship Type */}
            <div>
              <label htmlFor="internshipType" className="block mb-2 text-base sm:text-lg font-medium">
                Internship Type
              </label>
              <select
                id="internshipType"
                value={internshipType}
                onChange={(e) => setInternshipType(e.target.value as 'Onsite' | 'Oncampus')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="Onsite">Onsite</option>
                <option value="Oncampus">Oncampus</option>
              </select>
            </div>

            {/* Joining Date */}
            <div>
              <label htmlFor="joiningDate" className="block mb-2 text-base sm:text-lg font-medium">
                Joining Date
              </label>
              <input
                id="joiningDate"
                type="date"
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Email of Host Institution */}
            <div>
              <label htmlFor="email" className="block mb-2 text-base sm:text-lg font-medium">
                Email of Host Institution
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email of Host Institution"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
              {/* Project/Internship Description */}
              <div>
              <label htmlFor="description" className="block mb-2 text-base sm:text-lg font-medium">
                Project/Internship Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a description of the project or internship..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-1/3 py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostInternshipForm;
