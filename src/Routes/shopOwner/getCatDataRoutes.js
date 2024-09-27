const express= require('express')
const { getCatDataController } = require('../../Controllers/ShopOwner/getCatDataControllers')
const getCatDataRoute= express.Router() 



getCatDataRoute.get('/getCatData', getCatDataController)

module.exports={getCatDataRoute}