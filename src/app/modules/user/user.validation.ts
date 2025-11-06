import { authValidations } from '@/modules/auth/auth.validation';
import { z } from 'zod';

/** Validation Schema for Creating new User */
const creationSchema = authValidations.loginSchema
	.extend({
		firstName: z.string({ message: 'First name is required!' }).trim().min(1, 'First name cannot be empty!'),
		lastName: z.string({ message: 'Last name is required!' }).trim().min(1, 'Last name cannot be empty!'),
		phoneNumber: z.string().trim().optional(),
		profession: z.string().trim().optional(),
		profileImage: z.string().trim().optional(),
	});

/** User Validation Schema */
export const userValidations = { creationSchema };
