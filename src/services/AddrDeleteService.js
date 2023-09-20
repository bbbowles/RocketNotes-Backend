const AppError = require("../utils/AppError")

class AddrDeleteService{
    constructor(addrRepository){
        this.addrRepository = addrRepository
    }
    async execute(id){
        if(id){
            const addr = await this.addrRepository.show(id)

            if(addr==undefined){
                throw new AppError("Este endereco não existe")
            }else{
                try{

                    await this.addrRepository.delete(id)
                    
    
                    return "Endereço deletado com sucesso"
                }catch{
                    throw new AppError("O endereço não pode ser deletado devido a um erro interno", 500)
                }
            }

            
        }else{
            throw new AppError("Id não informado")
        }
        }
 
}
module.exports = AddrDeleteService