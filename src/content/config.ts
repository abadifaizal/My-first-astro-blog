import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: {
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
  }
})

export const collection = {
  blog: blogCollection
}