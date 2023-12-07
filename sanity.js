import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "ge3jcjdv",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-12-07'
})

// For helping create image urls with the images we have uploaded in Sanity backend 
const builder = imageUrlBuilder(client);

// Helper function
export const urlFor = (source) => builder.image(source);