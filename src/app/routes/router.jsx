import { createBrowserRouter } from "react-router-dom";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import Todos from "../../pages/Todos";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  {
    path: "/todos",
    element: (
      <ProtectedRoute>
        <Todos />
      </ProtectedRoute>
    ),
  },
  { path: "/", element: <Login /> },
]);
