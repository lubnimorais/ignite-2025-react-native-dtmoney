import { createContext, ReactNode, useContext, useState } from 'react';

import { api } from '@/libs/api';

type ILoginData = {
  email: string;
  password: string;
};

type IRegisterData = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

type IUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

type IAuthenticateResponse = {
  user: IUser;
  token: string;
};

type IAuthContextData = {
  user: IUser | null;
  token: string | null;
  authenticate: (data: ILoginData) => Promise<void>;
  register: (data: IRegisterData) => Promise<void>;
  logout: () => void;
};

type IAuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState('');

  async function authenticate({ email, password }: ILoginData) {
    try {
      const response = await api.post<IAuthenticateResponse>('/auth/login', {
        email,
        password,
      });
      console.log('🚀 ~ authenticate ~ response:', response.data);

      setUser(response.data.user);
      setToken(response.data.token);
    } catch (error) {
      throw error;
    }
  }

  async function register({
    name,
    email,
    password,
    confirmPassword,
  }: IRegisterData) {}

  async function logout() {}

  return (
    <AuthContext.Provider
      value={{ user, token, authenticate: authenticate, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
