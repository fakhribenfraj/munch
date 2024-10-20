import { authenticateUser } from "@/actions/authorization/authenticateUser";
import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      // console.log({ user });
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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await authenticateUser({
          username: credentials?.username,
          password: credentials?.password,
        });
        if (res.data) {
          // Any object returned will be saved in `user` property of the JWT
          return res.data;
        } else {
          // Return an object that will pass error information through to the client-side.
          throw new Error(res.message);
        }
      },
    }),
  ],
};
