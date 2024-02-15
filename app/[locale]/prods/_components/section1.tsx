"use client"

import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
const textos = ["Confianza", "Seguridad", "Eficiencia"];

export const Section1 = () => {
  const t = useTranslations("ProdsSec1");
  const clavesDeTextos = ["texto1", "texto2", "texto3"]; // Claves de tus traducciones
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
      const interval = setInterval(() => {
          const nuevoIndice = (index + 1) % clavesDeTextos.length;
          setIndex(nuevoIndice);
      }, 2000);

      return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="w-full h-fit flex items-center justify-center px-5 md:px-7 lg:px-14 py-24 md:py-32 lg:py-40 flex-col gap-y-5 bg-[url('/banner3.png')] bg-center relative bg-cover">
      <div className="w-full h-full absolute bg-black/25 z-0 backdrop-blur-sm">

      </div>
      <h1 className="text-4xl lg:text-7xl mx-auto font-bold text-amber-500 z-10">{t(clavesDeTextos[index])}</h1>
      <h1 className="text-4xl lg:text-7xl mx-auto font-bold max-w-3xl text-center z-10 text-white">{t("title")}</h1>
    </section>
  );
};
