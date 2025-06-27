// src/Components/StaffProfileTabs.jsx
import { useState } from "react";
import StaffForm from "./StaffForm";
import RelatedInformationForm from "./RelatedInformationForm";

export default function StaffProfileTabs() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    setFormData(data);
  };

  const handleClose = () => {
    console.log("Form closed");
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Staff Profile Create</h2>

      {/* Tab Headers */}
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

      {/* Tab Contents */}
      <div>
        {activeTab === "profile" && (
          <StaffForm onSubmit={handleSubmit} onClose={handleClose} />
        )}
        {activeTab === "related" && (
          <RelatedInformationForm
            data={formData}
            onSubmit={handleSubmit}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
