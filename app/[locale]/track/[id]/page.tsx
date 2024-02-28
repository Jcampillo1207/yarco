import { useRouter, useSearchParams } from "next/navigation";
import { Section1 } from "../_components/section1";
import { Section2 } from "../_components/section2";
import { Section3 } from "../_components/section3";
import { google } from "googleapis";
import { Divide } from "lucide-react";
import { TextPrimary } from "@/components/mainstyles/text";
const { Readable } = require("stream");
const csvParser = require("csv-parser");

export default async function Tracking({
  params,
}: {
  params: { slug: string };
}) {
  async function loader(params: any) {
    "use server";

    const id = params.id;
    if (id === undefined) {
      return null;
    }
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.EMAIL,
          private_key: process.env.KEY!.replace(/\\n/gm, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/drive"],
      });

      const drive = google.drive({ version: "v3", auth });
      const fileId = process.env.DRIVE_ID;
      const response = await drive.files.export(
        {
          fileId: fileId,
          mimeType: "text/csv",
        },
        { responseType: "stream" }
      );

      const shipments: any[] = await streamToJSON(response.data);

      const item = shipments.find((shipment) => shipment["Tracking #"] === id);

      return {
        props: {
          item,
        },
      };
    } catch (error) {
      console.error("Error fetching data from Google Drive:", error);
      return {
        props: {
          data: null,
        },
      };
    }
  }

  async function streamToJSON(stream: any): Promise<any[]> {
    "use server";
    return new Promise((resolve, reject) => {
      const data: any = [];
      stream
        .pipe(csvParser())
        .on("data", (row: any) => {
          data.push(row);
        })
        .on("end", () => {
          resolve(data);
        })
        .on("error", reject);
    });
  }

  const excelData = await loader(params);

  return (
    <main className="w-full h-fit flex flex-col gap-y-14 md:gap-y-20 lg:gap-y-28 pb-10 md:pb-14 lg:pb-16">
      <Section1 />
      {excelData ? (
        <Section3 data={excelData} />
      ) : (
        <section className="w-full h-fit px-5 md:px-7 lg:px-14 py-10 md:py-14 lg:py-20 flex items-center justify-center">
          <TextPrimary className="text-center">
            No pudimos encontrar tu orden
          </TextPrimary>
        </section>
      )}
    </main>
  );
}
