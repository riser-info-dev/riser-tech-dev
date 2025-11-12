import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  contact: z.string().min(10, 'Contact number must be at least 10 characters').max(20, 'Contact number is too long'),
  service: z.string().optional(),
  message: z.string().max(1000, 'Message is too long').optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

