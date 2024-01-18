import type { NextApiRequest, NextApiResponse } from 'next'
const { google } = require('googleapis');



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.EMAIL,
            private_key: process.env.KEY,
        },
        scopes: ['https://www.googleapis.com/auth/drive']
    });

    const drive = google.drive({ version: 'v3', auth });

    if (req.method === 'GET') {
        // Process a POST request

        const fileId = 'your-google-drive-file-id';
        const response = await drive.files.get({
            fileId: fileId,
            alt: 'media'
        }, { responseType: 'json' });

        res.json(response.data);
    } else {
        return { status: 400, message: "Incorrect Request" }
    }
}