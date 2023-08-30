const fs = require("fs")
const path = require("path")
const uploadConfig = require("../configs/upload")

class DiskStorage{
    async saveFile(file){
        await fs.promises.rename( //rename no fs e mudar o arquivo de lugar
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        )

        return file
    }

    async deleteFile(file){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        try{
            await fs.promises.stat(filePath)
        }
        catch{
            return
        }

        await fs.promises.unlink(filePath) //deleta o arquivo se o parametro dele for o path de um arquivo 
    }
}

module.exports=DiskStorage