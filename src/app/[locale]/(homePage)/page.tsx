import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home({ params: { locale } }: RouteProps) {
  console.log(locale);
  const t = getTranslations();

  const session = await getServerSession(authOptions); // server side
  //* getSession client and server side
  //^ useSession client side return

  return (
    <main>
      {(await t)("hello")}

      {session?.user.firstName}
    </main>
  );
}
