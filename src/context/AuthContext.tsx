import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUsers = [
  {
    id: 'user1',
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: 'password123',
    wishlist: []
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for saved auth on initial render
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(
          u => u.email === email && u.password === password
        );
        
        if (foundUser) {
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(userWithoutPassword));
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500);
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const userExists = mockUsers.some(u => u.email === email);
        
        if (userExists) {
          reject(new Error('User with this email already exists'));
        } else {
          const newUser = {
            id: `user${mockUsers.length + 1}`,
            name,
            email,
            wishlist: []
          };
          
          // In a real app, we would send this to an API
          mockUsers.push({ ...newUser, password });
          
          setUser(newUser);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(newUser));
          resolve();
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};