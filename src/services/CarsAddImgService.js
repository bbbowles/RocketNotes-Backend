const DiskStorage = require("../providers/DiskStorage")
const path = require("path")
const express = require('express')
const multer = require('multer')

const app = express()
class CarsAddImgService {
    constructor(carsRepository) {
        this.carsRepository = carsRepository
    }
    async execute({ uri, type, name }) {
        // const diskStorage = new DiskStorage()

        // const result = await diskStorage.saveFile(name)

        // return response.json(result)

    }
}
module.exports = CarsAddImgService
