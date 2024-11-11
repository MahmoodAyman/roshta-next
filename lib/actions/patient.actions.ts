import { Query, ID } from "node-appwrite";
import { users } from "../appwrite.config";

export const createUser = async (user: CreateUserParams) => {
  try {
    console.log("Attempting to create a new user...");
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log("User created successfully:", newUser);
    return newUser; 
  } catch (error: any) {
    console.error("Error creating user:", error);
    if (error.code === 409) {
      console.log("User already exists. Fetching existing user data...");
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);
      console.log("Existing user found:", existingUser?.users[0]);
      return existingUser?.users[0];
    }
    // Log unexpected errors for further troubleshooting
    console.error("An unexpected error occurred:", error);
  }
};
