import React from "react";

// Simple display component for label-value pairs
function Info({ label, value }) {
  return (
    <p>
      <span className="font-medium">{label}:</span> {value || "NA"}
    </p>
  );
}

export default function StaffProfile({ staff }) {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow p-6 grid grid-cols-3 gap-6">

        {/* LEFT SIDE - PROFILE CARD */}
        <div className="col-span-1 space-y-4">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full" />
            <h2 className="text-xl font-semibold mt-2">
              {staff.firstName} {staff.lastName}
            </h2>
            <div className="flex gap-2 text-blue-600 text-sm mt-1">
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Email</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-100 p-4 rounded space-y-2 text-sm">
            <Info label="Email" value={staff.email} />
            <Info label="Phone" value={staff.phone} />
            <Info label="University" value="Oxford University" />
            <Info label="Position" value="HR Associate" />
          </div>

          <p className="text-sm font-medium">Direct manager: 👤</p>
        </div>

        {/* RIGHT SIDE - GENERAL & RELATED INFORMATION */}
        <div className="col-span-2 space-y-6">

          {/* General Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">General Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Info label="Staff code" value={staff.staffCode} />
              <Info label="Gender" value={staff.gender} />
              <Info label="Birthday" value={staff.birthday} />
              <Info label="Phone" value={staff.phone} />
              <Info label="Workplace" value={staff.workplace} />
              <Info label="Status" value={staff.status} />
              <Info label="Job position" value={staff.jobPosition} />
              <Info label="Academic level" value={staff.academicLevel} />
              <Info label="Hourly Rate" value={`₹${staff.hourlyRate}`} />
              <Info label="Religion" value={staff.religion} />
              <Info label="Nation" value={staff.nation} />
              <Info label="Marital status" value={staff.maritalStatus} />
            </div>
          </div>

          {/* Related Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Related Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Info label="Citizen ID" value={staff.citizenId} />
              <Info label="Date of issue" value={staff.dateOfIssue} />
              <Info label="Place of birth" value={staff.placeOfBirth} />
              <Info label="Current address" value={staff.currentAddress} />
              <Info label="Bank account number" value={staff.bankAccountNumber} />
              <Info label="Bank name" value={staff.bankName} />
              <Info label="Bank branch" value={staff.bankBranch} />
              <Info label="Personal tax code" value={staff.taxCode} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
