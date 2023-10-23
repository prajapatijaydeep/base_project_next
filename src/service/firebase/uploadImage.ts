import "firebase/storage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "@/utils/firebase/firebaseConfig";

type Keys = {
  file: any;
  metadata?: Record<string, any>;
};

export async function uploadImageToStorage({ file, metadata }: Keys) {
  try {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;

    const timestamp = Date.now();
    const extension = "jpg";
    const storagePath = `profile_pictures/${randomNumber}_${timestamp}.${extension}`;

    const storageRef = ref(firebaseStorage, storagePath);

    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file);

    const imageUrl = await getDownloadURL(storageRef);

    return imageUrl;
  } catch (error) {
    console.error("Error while uploading image to Firebase Storage:", error);
    throw error;
  }
}
