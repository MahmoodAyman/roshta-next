import * as sdk from "node-appwrite";

// Ensure these are only used on the server-side
// const {
//   PROJECT_ID,
//   API_KEY,
//   DATABASE_ID,
//   PATIENT_COLLECTION_ID,
//   DOCTOR_COLLECTION_ID,
//   APPOINTMENT_COLLECTION_ID,
//   NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
//   NEXT_PUBLIC_ENDPOINT: ENDPOINT,
// } = process.env;

// Log to verify the endpoint and other environment variables
console.log("Appwrite Endpoint:", process.env.NEXT_PUBLIC_ENDPOINT);
console.log("Project ID:", process.env.PROJECT_ID);
console.log("API Key:", process.env.API_KEY);

if (!process.env.NEXT_PUBLIC_ENDPOINT || !process.env.PROJECT_ID || !process.env.API_KEY) {
  throw new Error("Missing Appwrite environment variables!");
}

const client = new sdk.Client();
client.setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!).setProject(process.env.PROJECT_ID!).setKey(process.env.API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const maessaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
