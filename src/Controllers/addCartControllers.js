const { ProductData } = require("../Modules/Products");
const { FoodCart } = require("../Modules/cartData");

const addCartControllers = async (req, res) => {
    const mail = req.email;
    const productId = req.body.data.id; 
    console.log(productId)
    const { size, qty } = req.body; 
    const email=req.email

    try {
        const item = await ProductData.findOne({ _id: productId }).exec();
        if (!item) {
            return res.status(404).json({ message: "Product not available" });
        }

        const existingCartItems = await FoodCart.find({ id: productId }).exec();

        const userCartItem = existingCartItems.find(cartItem => cartItem.email === mail);

        if (userCartItem) {
            return res.status(404).json({ success: false, message: "Item already added in cart" });
        }

        const newFoodCartObject = new FoodCart({
            email: mail,
            id: productId,
            size: size,
            qty: qty,
            CategoryName: item.product_category,
            name: item.product_name,
            img: item.product_images.image1,
            price: item.product_price,
            description: item.product_description,
            deliveryTime: item.product_deliveryTime
        });

        await newFoodCartObject.save();
        res.status(200).json({ message: "Item added in cart Successfully" });

    } catch (err) {
        res.status(500).json({ message: "problem while data saving", error: err });
    }
};

module.exports = { addCartControllers };
