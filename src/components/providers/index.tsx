import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";
import NextAuthProvider from "./components/next-auth.provider";
import ReactQueryProvider from "./components/react-query.provider";
import { ExamProvider } from "./components/exam.provider";
import { ThemeProvider } from "./components/theme-provider";

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
    <ReactQueryProvider>
      <NextAuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ExamProvider>
            <NextIntlClientProvider
              locale={locale}
              messages={messages}
              now={now}
              timeZone={timezone}
            >
              {children}
            </NextIntlClientProvider>
          </ExamProvider>
        </ThemeProvider>
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
