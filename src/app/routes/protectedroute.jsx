import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, ready } = useAuth();

  // Wait for auth readiness to avoid flicker
  if (!ready) return <div className="p-6">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
