const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        set: (value) => value.toLowerCase().replace(/\s+/g, ' ')
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
        trim: true,
        set: (value) => value.toLowerCase().replace(/\s+/g, ' ')
    },
    category: {
        type: String,
        required: true,
        set: (value) => value.trim().toLowerCase()
    },
    discount: {
        type: Number,
        min: 0
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: 0
    },
    description: [{
        title: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }],
    photo: {
        public_id: String,
        url: String
    },
    stock: {
        type: Number,
        default: 0,
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        trim: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    sku: {
        type: String,
        unique: true,
        sparse: true,
    },

}, {
    timestamps: true,
});

productSchema.pre('save', function (next) {
    if (!this.sku) {
        this.sku = `${this.name.slice(0, 3)}-${this.brand.slice(0, 3)}-${Date.now()}`.toUpperCase();
    }
    next();
});


// Prevent duplicate products in same location with same brand and name
productSchema.index({ name: 1, brand: 1, location: 1 }, { unique: true });

const Product = mongoose.model("product", productSchema);
module.exports = Product;
