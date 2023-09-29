"use client";

import { SessionProvider as AuthSessionProvider } from "next-auth/react";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AuthSessionProvider>{children}</AuthSessionProvider>;
};
