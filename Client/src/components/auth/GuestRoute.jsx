import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (user) {
    // If user is already logged in, send them to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestRoute;
