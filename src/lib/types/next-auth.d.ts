import { User } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    /* user is return data from login respone when success */
    token: string;
    user: AppUser;
  }
  // interface Profile {
  //   // email: string;
  //   // email_verfied: boolean;
  //   // name: string;
  //   // picture: string;
  //   // given_name: string;
  //   // family_name: string;
  // }
  interface Session {
    user: AppUser;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {}
}
