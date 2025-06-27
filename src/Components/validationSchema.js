import { z } from "zod";

// Schema for validating staff profile form
export const staffSchema = z.object({
  // Required text fields
  staffCode: z.string().min(1, "Staff Code is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),

  // Must be a valid email format
  email: z.string().email("Please enter a valid email address"),

  // Phone number must be at least 10 digits
  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  // Gender must be one of the allowed options
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),

  // Dropdown fields (must not be empty)
  status: z.string().min(1, "Please select a status"),
  workplace: z.string().min(1, "Workplace is required"),
  jobPosition: z.string().min(1, "Job Position is required"),
  academicLevel: z.string().min(1, "Please select an academic level"),
  maritalStatus: z.string().min(1, "Please select marital status"),

  // Hourly rate: must be a valid number >= 0
  hourlyRate: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Hourly Rate must be a valid number",
    })
    .transform((val) => Number(val)),

  // Birthday (as date string)
  birthday: z.string().min(1, "Please enter your birthday"),

  // Other required fields
  religion: z.string().min(1, "Religion is required"),
  nation: z.string().min(1, "Nation is required"),

  // File uploads (profile picture and signature)
  profilePicture: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Please upload a profile picture",
    }),

  signature: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Please upload a signature image",
    }),
});
