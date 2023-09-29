"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

import { useAuth } from "@/hooks/useAuthStore";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const setIsAuth = useAuth((state) => state.setIsAuth);

  useEffect(() => {
    if (session.status === "authenticated") {
      setIsAuth(true);
    }

    if (session.status === "unauthenticated") {
      setIsAuth(false);
    }
  }, [session]);

  return children;
};
