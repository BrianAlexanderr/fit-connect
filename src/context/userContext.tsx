import React, { createContext, useState, ReactNode, useContext } from "react";

// Define user type
interface User {
  id: string;
  fullName: string;
  email?: string;
  role?: string;
  img?: string;
  dateOfBirth?: string;
}

// Define context type
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void; // null if logging out
}

// Create context
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => useContext(UserContext);
