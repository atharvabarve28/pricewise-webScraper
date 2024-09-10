import { url } from "inspector";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    currency: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    priceHistory: [
      {
        price: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    lowestPrice: {
      type: Number,
    },
    highestprice: {
      type: Number,
    },
    averagePrice: {
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    category: {
      type: String,
    },
    reviewCount: {
      type: Number,
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
    users: [{ type: String, required: true }],
    default: [],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
