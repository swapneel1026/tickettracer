import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
const authHandler= NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ]
})

export { authHandler as GET, authHandler as POST }

