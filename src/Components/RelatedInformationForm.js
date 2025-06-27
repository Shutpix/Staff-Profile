import React from "react";
import { useForm } from "react-hook-form";

export default function RelatedInformationForm({ onClose, onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-white rounded shadow max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Related Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Domicile</label>
            <input {...register("domicile")} className="w-full border p-2 rounded" placeholder="Enter domicile" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Current Address</label>
            <input {...register("currentAddress")} className="w-full border p-2 rounded" placeholder="Enter current address" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Place of Birth</label>
            <input {...register("placeOfBirth")} className="w-full border p-2 rounded" placeholder="Enter place of birth" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Citizen ID</label>
            <input {...register("citizenId")} className="w-full border p-2 rounded" placeholder="Enter citizen ID" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Place of Issue</label>
            <input {...register("placeOfIssue")} className="w-full border p-2 rounded" placeholder="Enter place of issue" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Bank Account Number</label>
            <input {...register("bankAccountNumber")} className="w-full border p-2 rounded" placeholder="Enter bank account number" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Bank Name</label>
            <input {...register("bankName")} className="w-full border p-2 rounded" placeholder="Enter bank name" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">EPF Number</label>
            <input {...register("epfNo")} className="w-full border p-2 rounded" placeholder="Enter EPF number" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Facebook</label>
            <input {...register("facebook")} className="w-full border p-2 rounded" placeholder="Enter Facebook profile link" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Skype</label>
            <input {...register("skype")} className="w-full border p-2 rounded" placeholder="Enter Skype ID" />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Marital Status</label>
            <select {...register("maritalStatus")} className="w-full border p-2 rounded">
              <option value="">Select marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Nation</label>
            <input {...register("nation")} className="w-full border p-2 rounded" placeholder="Enter nation" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Religion</label>
            <input {...register("religion")} className="w-full border p-2 rounded" placeholder="Enter religion" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Date of Issue</label>
            <input type="date" {...register("dateOfIssue")} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Resident Status</label>
            <input {...register("resident")} className="w-full border p-2 rounded" placeholder="Enter resident status" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Bank Account Name</label>
            <input {...register("bankAccountName")} className="w-full border p-2 rounded" placeholder="Enter account holder name" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Personal Tax Code</label>
            <input {...register("personalTaxCode")} className="w-full border p-2 rounded" placeholder="Enter tax code" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Social Security Number</label>
            <input {...register("socialSecurityNo")} className="w-full border p-2 rounded" placeholder="Enter social security number" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">LinkedIn</label>
            <input {...register("linkedin")} className="w-full border p-2 rounded" placeholder="Enter LinkedIn profile link" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2 pt-6">
        <button
          type="button"
          onClick={onClose}
          className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          Close
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
}
