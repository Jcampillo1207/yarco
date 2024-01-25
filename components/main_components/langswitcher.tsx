"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { localeNames, locales } from "../../i18nconfig";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

type Locale = keyof typeof localeNames;

const flagIcons = {
  "en-US": <ReactCountryFlag countryCode="US" svg />,
  "es-MX": <ReactCountryFlag countryCode="MX" svg />,
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      // Remove the current locale from the pathname
      const newPath = pathName!.replace(/^\/[a-z]{2}-[A-Z]{2}/, `/${newLocale}`);
      router.push(newPath);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="flex gap-x-2 w-fit px-2">
          {flagIcons[locale as Locale]}
          <ChevronDown className="w-3 h-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-fit">
        {locales.map((loc) => (
          <Button
            key={loc}
            variant={"ghost"}
            size={"icon"}
            onClick={() => switchLocale(loc as Locale)}
          >
            {flagIcons[loc]}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
