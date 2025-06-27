import { z } from "zod";

// This schema validates the staff profile form
export const staffSchema = z.object({
  // Text fields that must not be empty
  staffCode: z.string().min(1, "Staff Code is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),

  // Email must be valid format like test@example.com
  email: z.string().email("Please enter a valid email address"),

  // Phone must be at least 10 characters
  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  // Dropdown for gender must match one of the allowed values
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),

  // Other dropdowns / required fields
  status: z.string().min(1, "Please select a status"),
  workplace: z.string().min(1, "Workplace is required"),
  jobPosition: z.string().min(1, "Job Position is required"),
  academicLevel: z.string().min(1, "Please select an academic level"),

  // Convert string to number and check if it's valid
  hourlyRate: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Hourly Rate must be a valid number",
    })
    .transform((val) => Number(val)),

  // Required birthday as string (from date input)
  birthday: z.string().min(1, "Please enter your birthday"),

  // More required fields
  religion: z.string().min(1, "Religion is required"),
  nation: z.string().min(1, "Nation is required"),
  maritalStatus: z.string().min(1, "Please select marital status"),

  // File validations
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
