import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Get user from localStorage when app starts
 const [user, setUser] = useState(
  () => { 
    try { 
      const storedUser = localStorage.getItem("user"); 
      return storedUser ? JSON.parse(storedUser) : null; 
    } catch (error) {
       console.error("Invalid user data:", error);
       localStorage.removeItem("user"); 
       return null; 
      } });

  // Login / Signup
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
     localStorage.removeItem("token");
    sessionStorage.clear(); 
    navigate("/login");
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) { throw new Error("useAuth must be used inside AuthProvider"); }
  return context;
};