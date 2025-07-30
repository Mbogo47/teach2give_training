import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const uploadImageToCloudinary = async (
  buffer: Buffer,
  originalName: string
): Promise<string> => {
  const tempPath = path.join(__dirname, `../../tmp-${originalName}`);
  await fs.promises.writeFile(tempPath, buffer);

  const result = await cloudinary.uploader.upload(tempPath, {
    folder: "notely",
  });

  await fs.promises.unlink(tempPath); // remove temp file

  return result.secure_url;
};
