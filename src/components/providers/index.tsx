import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";
import NextAuthProvider from "./components/next-auth.provider";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  // This is a client component, so we can use hooks here.
  // Translation
  const locale = useLocale();
  const messages = useMessages();
  const now = useNow();
  const timezone = useTimeZone();
  return (
    <NextAuthProvider>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        now={now}
        timeZone={timezone}
      >
        {children}
      </NextIntlClientProvider>
    </NextAuthProvider>
  );
}
