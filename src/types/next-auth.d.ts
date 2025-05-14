// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      companyId?: string;
      image: any;
    };
  }

  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
    companyId?: string;
    accessToken?: string;
    image: any;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    id?: string;
    email?: string;
    name?: string;
    role?: string;
    companyId?: string;
    image: any;
  }
}

export {};
