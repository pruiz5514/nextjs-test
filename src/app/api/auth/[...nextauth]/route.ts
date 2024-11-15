import { ILoginRequest } from "@/app/core/application/dto/auth/login-request.dto";
import { AuthService } from "@/app/infrastructure/services/auth.service";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
  id?: string;
  token?: string;
}

interface AuthUser {
    id: string;
    name: string;
    email: string;
    token: string;
}

interface CustomSession extends Session {
  user: {
    id?: string;
    token?: string;
    email?: string | null;
    image?: string | null;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo Electrónico", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {
          if(!credentials?.password || !credentials.email){
            console.error("Credenciales faltantes")
            return null
          }
          const loginRequest: ILoginRequest = {
            password: credentials.password,
            email: credentials.email
          }

          try{
            const authService = new AuthService();
            const response = await authService.login(loginRequest)

            return {
              email: response.data.user.email,
              token: response.data.access_token,

            } as AuthUser

          } catch(error){
                console.log(error);
                return Promise.reject (new Error (JSON.stringify(error)))
          }
       }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.token = authUser.token;

      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user.id = (token as AuthToken).id;
      customSession.user.token = (token as AuthToken).token;

      return customSession;
    },
  },
};


export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);