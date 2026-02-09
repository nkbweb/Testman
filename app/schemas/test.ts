import z from "zod";

export const testSchema=z.object({
    title:z.string().min(3).max(30),
    content:z.string().min(30),
})