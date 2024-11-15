const express= require('express')
const { default: mongoose } = require('mongoose')
const { Food } = require('./Modules/users')
const { userRegister } = require('./Routes/userRegister')
const { loginRouter } = require('./Routes/loginController')
const { displayDataRouter } = require('./Routes/displayData')
// const { foodCategory } = require('./Modules/foodCategory')
const { foodCategoryRoutes } = require('./Routes/foodCategory')
const { addCartRoutes } = require('./Routes/addCart')
const { getCartController } = require('./Controllers/getCartController')
const { getCart } = require('./Routes/getCart')
const { deleteCartRoutes } = require('./Routes/deleteCart')
const { userDetail } = require('./Routes/getUserDetail')
const { setOrders, setOrderRoute } = require('./Routes/setOrder')
const { getOrderRoute } = require('./Routes/getOrder')
const { ownerRegisterRoute } = require('./Routes/shopOwner/ownerRegister')
const { addFood } = require('./Routes/shopOwner/addFood')
const { getOrderOnID } = require('./Controllers/getOrderOnID')
const { getOrderOnIDRoute } = require('./Routes/getOrderOnID')
const { addProductRoutes } = require('./Routes/shopOwner/addProductRoutes')
const { getProductDataRoute } = require('./Routes/shopOwner/getProductData')
const { getCatDataRoute } = require('./Routes/shopOwner/getCatDataRoutes')
const { getShopOwnerDetail, getShopOwnerDetailRoute } = require('./Routes/getShopOwnerRoutes')
const { getFavourites } = require('./Routes/getFavourites')
const { addFavouritesRoutes } = require('./Routes/addFavourites')
const { deleteFavouriteRoute } = require('./Routes/deleteFavourite')
const { updateUserRoute } = require('./Routes/updateUserRoute')
const { checkLoginRoute } = require('./Routes/shopOwner/getshopOwnerRoutes')
const { ownerDetailUpdateRoute } = require('./Routes/shopOwner/ownerDetailUpdate')
const { getOwnerProductRoute } = require('./Routes/shopOwner/getOwnerProductRoute')
const { updateShopDetailRoute } = require('./Routes/shopOwner/updateShopDetailRoutes')
const { updateLocationRoutes } = require('./Routes/updateLocationRoutes')
const { submitReviewRoute } = require('./Routes/submitReviewRoutes')
const { findReviewRoutes } = require('./Routes/findReviwRoutes')
const { getShopOrderRoute } = require('./Routes/shopOwner/getOderRoutes')
const { getReviewProductRoute } = require('./Routes/shopOwner/getReviewProductRoutes') 
const cors= require("cors")
const app= express()
const dotenv = require('dotenv');
dotenv.config();

  






const port = process.env.PORT || 8500; 


// app.use(cors())





app.use(express.json())

// const allowedOrigins = [
//   "https://snackhuub.vercel.app/", // Replace this with your actual Vercel frontend URL
//   "http://localhost:3000"             // Allow local development for testing
// ];

// // CORS configuration options
// const corsOptions = {
//   origin: function (origin, callback) {
//     // Check if the incoming origin is in the allowedOrigins array
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true, // Allow credentials (e.g., cookies, authorization headers)
//   optionsSuccessStatus: 200
// };

// // Use the cors middleware with the configured options
// app.use(cors(corsOptions));
// app.use((req, res, next)=>{
//     res.setHeader("Access-Control-Allow-origin","http://localhost:5173");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-with, Content-Type, Accept"
//     );
//     next();
// })


app.use(
  cors({
    origin: ['https://snackhuub.vercel.app','http://localhost:3000'], // Frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow credentials (cookies, etc.)
  })
);  



app.use('/api', addCartRoutes)
app.use('/api', userRegister)
app.use('/api', loginRouter)
app.use('/api',displayDataRouter )
app.use('/api', foodCategoryRoutes)
app.use('/api', getCart)
app.use('/api',deleteCartRoutes )
app.use('/api',userDetail)
app.use('/api', setOrderRoute)
app.use('/api', getOrderRoute)
app.use('/api', ownerRegisterRoute)
 app.use('/api', addFood)
app.use('/api', getOrderOnIDRoute)
app.use('/api',addProductRoutes)
app.use('/api',getProductDataRoute )  
app.use('/api', getCatDataRoute)
app.use('/api', checkLoginRoute)
app.use('/api',getFavourites)
app.use('/api',addFavouritesRoutes)
app.use('/api',deleteFavouriteRoute)
app.use('/api',updateUserRoute)
app.use('/api', getShopOwnerDetailRoute)
app.use('/api',ownerDetailUpdateRoute)
app.use('/api', getOwnerProductRoute)
app.use('/api', updateShopDetailRoute)
app.use('/api',updateLocationRoutes)
app.use('/api', submitReviewRoute)
app.use('/api', findReviewRoutes)
app.use('/api',getShopOrderRoute )
app.use('/api', getReviewProductRoute)

// app.use('/api',getUserDetailRoute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

