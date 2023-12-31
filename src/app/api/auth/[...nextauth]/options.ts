import type { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
  debug: true,
  session: {strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    // GitHubProvider({
    //     clientId: process.env.GITHUB_ID!,
    //     clientSecret: process.env.GITHUB_SECRET!,
    // }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_SECRET_ID ?? '',
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if(user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if(account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({session, token}) => {
      token.accessToken
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        }
      }
    }
  }
};
