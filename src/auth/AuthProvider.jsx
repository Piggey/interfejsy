import { useState } from "react";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null); // Przechowuje informacje o zalogowanym użytkowniku

  const login = (email) => {
    console.log("logging in");
    setEmail(email);
  };

  const logout = () => {
    console.log("logging out");
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
