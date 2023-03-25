import {v2 as cloudinary} from 'cloudinary';


// Configuration 
cloudinary.config({
  cloud_name: "dleyjie7k",
  api_key: "369378637416463",
  api_secret: "SpzO0eWcQSDLriCXAARVfNTJdLQ"
});

export async function uploadImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, { folder: 'proyecto' });
    return result;
  } catch (err) {
    console.log('Error al cargar la imagen en Cloudinary', err);
    return null;
  }
}

export async function deleteImage(publicId){
    return await cloudinary.uploader.destroy(publicId)
}