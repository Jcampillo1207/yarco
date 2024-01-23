import { Header } from "@/components/main_components/header";
import { Footer } from "@/components/main_components/footer";
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
  try {
    let messages = (await import(`@/app/_translations/${locale}.json`)).default;
    return (
      <NextIntlClientProvider messages={messages}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    );
  } catch (error) {
    <section className="w-full h-full bg-white">
      <div className="mx-auto h-fit w-fit text-4xl">
        Estamos llorando porque no estamos disponibles &
      </div>
    </section>;
  }
}
