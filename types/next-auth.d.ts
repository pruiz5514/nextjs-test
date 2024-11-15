import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      token?: string;
      name?: string | null;
      email?: string | null;
      photo?: string | null;
    };
  }
}