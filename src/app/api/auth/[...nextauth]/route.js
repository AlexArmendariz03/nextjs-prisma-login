import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db"

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text", placeholder:"joaquin123"},
        password: {label: "Password" , type:"password", placeholder: "*****"}
      },
       async authorize(credentials,req) {
        console.log(credentials)

        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        })

         if(!userFound)  return null
         console.log(userFound)
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET ,handler as POST }