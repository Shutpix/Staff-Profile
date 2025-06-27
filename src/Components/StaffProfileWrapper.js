import { useState } from "react";
import StaffForm from "./StaffForm";
import RelatedInformationForm from "./RelatedInformationForm";

export default function StaffProfileWrapper({ onClose }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState(null);
  const [relatedData, setRelatedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleProfileSubmit = (data) => {
    setProfileData(data);
    setActiveTab("related");
  };

  const handleRelatedSubmit = (data) => {
    setRelatedData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Staff Profile Create</h2>

      {!isSubmitted && (
        <>
          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 font-medium border-b-2 transition-colors duration-300 ${
                activeTab === "profile"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-600"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("related")}
              className={`ml-4 px-4 py-2 font-medium border-b-2 transition-colors duration-300 ${
                activeTab === "related"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-600"
              }`}
            >
              Related Information
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "profile" && (
              <StaffForm onSubmit={handleProfileSubmit} onClose={onClose} />
            )}
            {activeTab === "related" && (
              <RelatedInformationForm
                onSubmit={handleRelatedSubmit}
                onClose={onClose}
              />
            )}
          </div>
        </>
      )}

      {/* Display Submitted Data */}
      {isSubmitted && (
        <div className="mt-8 space-y-6">
          <h3 className="text-lg font-semibold border-b pb-2">Submitted Data</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {profileData &&
              Object.entries(profileData).map(([key, value]) => (
                <div key={key}>
                  <strong className="capitalize">{key}:</strong>{" "}
                  {typeof value === "object" && value?.name
                    ? value.name
                    : value?.toString()}
                </div>
              ))}
            {relatedData &&
              Object.entries(relatedData).map(([key, value]) => (
                <div key={key}>
                  <strong className="capitalize">{key}:</strong>{" "}
                  {value?.toString()}
                </div>
              ))}
          </div>

          <button
            onClick={onClose}
            className="mt-6 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
