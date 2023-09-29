import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          required: true,
        },
        password: {
          label: "password",
          type: "password",
          required: true,
        },
      },
      authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        return {
          name: "TEST USER",
          id: "1",
        } as User;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
