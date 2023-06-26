import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "8j9ixazj",
  dataset: "production",
  apiVersion: "2023-06-26",
  useCdn: true,
  token:
    "sk99u6vdZ0EoVXTkY2L5Wwt0wmjphNSbZNVMQCx2iRVwt4T82V6t1iCLqjvx4tvxwFWiJ5OdvBsnrVNGnyr1bzOCXVC2zSJa44t4RCSdyJ7lSxQanilUA29oDp2c1F2B0T4ybDiNfsz3l0NrFZFSUmfFUpSEzjBG93W8fKccMX217ztlWnUk",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.urlFor(source);
