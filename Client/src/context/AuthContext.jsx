import { createContext, useContext, useEffect, useState } from "react";
import { authServices } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const userData = await authServices.getProfile();
        setUser(userData);
      } catch (error) {
        console.log(error.response?.data?.message);

        // If no cookie or invalid token, user stays null
        setUser(null);
      }
    })().finally(() => {
      setLoading(false);
    });
  }, []);

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
