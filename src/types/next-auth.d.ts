import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    name?: string;
    email?: string;
    role?: string;
    token?: string;
  }
  interface Session {
    user: User;
  }
}
