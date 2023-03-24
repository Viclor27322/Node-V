const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dleyjie7k",
  api_key: "369378637416463",
  api_secret: "SpzO0eWcQSDLriCXAARVfNTJdLQ"

});

export async function uploadImage(filePath){
    return await cloudinary.uploader.upload(filePath,{
        folder:'replit'
    })
}

export async function deleteImage(publicId){
    return await cloudinary.uploader.destroy(publicId)
}