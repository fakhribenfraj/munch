import { loginUser } from "@/actions/authorization/loginUser";
import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (token.access_token) {
        session.user = token.user as User;
        session.access_token = token.access_token as string;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          const res = await loginUser(credentials.email, credentials.password);
          if (res.data) {
            return res.data;
          } else {
            throw new Error(res.message);
          }
        }
      },
    }),
  ],
};
