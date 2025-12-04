const Product = require("../model/product")
const cloudinary = require("cloudinary").v2 //3

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET 
});
const addProduct = async (req, res) => {
    console.log(req.body);

    try {
        // Check file upload
        if (!req.files || !req.files.photo) {
            return res.status(400).send("Photo is required");
        }

        // Upload to Cloudinary
        const file = req.files.photo;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "inventory_images",
        });

        // Parse description if it's a JSON string
        if (typeof req.body.description === 'string') {
            try {
                req.body.description = JSON.parse(req.body.description);
            } catch (err) {
                return res.status(400).send("Invalid JSON in description field");
            }
        }

        const { name, brand, price, stock, location, sku, category } = req.body;

        const productData = {
            ...req.body,
            photo: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            createdBy: req.result._id, // assuming req.result is set by middleware
        };

        // Save to DB
        const addingproduct = await Product.create(productData);

        res.status(201).send("Product added successfully");
    } catch (err) {
        console.error("Add Product Error:", err);
        res.status(500).send("ERROR: " + err.message);
    }
};



const deleteproduct = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.status(400).send("Missing Id")
        }
        const deleteproduct = await Product.findByIdAndDelete(id)
        if (!deleteproduct) {
            return res.status(404).send("Product IS MISSING")
        }
        res.status(200).send("SUCCESSFULLY DELETED")
    } catch (err) {
        res.status(500).send("ERROR: ", +err)
    }
}

const getAllProduct = async (req, res) => {
    console.log(req.body);
    console.log("hiii");

    try {
        const getproduct = await Product.find({}).select('_id name brand discount category price description photo stock location sku createdBy createdAt')
        // if (getproduct.length == 0) {
        //     return res.status(404).send("No product is able")
        // }
        res.status(200).send(getproduct);
    } catch (err) {
        res.status(500).send("ERROR: ", +err)
    }
}

const updateProductDetails = async (req, res) => {
    console.log(req.body);

    try {
        // Check file upload
        if (!req.files || !req.files.photo) {
            return res.status(400).send("Photo is required");
        }

        // Upload to Cloudinary
        const file = req.files.photo;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "inventory_images",
        });

        // Parse description if it's a JSON string
        if (typeof req.body.description === 'string') {
            try {
                req.body.description = JSON.parse(req.body.description);
            } catch (err) {
                return res.status(400).send("Invalid JSON in description field");
            }
        }

        const { name, brand, price, stock, location, sku, category } = req.body;

        const productData = {
            ...req.body,
            photo: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            createdBy: req.result._id, // assuming req.result is set by middleware
        };
        console.log(productData);
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, productData, {
            runValidators: true,
            new: true,
        });
        res.status(200).send("product updated successfully\n" + updatedProduct)

    } catch (err) {
        console.error("Add Product Error:", err);
        res.status(500).send("ERROR: " + err.message);
    }
};



const getProductByid = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.status(400).send("MISSING ID")
        }
        const findproduct = await Product.findById(id).select('_id name brand discount price description photo stock location sku')
        if (!findproduct) {
            return res.status(400).send("MISSING Product")
        }
        res.status(200).send(findproduct)
    } catch (err) {
        res.status(500).send("ERROR: ", +err)
    }
}

module.exports = { addProduct, deleteproduct, getAllProduct, updateProductDetails, getProductByid }