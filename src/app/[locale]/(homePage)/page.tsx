import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

import { useFormatter, useNow, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default function Home({ params: { locale } }: RouteProps) {
  console.log(locale);
  // translation
  const t = useTranslations();
  const format = useFormatter();
  const now = useNow({
    updateInterval: 1000,
  });
  // const session = await getServerSession(authOptions); // server side
  //* getSession client and server side
  //^ useSession client side return

  return (
    <main>
      {/* { t("welcome-user", 
        { name: session?.user.firstName! })} */}
      {t("welcome-user", { name: "Ali" })}
      <h1>{t("hello")}</h1>
      <p>{t("cart-product", { count: "3" })}</p>
      <p>
        {t("product-price", {
          price: "1000",
        })}
      </p>
      <p>
        {t("sucess-rate", {
          rate: 0.8,
        })}
      </p>
      {format.number(1000, {
        style: "decimal",
      })}
      <p>{format.dateTime(new Date(), "date-base")}</p>
      <p>
        {t("birth-date", {
          date: new Date(2005),
        })}
      </p>
      <p>
        postes{" "}
        {format.relativeTime(new Date("2025-4-10"), {
          unit: "hour",
        })}
      </p>
      <p>{format.relativeTime(new Date("2025-7-20T10:36:01.516Z"), now)}</p>
      <p></p>
    </main>
  );
}
