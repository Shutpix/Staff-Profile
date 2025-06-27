import { useState } from "react";
import StaffForm from "./StaffForm";
import RelatedInformationForm from "./RelatedInformationForm";
import StaffProfile from "./StaffProfile"; 

export default function ProfileFlow({ onClose }) {
  const [profileData, setProfileData] = useState(null);
  const [relatedData, setRelatedData] = useState(null);

  const handleProfileSubmit = (data) => {
    setProfileData(data);
  };

  const handleRelatedSubmit = (data) => {
    setRelatedData(data);
  };

  // If both forms are submitted, show the final profile
  if (profileData && relatedData) {
    const fullProfile = { ...profileData, ...relatedData };
    return (
      <div className="p-6 bg-white rounded shadow max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Submitted Profile</h2>
        <StaffProfile staff={fullProfile} />
        <button
          onClick={onClose}
          className="mt-6 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Staff Profile Create</h2>
      {!profileData ? (
        <StaffForm onSubmit={handleProfileSubmit} onClose={onClose} />
      ) : (
        <RelatedInformationForm onSubmit={handleRelatedSubmit} onClose={onClose} />
      )}
    </div>
  );
}
