import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    formats: {
      number: {
        "currency-base": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          currency: "EGP",
          style: "currency",
          maximumFractionDigits: 0,
        },
        "rate-base": {
          numberingSystem: locale === "ar" ? "arab" : "latn",

          style: "percent",
          maximumFractionDigits: 0,
        },
      },
      dateTime: {
        "date-base": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
          year: "2-digit",
          month: "long",
          dayPeriod: "narrow",
          weekday: "long",
          hour: "2-digit",
        },
      },
    },
  };
});
