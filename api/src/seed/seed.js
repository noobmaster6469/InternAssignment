import Product from "../models/product.model.js";
import Variation from "../models/variation.model.js";
import Category from "../models/category.model.js";
import Store from "../models/store.model.js";
import { connectDB } from "../lib/db.js";
import dotenv from "dotenv";
dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Store A
    const storeA = await Store.create({
      name: "a",
      contactNumber: "123456789",
      email: "storea@example.com",
      address: "Bhaktapur, Nepal",
      image: "store-a.jpg",
    });

    // Store B
    const storeB = await Store.create({
      name: "b",
      contactNumber: "987654321",
      email: "storeb@example.com",
      address: "Kathmandu, Nepal",
      image: "store-b.jpg",
    });

    // Store A Categories
    const categoryTops = await Category.create({
      name: "Tops",
      store: storeA._id,
    });

    const categoryJackets = await Category.create({
      name: "Jackets",
      store: storeA._id,
    });

    const categoryAccessories = await Category.create({
      name: "Accessories",
      store: storeA._id,
    });

    // Store B Categories
    const categoryBottoms = await Category.create({
      name: "Bottoms",
      store: storeB._id,
    });

    const categoryShoes = await Category.create({
      name: "Shoes",
      store: storeB._id,
    });

    const categoryBags = await Category.create({
      name: "Bags",
      store: storeB._id,
    });

    // Store A Products
    const productTshirt = await Product.create({
      name: "Men's T-Shirt",
      description: "Comfortable cotton t-shirt",
      category: categoryTops._id,
      store: storeA._id,
      basePrice: 500,
    });

    const productJacket = await Product.create({
      name: "Men's Jacket",
      description: "Stylish winter jacket",
      category: categoryJackets._id,
      store: storeA._id,
      basePrice: 1500,
    });

    const productScarf = await Product.create({
      name: "Men's Scarf",
      description: "Warm woolen scarf",
      category: categoryAccessories._id,
      store: storeA._id,
      basePrice: 200,
    });

    // Store B Products
    const productJeans = await Product.create({
      name: "Men's Jeans",
      description: "Stylish blue denim jeans",
      category: categoryBottoms._id,
      store: storeB._id,
      basePrice: 1000,
    });

    const productShoes = await Product.create({
      name: "Men's Sneakers",
      description: "Comfortable white sneakers",
      category: categoryShoes._id,
      store: storeB._id,
      basePrice: 2500,
    });

    const productBag = await Product.create({
      name: "Men's Leather Bag",
      description: "Premium leather shoulder bag",
      category: categoryBags._id,
      store: storeB._id,
      basePrice: 3000,
    });

    // Store A Variations
    await Variation.create([
      {
        productId: productTshirt._id,
        size: "M",
        color: "Red",
        image: "red-tshirt-m.jpg",
        price: 500,
        stock: 10,
      },
      {
        productId: productTshirt._id,
        size: "L",
        color: "Blue",
        image: "blue-tshirt-l.jpg",
        price: 550,
        stock: 5,
      },
      {
        productId: productJacket._id,
        size: "M",
        color: "Black",
        image: "black-jacket-m.jpg",
        price: 1500,
        stock: 8,
      },
      {
        productId: productJacket._id,
        size: "L",
        color: "Grey",
        image: "grey-jacket-l.jpg",
        price: 1550,
        stock: 4,
      },
      {
        productId: productScarf._id,
        size: "One Size",
        color: "Red",
        image: "red-scarf.jpg",
        price: 200,
        stock: 20,
      },
      {
        productId: productScarf._id,
        size: "One Size",
        color: "Blue",
        image: "blue-scarf.jpg",
        price: 220,
        stock: 15,
      },
    ]);

    // Store B Variations
    await Variation.create([
      {
        productId: productJeans._id,
        size: "32",
        color: "Black",
        image: "black-jeans-32.jpg",
        price: 1000,
        stock: 8,
      },
      {
        productId: productJeans._id,
        size: "34",
        color: "Blue",
        image: "blue-jeans-34.jpg",
        price: 1050,
        stock: 4,
      },
      {
        productId: productShoes._id,
        size: "8",
        color: "White",
        image: "white-sneakers-8.jpg",
        price: 2500,
        stock: 12,
      },
      {
        productId: productShoes._id,
        size: "9",
        color: "Black",
        image: "black-sneakers-9.jpg",
        price: 2600,
        stock: 10,
      },
      {
        productId: productBag._id,
        size: "One Size",
        color: "Brown",
        image: "brown-leather-bag.jpg",
        price: 3000,
        stock: 7,
      },
      {
        productId: productBag._id,
        size: "One Size",
        color: "Black",
        image: "black-leather-bag.jpg",
        price: 3200,
        stock: 5,
      },
    ]);

    console.log("Data seeded successfully!");
  } catch (err) {
    console.error("Error seeding data:", err);
  }
};

seedData();
