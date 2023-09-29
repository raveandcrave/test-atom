import { create } from "zustand";

interface AuthStore {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuth = create<AuthStore>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth) => set({ isAuth }),
}));
