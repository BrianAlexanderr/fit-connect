// src/services/registrationService.ts
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { sendRegistrationDataToBackend } from "../api/UserAPI";
import { convertDOBToISO } from "../utils/validation";

export const registerUser = async (data: any) => {
  try {
    const auth = getAuth();

    // 1️⃣ Create Firebase user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const firebaseUser = userCredential.user;

    // 2️⃣ Set the display name
    const fullName = `${data.firstName} ${data.lastName}`;
    await updateProfile(firebaseUser, { displayName: fullName });

    // 3️⃣ Prepare backend data
    const dobISO = convertDOBToISO(data.dateOfBirth);
    const userData = {
      id: firebaseUser.uid,
      name: fullName,   // same as displayName
      email: data.email,
      dateOfBirth: dobISO,
    };

    // 4️⃣ Send to backend
    const backendResponse = await sendRegistrationDataToBackend(userData);

    return backendResponse; 
  } catch (error) {
    console.error("Registration service error:", error);
    throw error;
  }
};