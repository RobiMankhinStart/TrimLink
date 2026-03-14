import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { authServices } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const userData = await authServices.getProfile();
  //       setUser(userData);
  //     } catch (error) {
  //       console.log(error.response?.data?.message);

  //       setUser(null);
  //     }
  //   })().finally(() => {
  //     setLoading(false);
  //   });
  // }, []);
  const checkAuth = useCallback(async () => {
    try {
      const userData = await authServices.getProfile();
      setUser(userData);
    } catch (error) {
      console.log(error.response?.data?.message);

      // If unauthorized, ensure user is null
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();

    // 3. Listening for browser Back/Forward button clicks
    const handleNavigation = () => {
      checkAuth();
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, [checkAuth]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await authServices.logout();
      setUser(null);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
