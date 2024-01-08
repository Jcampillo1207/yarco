import { Header } from "@/components/main_components/header";
import { Footer } from "@/components/main_components/footer"
import { NextIntlClientProvider } from "next-intl";

interface Props {
  children: React.ReactNode;
  params: any;
  locale: any;
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`@/app/_translations/${locale}.json`)).default;
  } catch (error) {
    console.log("Hola");
  }

  return (
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
  );
}
