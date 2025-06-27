import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { staffSchema } from "./validationSchema";
import { useState } from "react";

const defaultValues = {
  staffCode: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  birthday: "",
  workplace: "",
  status: "",
  jobPosition: "",
  academicLevel: "",
  hourlyRate: 0,
  religion: "",
  nation: "",
  maritalStatus: "",
  profilePicture: null,
  signature: null,
};

export default function StaffForm({ onSubmit, onClose }) {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(staffSchema),
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setValue(type, file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "profilePicture") setPreviewImage(reader.result);
        else if (type === "signature") setSignaturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6 p-6 bg-white rounded shadow max-w-5xl mx-auto"
    >
      {/* Profile Picture Upload */}
      <div className="flex items-center gap-4">
        <div>
          {previewImage ? (
            <img
              src={previewImage}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover border"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "profilePicture")}
            className="block w-full text-sm file:py-2 file:px-4 file:rounded file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "staffCode", label: "Staff Code" },
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone" },
          { name: "birthday", label: "Birthday", type: "date" },
          { name: "workplace", label: "Workplace" },
          { name: "jobPosition", label: "Job Position" },
          { name: "hourlyRate", label: "Hourly Rate", type: "number" },
          { name: "religion", label: "Religion" },
          { name: "nation", label: "Nation" },
        ].map(({ name, label, type = "text" }) => (
          <div key={name} className="flex flex-col space-y-1 w-full">
            <label className="text-[13px] font-medium text-gray-600">
              {label} <span className="text-red-500 pl-1">*</span>
            </label>
            <Controller
              name={name}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <input
                    {...field}
                    type={type}
                    placeholder={`Enter ${label}`}
                    className={`h-10 px-3 border rounded-md text-sm bg-white transition ${
                      error ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {error && <p className="text-xs text-red-600">{error.message}</p>}
                </>
              )}
            />
          </div>
        ))}

        {/* Gender Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select {...register("gender")}
            className="w-full border px-3 py-2 rounded">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>

        {/* Status Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select {...register("status")}
            className="w-full border px-3 py-2 rounded">
            <option value="">Select Status</option>
            <option value="Working">Working</option>
            <option value="Not Working">Not Working</option>
            <option value="Fresher">Fresher</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>

        {/* Academic Level Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Academic Level</label>
          <select {...register("academicLevel")}
            className="w-full border px-3 py-2 rounded">
            <option value="">Select Academic Level</option>
            <option value="High School">High School</option>
            <option value="Diploma">Diploma</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.academicLevel && <p className="text-red-500 text-sm mt-1">{errors.academicLevel.message}</p>}
        </div>

        {/* Marital Status Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
          <select {...register("maritalStatus")}
            className="w-full border px-3 py-2 rounded">
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          {errors.maritalStatus && <p className="text-red-500 text-sm mt-1">{errors.maritalStatus.message}</p>}
        </div>
      </div>

      {/* Signature Upload */}
      <div className="flex items-center gap-4">
        <div>
          {signaturePreview ? (
            <img
              src={signaturePreview}
              alt="Signature Preview"
              className="w-36 h-16 object-contain border"
            />
          ) : (
            <div className="w-36 h-16 bg-gray-200 flex items-center justify-center text-gray-500">
              No Signature
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Signature
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "signature")}
            className="block w-full text-sm file:py-2 file:px-4 file:rounded file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-6">
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Save
        </button>
        <button type="button" onClick={onClose} className="bg-black hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded">
          Close
        </button>
      </div>
    </form>
  );
}
