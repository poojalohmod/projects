import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthService = {
  async signup(email, password) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  },

  async login(email, password) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  },

  async logout() {
    await signOut(auth);
    return true;
  },
};
