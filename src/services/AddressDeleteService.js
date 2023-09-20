const AppError = require("../utils/AppError")

class AddressDeleteService{
    constructor(addressRepository){
        this.addressRepository = addressRepository
    }
    async execute(id){
        if(id){
            const addr = await this.addressRepository.show(id)

            if(addr==undefined){
                throw new AppError("Este endereco não existe")
            }else{
                try{

                    await this.addressRepository.delete(id)
                    
    
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
module.exports = AddressDeleteService