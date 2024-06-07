import { z } from "zod"

export const signupValidation = z.object({
    username: z.string(),
    password: z.string().min(8),
    name: z.string()
})

export const signinValidation = z.object({
    username: z.string(),
    password: z.string().min(8)
})

export type SignupValidation = z.infer<typeof signupValidation>
export type SigninValidation = z.infer<typeof signinValidation>