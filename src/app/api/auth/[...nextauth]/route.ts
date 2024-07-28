import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if(!credentials) {
          return null
        }
        
        if(credentials.email === "robson@gmail.com" && credentials.password === "123") {
          return {
            id: "1",
            name: "Robson",
            email: "robson@gmail.com"
          }
        }
        return null
      },
    }),

  ],
});

export { handler as GET, handler as POST };