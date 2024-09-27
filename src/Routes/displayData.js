const express= require('express')
const { displayDataController, displayFoodItem } = require('../Controllers/displayContainer')
const displayDataRouter= express.Router() 

displayDataRouter.get('/displayData',displayDataController)


module.exports={displayDataRouter}