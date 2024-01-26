require('express-async-errors')
require("dotenv/config")

const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError')

const routes = require('./routes/index.js')

const uploadConfig = require("./configs/upload")

const express = require('express')

const cors = require('cors')



const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.static('public'))

migrationsRun()

// express usa essa linha de codigo para rotear a /carimg ate a pasta de uploadx
app.use("/carimg", express.static(uploadConfig.UPLOADS_FOLDER))

app.use((error, request, response,next) =>{
  if(error instanceof AppError){
      return response.status(error.statusCode).json({
          status:"error",
          message: error.message
      })
  }

  console.error(error)
  console.log(error)

  return response.status(500).json({
      status:"error",
      message:"Internal server error"
  })
})


const PORT = 3002
app.listen(PORT, () => console.log(`funcionando porta${PORT}`))
