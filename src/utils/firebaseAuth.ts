import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig"; // make sure app is exported from firebaseConfig

const auth = getAuth(app);

/**
 * Create a Firebase user and return the UID
 */
export const createFirebaseUser = async (email: string, password: string): Promise<string> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user.uid;
  } catch (error: any) {
    console.error("Firebase Auth error:", error);
    throw error;
  }
};

export const loginFirebaseUser = async (email: string, password: string): Promise<string> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user.uid;
  } catch (error: any) {
    console.error("Firebase Auth login error:", error);
    throw error;
  }
};