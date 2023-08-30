const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class UserAvatarController{
    async update(request, response){
        const user_id = request.user.id //estava request.user.user_id
        const avatarFilename = request.file.filename //estava request.file.avatarFilename
        const fileType = request.file.mimetype

        console.log(request.file.mimetype)

        const diskStorage = new DiskStorage()    

        //console.log(request.user.id)
        //console.log(user_id)
        //console.log(request.file)
        
        const user = await knex("users")
        .where({id:user_id}).first()

        if(!user){
            throw new AppError("somente usuarios autenticados podem mudar a foto", 401)
        }

        if(user.avatar){
            
            if(!["image/jpeg","image/png"].includes(fileType)){
                throw new AppError("O Arquivo selecionado não é uma imagem")
            }
            
            await diskStorage.deleteFile(user.avatar)  
        }
        const filename = await diskStorage.saveFile(avatarFilename)
        user.avatar = filename

        await knex("users").update(user).where({id:user_id})

        return response.json(user)
    }
}   

module.exports = UserAvatarController