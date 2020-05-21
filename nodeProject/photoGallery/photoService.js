import uploadConfig from '../config/uploadConfig.json'
import uploadError from '../utilities/js/errors/uploadErrror'
import path from 'path'

const savePhoto = (file) => {

    try {

        let img = file.imgSelect
        const fileExtension = path.extname(img.name)

        if (!file) {
            throw new ErrorHandler(400, 'No file found.')
        } else if (!uploadConfig.allowedExtensions.includes(fileExtension)) {
            throw new uploadError('Extension not allowed.', img.name)
        }else {
            img.mv(uploadConfig.imageDirectory+img.name)
        }
    } catch(err) {
        console.error('Error uploading image')
        console.error(err)
    }
}

const getAllPhotos = () => {

}

const getPhoto = () => {

}

export {savePhoto, getAllPhotos, getPhoto}
