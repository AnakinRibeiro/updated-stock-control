import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

// handler de autenticação
export const authOptions: NextAuthOptions = {
  // provedores de autenticação
  providers: [
    CredentialsProvider({
      name: "credential", //nome do provider

      // campos do form de login
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // função responsável por autenticar o usuário
      async authorize(credentials) {
        const res = await fetch(
          `https://staging.api.ptmanager.oncrets.com/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        // extrai os dados retornados da API
        const data = await res.json();

        // valida o login se a resposta for OK e houver um acces_token
        if (res.ok && data?.access_token) {
          const userId = data.user?.id;

          const userRes = await fetch(
            `https://staging.api.ptmanager.oncrets.com/users/${userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.access_token}`,
              },
            }
          );

          const fullUserData = await userRes.json();

          return {
            id: data.user?.id || "user",
            email: credentials?.email,
            name: fullUserData.name,
            role: fullUserData,
            companyId: fullUserData.companyId,
            accesToken: data.acces_token,
          };
        }

        // retorna null se a autenticação falhar
        return null;
      },
    }),
  ],

  // callbacks de customização para token e sessão
  callbacks: {
    // JWT chamado quando o token é criado ou atualizado
    async jwt({ token, user }: { token: JWT; user?: any }) {
      // adiciona o accesToken ao jwt caso o usuário tenha logado
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.companyId = user.companyId;
      }
      return token;
    },

    // chamado sempre que uma sessão for carregada
    async session({ session, token }: { session: Session; token: JWT }) {
      session.accessToken = token.accessToken as string;
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
        companyId: token.companyId,
      };
      return session;
    },
  },

  // seta a pagina app/login como página default para login & JWT como estratégia de login
  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  // Chave secreta usada para assinar tokens
  //   secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
