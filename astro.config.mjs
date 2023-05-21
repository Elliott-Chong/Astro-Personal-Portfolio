import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold text-white",
          h2: "text-2xl font-bold text-white",
          h3: "text-xl font-bold text-white",
          h4: "text-lg font-bold text-white",
          h5: "font-bold text-white",
          h6: "font-bold font-white",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          p: "mb-6 text-white",
          a: "underline underline-offset-2 hover:text-aqua-500 decoration-aqua-500",
          ul: "list-disc",
          strong: "text-white",
          blockquote: "border-l-4 border-aqua-500 pl-4 mb-6",
          "blockquote > p": "mb-0",
          code: "text-white bg-slate-900 text-aqua-500 rounded-lg p-2",
        },
      ],
    ],
  },
});
