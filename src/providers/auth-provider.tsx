import { createContext, useContext, useState } from "react";

// Interfaces
interface IUser {
  name: string;
  email: string;
}

export interface IAuthContext {
  user: IUser;
  setUser(user: IUser): void;
}

// Creating context and hook context
export const AuthContext = createContext<IAuthContext>(null);
export const useAuth = () => useContext(AuthContext);

// Creating provider
export default function AuthProvider({ children }) {
  const [user, setUser] = useState<IUser>();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
