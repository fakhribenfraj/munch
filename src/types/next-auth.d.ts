import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    name: string;
    email: string;
    avatar: null | string;
    email_verified_at: null | string;
    created_at: string;
  }
  interface Session {
    access_token: string;
    token_type: string;
    token_expires: null | string;
    user: User;
  }
}
