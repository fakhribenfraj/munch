import { authenticateUser } from "@/actions/authorization/authenticateUser";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.accessToken = user.token;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.token = token.accessToken as string;
      session.user.role = token.role as string;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { data: user } = await authenticateUser({
          username: credentials?.username,
          password: credentials?.password,
        });

        // If no error and we have user data, return it
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
