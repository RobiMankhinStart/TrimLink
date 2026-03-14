import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // Or a spinner

  if (!user) {
    // If not logged in, boot them to the login page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
