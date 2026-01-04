import { db, auth } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const todosCol = () => collection(db, "todos");

export const TodoService = {
  async createTodo(title) {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");
    const newTodo = {
      userId: user.uid,
      title,
      completed: false,
      createdAt: Date.now(),
    };
    const ref = await addDoc(todosCol(), newTodo);
    return { id: ref.id, ...newTodo };
  },

  async listTodos() {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");
    const q = query(todosCol(), where("userId", "==", user.uid));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  },

  async updateTitle(id, title) {
    const ref = doc(db, "todos", id);
    await updateDoc(ref, { title });
    return true;
  },

  async toggleStatus(id, completed) {
    const ref = doc(db, "todos", id);
    await updateDoc(ref, { completed });
    return true;
  },

  async delete(id) {
    const ref = doc(db, "todos", id);
    await deleteDoc(ref);
    return true;
  },
};
