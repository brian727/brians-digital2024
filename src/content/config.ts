
// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const clients = defineCollection({
    
    schema: z.object({
        clientName: z.string(),
        headline: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
        })
    });

const projects = defineCollection({

    schema: z.object({
		title: z.string(),
		description: z.string(),
		intro: z.string().optional(),
		thumbnail: z.string(),
		og_image: z.string().optional(),
		tag: z.array(z.string()).optional(),
      })
    });

const bylines = defineCollection({

    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
      })
});

const posts = defineCollection({
    
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        description: z.string(),
        date: z.date(),
       
      })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    clients,
    projects,
    bylines,
    posts,
};
  




// Example: A cheatsheet of many common Zod datatypes
// import { z, defineCollection } from 'astro:content';

// defineCollection({
//   schema: z.object({
//     isDraft: z.boolean(),
//     title: z.string(),
//     sortOrder: z.number(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }),
//     author: z.string().default('Anonymous'),
//     language: z.enum(['en', 'es']),
//     tags: z.array(z.string()),
//     // An optional frontmatter property. Very common!
//     footnote: z.string().optional(),
//     // In frontmatter, dates written without quotes around them are interpreted as Date objects
//     publishDate: z.date(),
//     // You can also transform a date string (e.g. "2022-07-08") to a Date object
//     // publishDate: z.string().transform((str) => new Date(str)),
//     // Advanced: Validate that the string is also an email
//     authorContact: z.string().email(),
//     // Advanced: Validate that the string is also a URL
//     canonicalURL: z.string().url(),
//   })
// })

// As your project grows, you are also free to reorganize your codebase and move logic out of the src/content/config.ts file. Defining your schemas separately can be useful for reusing schemas across multiple collections and sharing schemas with other parts of your project.

// 1. Import your utilities and schemas
// import { defineCollection } from 'astro:content';
// import { blogSchema, authorSchema } from '../schemas';

// 2. Define your collections
// const blogCollection = defineCollection({
//   type: 'content',
//   schema: blogSchema,
// });
// const authorCollection = defineCollection({
//   type: 'data',
//   schema: authorSchema,
// });

// 3. Export multiple collections to register them
// export const collections = {
//   'blog': blogCollection,
//   'authors': authorCollection,
// };

// Using third-party collection schemasSection titled Using third-party collection schemas
// You can import collection schemas from anywhere, including external npm packages. This can be useful when working with themes and libraries that provide their own collection schemas for you to use.
// import { blogSchema } from 'my-blog-theme';
// const blogCollection = defineCollection({ type: 'content', schema: blogSchema });

// // Export the blog collection, using an external schema from 'my-blog-theme'
// export const collections = {
//   'blog': blogCollection,
// };