import { ArrowBigRight, Send } from "lucide-react";
import { TextPrimary, Title } from "../mainstyles/text";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";

interface FormProps {
  text: string;
  title: string;
  type: string;
}

export const Form = ({ title, text, type }: FormProps) => {
    const t = useTranslations("Form")
  return (
    <section className="w-full h-fit items-start justify-start flex flex-col px-5 md:px-7 lg:px-14 gap-y-14 lg:gap-y-20">
      <div className="w-full h-fit items-center justify-center flex flex-col gap-y-4 lg:gap-y-4">
        <Title>{t("title")}</Title>
        <TextPrimary>{t("text")}</TextPrimary>
      </div>
      <form
        action="https://formsubmit.co/jcampillo1207@gmail.com"
        method="POST"
        className="w-full h-fit flex flex-col items-end justify-start gap-y-4 lg:gap-y-14"
      >
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <div className="w-full h-fit flex flex-col items-start justify-start gap-y-10 lg:gap-y-14">
          <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-7">
            <div className="w-full h-fit flex flex-col gap-y-7 items-start justify-start">
              {/* Datos de nombre */}
              <p className="text-primary text-lg">{t("datos1")}</p>
              <div className="w-full h-fit flex flex-col lg:flex-row gap-x-4 gap-y-7">
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="name">
                  {t("name")}<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder={t("pname")}
                    name="Nombre"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="last">
                  {t("apellido")}<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="last"
                    placeholder={t("papellido")}
                    name="Apellido"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-y-7 items-start justify-start">
              {/* Datos de contacto */}
              <p className="text-primary text-lg">{t("datos2")}</p>
              <div className="w-full h-fit flex flex-col lg:flex-row gap-x-4 gap-y-7">
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="mail">
                  {t("correo")}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="mail"
                    placeholder={t("pemail")}
                    name="Correo electrónico"
                    required
                  />
                </div>
                <div className="flex items-start justify-start gap-x-2 w-full">
                  <div className="w-1/4">
                    <Label htmlFor="cve">
                    {t("clave")}<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      type="tel"
                      id="cve"
                      placeholder={t("pclave")}
                      name="Clave"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="phone">
                    {t("tel")}<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="000-000-0000"
                      name="Número de teléfono"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-7">
            <div className="w-full h-fit flex flex-col gap-y-7 items-start justify-start">
              {/* Datos de salida */}
              <p className="text-primary text-lg">{t("datos3")}</p>
              <div className="w-full h-fit flex flex-wrap gap-x-4 gap-y-7">
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="empresa">{t("empresa")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="empresa"
                    placeholder="ej. YARCO Logistics"
                    name="Empresa"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="calle">{t("calle")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="calle"
                    placeholder="ej. Blvd. Independencia"
                    name="Calle"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1">
                  <Label htmlFor="ext">{t("numext")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="ext"
                    placeholder="ej. 24"
                    name="Número exterior"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1">
                  <Label htmlFor="int">{t("numint")}</Label>
                  <Input
                    type="text"
                    id="int"
                    placeholder="ej. 12"
                    name="Número interior"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="postal">{t("cp")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="postal"
                    placeholder="ej. 27105"
                    name="Código Postal"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="city">{t("ciudad")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="ej. Torreón"
                    name="Ciudad"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="state">{t("Estado")}</Label>
                  <Input
                    type="text"
                    id="state"
                    placeholder="ej. Coahuila"
                    name="Estado"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="date">{t("fechasalida")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="date"
                    id="date"
                    name="Fecha de salida solicitada"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-y-7 items-start justify-start">
              {/* Datos de entrega */}
              <p className="text-primary text-lg">{t("datos4")}</p>
              <div className="w-full h-fit flex flex-wrap gap-x-4 gap-y-7">
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="calle">{t("calle2")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="calledel"
                    placeholder="ej. Blvd. Independencia"
                    name="Calle de entrega"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1">
                  <Label htmlFor="extdel">{t("numext2")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="extdel"
                    placeholder="ej. 24"
                    name="Número exterior de entrega"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1">
                  <Label htmlFor="int">{t("numint2")}</Label>
                  <Input
                    type="text"
                    id="intdel"
                    placeholder="ej. 12"
                    name="Número interior de entrega"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="postadel">{t("cp2")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="postaldel"
                    placeholder="ej. 27105"
                    name="Código Postal de entrega"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="citydel">{t("ciudad2")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="citydel"
                    placeholder="ej. Torreón"
                    name="Ciudad de entrega"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="statedel">{t("Estado2")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="statedel"
                    placeholder="ej. Coahuila"
                    name="Estado de entrega"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 flex-1 min-w-[50%]">
                  <Label htmlFor="datedel">{t("fechasalida2")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="date"
                    id="datedel"
                    name="Fecha de entrega solicitada"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-7">
            <div className="w-full h-fit flex flex-col gap-y-7 items-start justify-start">
              {/* Datos de servicio */}
              <p className="text-primary text-lg">{t("datos5")}</p>
              <div className="w-full items-start justify-start flex flex-col gap-y-4">
                <Label>{t("servicio")}</Label>
                <span className="w-full flex gap-x-3 items-center justify-start mt-2">
                  <input
                    id="caja"
                    type="checkbox"
                    name="Caja seca"
                    className="border-2 border-muted-foreground rounded-md px-3 py-1 text-sm font-regular"
                  />
                  <Label htmlFor="caja" className="text-muted-foreground">
                  {t("serv1")}
                  </Label>
                </span>
                <span className="w-full flex gap-x-3 items-center justify-start">
                  <input
                    id="plataforma"
                    type="checkbox"
                    name="Plataforma"
                    className="border-2 border-muted-foreground rounded-md px-3 py-1 text-sm font-regular"
                  />
                  <Label htmlFor="plataforma" className="text-muted-foreground">
                  {t("serv2")}
                  </Label>
                </span>
                <span className="w-full flex gap-x-3 items-center justify-start">
                  <input
                    id="refri"
                    type="checkbox"
                    name="Refrigerados"
                    className="border-2 border-muted-foreground rounded-md px-3 py-1 text-sm font-regular checked:bg-primary"
                  />
                  <Label htmlFor="refri" className="text-muted-foreground">
                  {t("serv3")}
                  </Label>
                </span>
                <span className="w-full flex gap-x-3 items-center justify-start">
                  <input
                    id="arrastre"
                    type="checkbox"
                    name="Arrastre"
                    className="border-2 border-muted-foreground rounded-md px-3 py-1 text-sm font-regular checked:bg-primary"
                  />
                  <Label htmlFor="arrastre" className="text-muted-foreground">
                  {t("serv4")}
                  </Label>
                </span>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-y-7 items-start justify-start">
              {/* Datos de servicio */}
              <p className="text-transparent text-lg">d</p>
              <div className="w-full h-fit flex flex-wrap gap-x-4 gap-y-7">
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="prod">{t("prod")}<span className="text-destructive">*</span></Label>
                  <Input
                    type="text"
                    id="prod"
                    placeholder={t("pprod")}
                    name="Producto a enviar"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-y-2 w-full">
                  <Label htmlFor="det">{t("detalles")}<span className="text-destructive">*</span></Label>
                  <Textarea
                  rows={4}
                    id="det"
                    placeholder={t("pdetalles")}
                    name="Detalles adicionales"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          variant={"default"}
          size={"default"}
          className="flex items-center gap-x-2"
        >
          Enviar formulario
          <Send className="text-white w-4 h-4" />
        </Button>
      </form>
    </section>
  );
};
