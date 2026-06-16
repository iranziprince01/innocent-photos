import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service"),
  eventDate: z.string().min(1, "Please select a date"),
  location: z.string().min(2, "Please enter a location"),
  message: z.string().min(10, "Please share a few details about your session"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
