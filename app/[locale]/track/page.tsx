import { Section1 } from "./_components/section1";
import { Section2 } from "./_components/section2";
import { Section3 } from "./_components/section3";


import { google } from "googleapis";
export const getServerSideProps = async (context: any) => {


  console.log("Invoke Function")
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.EMAIL,
      private_key: process.env.KEY,
    },
    scopes: ['https://www.googleapis.com/auth/drive']
  });

  const drive = google.drive({ version: 'v3', auth });


  // Process a POST request
  const id = context.id
  const fileId = process.env.DRIVE_ID
  const response = await drive.files.get({
    fileId: fileId,
    alt: 'media'
  }, { responseType: 'json' });

  const data = response.data

  return {
    props: {
      data
    },
  };

};

export default function Tracking({ data }: any) {
  return (
    <main className="w-full h-fit flex flex-col gap-y-14 md:gap-y-20 lg:gap-y-28 pb-10 md:pb-14 lg:pb-16">
      <Section1 />
      <Section2 />
      {data &&
        <Section3 data={data} />
      }

    </main>
  );
}
