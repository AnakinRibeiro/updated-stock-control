import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = request.nextUrl;

  // Logs para debug
  console.log("Middleware pathname:", pathname);
  console.log("Token:", token);

  const isAuth = !!token;
  const isLoginPage = pathname === "/login";

  // Redireciona para login se não autenticado e acessando rota privada
  if (!isAuth && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Evita loop: se já autenticado, e tentando acessar /login, redireciona para /
  if (isAuth && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"], // Ajuste conforme suas rotas
};
