import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
import { User } from './../node_modules/next-auth/core/types.d';


export const authOptions: NextAuthOptions = {

    pages: {
        signIn: "/login"
    },


    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "text" }
            },
            //authorize is like a login function
            authorize: async (credentials) => {
                const response = await fetch(`${process.env.API}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    headers: { "Content-type": "application/json" }
                });

                const payload = await response.json();
                console.log(payload)

                if (payload.message === 'success') {

                    const { id }: { id: string } = jwtDecode(payload.token)

                    return {
                        id: id,
                        user: payload.user,
                        token: payload.token
                    }
                }
                throw new Error(payload.message || "failed to login");
            }
        })
    ],

    callbacks: {



        async jwt({ token, user }) {

            if (user) {
                token.user = user?.user
                token.token = user?.token
            }

            return token
        },
        async session({ session, token }) {

            if (token) {
                session.user = token?.user

            }
            return session
        }
    }
}