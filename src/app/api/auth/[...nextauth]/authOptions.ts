import { loginUser } from "@/actions/authorization/loginUser";
import { registerUser } from "@/actions/authorization/registerUser";
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
        name: { label: "name", type: "text", placeholder: "jsmith" },
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        confirmPassword: { label: "email", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error("enter your credentials");
        let res = null;
        if (credentials?.confirmPassword) {
          res = await registerUser(
            credentials.name,
            credentials.email,
            credentials.password,
            credentials.confirmPassword
          );
        } else {
          res = await loginUser(credentials.email, credentials.password);
        }
        if (res.data) {
          return res.data;
        } else {
          throw new Error(res.message);
        }
      },
    }),
  ],
};
