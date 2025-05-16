// import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface ImageProps {
    Key: string;
    key: string;
    location: string;
    mimetype: string;
    originalName: string;
    size: number;
  }

  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: ImageProps | null;
      role?: string;
      companyId?: string;
    };
  }

  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: ImageProps | null;
    role?: string;
    companyId?: string;
    accessToken?: string;
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
    image: ImageProps;
  }
}

export {};
