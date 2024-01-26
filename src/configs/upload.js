const path = require("path");
const multer = require("multer")
const crypto = require("crypto")


// const TMP_FOLDER = path.resolve(__dirname,"..","..","tmp")
// const UPLOADS_FOLDER = path.resolve(TMP_FOLDER,"uploads")

const TMP_FOLDER = ("/home/neo/Minha/codigos/teste/api/tmp")
const UPLOADS_FOLDER = ("/home/neo/Minha/codigos/teste/api/uploads")


const MULTER = { //?? zero explicacao
    storage:multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request,file,callback){
            const fileHash=crypto.randomBytes(10).toString("hex")
            const fileName=`${fileHash}-${file.originalname}`

            return callback(((e)=>console.log(e)), "consegui")
        }
    })
}


module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}
