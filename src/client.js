import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vz35aboc",
  dataset: "production",
  apiVersion: '2021-09-29',
  useCdn: false,
});

export default client;
