import { z } from "zod"

export const createBlog = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type CreateBlog = z.infer<typeof createBlog>
export type UpdateBlog = z.infer<typeof updateBlog>