import NextAuth, { type User } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { CredentialsSchema } from "./schemas/auth";

export const {
  handlers, signIn, signOut, auth   
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validData = await CredentialsSchema.safeParse(credentials)
        if (validData.success) {
          const { email, password } = validData.data

          const user: User = {
            id: "1",
            name: "Development Team",
            email: email
          }
          return user
        }
        return null
      },
    }),
  ],

  session: {
    strategy: "jwt"
  },  

  pages: {
    signIn: "/auth/login"
  }
 
})