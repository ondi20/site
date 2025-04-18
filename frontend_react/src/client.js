// src/sanityClient.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// No need for token if you're doing public reads only
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // still okay to keep in env
  dataset: 'production',                              // or 'web_files' if that's what you're using
  apiVersion: '2023-01-01',                           // always keep this updated
  useCdn: true,                                       // yes to caching!
})

// Reuse image builder like before
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)




// // import sanityClient from '@sanity/client';
// // import imageUrlBuilder from '@sanity/image-url';

// // export const client = sanityClient({
// //   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
// //   dataset: 'production',
// //   apiVersion: '2022-02-01',
// //   useCdn: true,
// //   token: process.env.REACT_APP_SANITY_TOKEN,
// // });

// // const builder = imageUrlBuilder(client);

// // export const urlFor = (source) => builder.image(source);
// // src/sanityClient.js
// import { createClient } from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//   projectId: 'yixp4u3x',    // your project ID
//   dataset: 'web_files',     // or 'production' if you changed it
//   useCdn: true,             // `false` if you want fresh data on every fetch
//   apiVersion: '2023-01-01', // use today's date or Sanity schema version
// })

// // src/imageUrlBuilder.js

// // import { client } from './sanityClient'

// const builder = imageUrlBuilder(client)

// export function urlFor(source) {
//   return builder.image(source)
// }
