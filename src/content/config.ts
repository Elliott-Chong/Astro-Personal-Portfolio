// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({ alt: z.string().optional(), src: z.string().optional() }),
    timestamp: z.date(),
    description: z.string(),
    codeLink: z.string().optional(),
    demoLink: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  project: projectCollection,
};
