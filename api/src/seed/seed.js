// import Product from "../models/product.model.js";
// import Variation from "../models/variation.model.js";
// import Category from "../models/category.model.js";
// import Store from "../models/store.model.js";
// import { connectDB } from "../lib/db.js";
// import dotenv from "dotenv";
// dotenv.config();

// const seedData = async () => {
//   try {
//     await connectDB();

//     // Store A
//     const storeA = await Store.create({
//       name: "a",
//       contactNumber: "123456789",
//       email: "storea@example.com",
//       address: "Bhaktapur, Nepal",
//       image: "store-a.jpg",
//     });

//     // Store B
//     const storeB = await Store.create({
//       name: "b",
//       contactNumber: "987654321",
//       email: "storeb@example.com",
//       address: "Kathmandu, Nepal",
//       image: "store-b.jpg",
//     });

//     // Store A Categories
//     const categoryTops = await Category.create({
//       name: "Tops",
//       store: storeA._id,
//     });

//     const categoryJackets = await Category.create({
//       name: "Jackets",
//       store: storeA._id,
//     });

//     const categoryAccessories = await Category.create({
//       name: "Accessories",
//       store: storeA._id,
//     });

//     // Store B Categories
//     const categoryBottoms = await Category.create({
//       name: "Bottoms",
//       store: storeB._id,
//     });

//     const categoryShoes = await Category.create({
//       name: "Shoes",
//       store: storeB._id,
//     });

//     const categoryBags = await Category.create({
//       name: "Bags",
//       store: storeB._id,
//     });

//     // Store A Products
//     const productTshirt = await Product.create({
//       name: "Men's T-Shirt",
//       description: "Comfortable cotton t-shirt",
//       category: categoryTops._id,
//       store: storeA._id,
//       basePrice: 500,
//     });

//     const productJacket = await Product.create({
//       name: "Men's Jacket",
//       description: "Stylish winter jacket",
//       category: categoryJackets._id,
//       store: storeA._id,
//       basePrice: 1500,
//     });

//     const productScarf = await Product.create({
//       name: "Men's Scarf",
//       description: "Warm woolen scarf",
//       category: categoryAccessories._id,
//       store: storeA._id,
//       basePrice: 200,
//     });

//     // Store B Products
//     const productJeans = await Product.create({
//       name: "Men's Jeans",
//       description: "Stylish blue denim jeans",
//       category: categoryBottoms._id,
//       store: storeB._id,
//       basePrice: 1000,
//     });

//     const productShoes = await Product.create({
//       name: "Men's Sneakers",
//       description: "Comfortable white sneakers",
//       category: categoryShoes._id,
//       store: storeB._id,
//       basePrice: 2500,
//     });

//     const productBag = await Product.create({
//       name: "Men's Leather Bag",
//       description: "Premium leather shoulder bag",
//       category: categoryBags._id,
//       store: storeB._id,
//       basePrice: 3000,
//     });

//     // Store A Variations
//     await Variation.create([
//       {
//         productId: productTshirt._id,
//         size: "M",
//         color: "Red",
//         image: "red-tshirt-m.jpg",
//         price: 500,
//         stock: 10,
//       },
//       {
//         productId: productTshirt._id,
//         size: "L",
//         color: "Blue",
//         image: "blue-tshirt-l.jpg",
//         price: 550,
//         stock: 5,
//       },
//       {
//         productId: productJacket._id,
//         size: "M",
//         color: "Black",
//         image: "black-jacket-m.jpg",
//         price: 1500,
//         stock: 8,
//       },
//       {
//         productId: productJacket._id,
//         size: "L",
//         color: "Grey",
//         image: "grey-jacket-l.jpg",
//         price: 1550,
//         stock: 4,
//       },
//       {
//         productId: productScarf._id,
//         size: "One Size",
//         color: "Red",
//         image: "red-scarf.jpg",
//         price: 200,
//         stock: 20,
//       },
//       {
//         productId: productScarf._id,
//         size: "One Size",
//         color: "Blue",
//         image: "blue-scarf.jpg",
//         price: 220,
//         stock: 15,
//       },
//     ]);

//     // Store B Variations
//     await Variation.create([
//       {
//         productId: productJeans._id,
//         size: "32",
//         color: "Black",
//         image: "black-jeans-32.jpg",
//         price: 1000,
//         stock: 8,
//       },
//       {
//         productId: productJeans._id,
//         size: "34",
//         color: "Blue",
//         image: "blue-jeans-34.jpg",
//         price: 1050,
//         stock: 4,
//       },
//       {
//         productId: productShoes._id,
//         size: "8",
//         color: "White",
//         image: "white-sneakers-8.jpg",
//         price: 2500,
//         stock: 12,
//       },
//       {
//         productId: productShoes._id,
//         size: "9",
//         color: "Black",
//         image: "black-sneakers-9.jpg",
//         price: 2600,
//         stock: 10,
//       },
//       {
//         productId: productBag._id,
//         size: "One Size",
//         color: "Brown",
//         image: "brown-leather-bag.jpg",
//         price: 3000,
//         stock: 7,
//       },
//       {
//         productId: productBag._id,
//         size: "One Size",
//         color: "Black",
//         image: "black-leather-bag.jpg",
//         price: 3200,
//         stock: 5,
//       },
//     ]);

//     console.log("Data seeded successfully!");
//   } catch (err) {
//     console.error("Error seeding data:", err);
//   }
// };

// seedData();

import Product from "../models/product.model.js";
import Variation from "../models/variation.model.js";
import Category from "../models/category.model.js";
import Store from "../models/store.model.js";
import { connectDB } from "../lib/db.js";
import dotenv from "dotenv";
dotenv.config();

const createProductWithVariations = async (
  name,
  desc,
  categoryId,
  storeId,
  basePrice,
  baseImage,
  sizes,
  colors
) => {
  const product = await Product.create({
    name,
    description: desc,
    category: categoryId,
    store: storeId,
    basePrice,
  });

  const variations = [];
  for (let i = 0; i < 3; i++) {
    variations.push({
      productId: product._id,
      size: sizes[i % sizes.length],
      color: colors[i % colors.length],
      image: `${baseImage}-${colors[i % colors.length].toLowerCase()}-${sizes[
        i % sizes.length
      ].toLowerCase()}.jpg`,
      price: basePrice + i * 50,
      stock: 10 - i * 2,
    });
  }

  await Variation.create(variations);
};

const seedData = async () => {
  try {
    await connectDB();

    // Stores
    const storeA = await Store.create({
      name: "a",
      contactNumber: "123456789",
      email: "storea@example.com",
      address: "Bhaktapur, Nepal",
      image: "store-a.jpg",
    });
    const storeB = await Store.create({
      name: "b",
      contactNumber: "987654321",
      email: "storeb@example.com",
      address: "Kathmandu, Nepal",
      image: "store-b.jpg",
    });

    // Store A Categories
    const categoriesA = await Category.create([
      { name: "Tops", store: storeA._id },
      { name: "Jackets", store: storeA._id },
      { name: "Accessories", store: storeA._id },
      { name: "Hoodies", store: storeA._id },
    ]);

    // Store B Categories
    const categoriesB = await Category.create([
      { name: "Bottoms", store: storeB._id },
      { name: "Shoes", store: storeB._id },
      { name: "Bags", store: storeB._id },
      { name: "Watches", store: storeB._id },
    ]);

    const productSeeds = [
      // Store A Products
      {
        categoryList: categoriesA,
        store: storeA._id,
        products: [
          [
            "Men's T-Shirt",
            "Comfortable cotton t-shirt",
            500,
            "tshirt",
            ["M", "L", "XL"],
            ["Red", "Blue", "Black"],
          ],
          [
            "Casual Shirt",
            "Button-down casual wear",
            700,
            "casual-shirt",
            ["M", "L", "XL"],
            ["White", "Navy", "Green"],
          ],
          [
            "Formal Shirt",
            "Office wear formal shirt",
            800,
            "formal-shirt",
            ["M", "L", "XL"],
            ["Sky", "Grey", "Beige"],
          ],

          [
            "Denim Jacket",
            "Warm and rugged",
            1500,
            "denim-jacket",
            ["M", "L", "XL"],
            ["Black", "Blue", "Khaki"],
          ],
          [
            "Bomber Jacket",
            "Trendy bomber style",
            1600,
            "bomber-jacket",
            ["M", "L", "XL"],
            ["Green", "Grey", "Maroon"],
          ],
          [
            "Puffer Jacket",
            "Cold-weather jacket",
            1800,
            "puffer-jacket",
            ["M", "L", "XL"],
            ["Red", "Black", "White"],
          ],

          [
            "Wool Scarf",
            "Soft wool scarf",
            200,
            "wool-scarf",
            ["One Size", "One Size", "One Size"],
            ["Red", "Blue", "Grey"],
          ],
          [
            "Leather Belt",
            "Genuine leather belt",
            350,
            "leather-belt",
            ["M", "L", "XL"],
            ["Brown", "Black", "Tan"],
          ],
          [
            "Sunglasses",
            "Polarized unisex shades",
            500,
            "sunglasses",
            ["One Size", "One Size", "One Size"],
            ["Black", "Brown", "Blue"],
          ],

          [
            "Graphic Hoodie",
            "Printed stylish hoodie",
            900,
            "graphic-hoodie",
            ["M", "L", "XL"],
            ["White", "Black", "Red"],
          ],
          [
            "Zip Hoodie",
            "Zippered warm hoodie",
            950,
            "zip-hoodie",
            ["M", "L", "XL"],
            ["Grey", "Navy", "Maroon"],
          ],
          [
            "Plain Hoodie",
            "Simple soft hoodie",
            800,
            "plain-hoodie",
            ["M", "L", "XL"],
            ["Beige", "Olive", "Blue"],
          ],
        ],
      },

      // Store B Products
      {
        categoryList: categoriesB,
        store: storeB._id,
        products: [
          [
            "Slim Fit Jeans",
            "Stylish slim jeans",
            1000,
            "slim-jeans",
            ["30", "32", "34"],
            ["Black", "Blue", "Grey"],
          ],
          [
            "Chinos",
            "Smart casual pants",
            1100,
            "chinos",
            ["30", "32", "34"],
            ["Khaki", "Navy", "Olive"],
          ],
          [
            "Cargo Pants",
            "Utility cargo pants",
            1200,
            "cargo-pants",
            ["30", "32", "34"],
            ["Green", "Black", "Brown"],
          ],

          [
            "Running Shoes",
            "Lightweight for sports",
            2500,
            "running-shoes",
            ["8", "9", "10"],
            ["White", "Black", "Blue"],
          ],
          [
            "Leather Shoes",
            "Formal leather shoes",
            3000,
            "leather-shoes",
            ["8", "9", "10"],
            ["Brown", "Black", "Tan"],
          ],
          [
            "Casual Sneakers",
            "Daily wear sneakers",
            2200,
            "casual-sneakers",
            ["8", "9", "10"],
            ["White", "Red", "Grey"],
          ],

          [
            "Messenger Bag",
            "Casual leather bag",
            2800,
            "messenger-bag",
            ["One Size", "One Size", "One Size"],
            ["Brown", "Black", "Tan"],
          ],
          [
            "Laptop Bag",
            "Professional laptop bag",
            3200,
            "laptop-bag",
            ["One Size", "One Size", "One Size"],
            ["Black", "Grey", "Blue"],
          ],
          [
            "Backpack",
            "Multipurpose backpack",
            2000,
            "backpack",
            ["One Size", "One Size", "One Size"],
            ["Red", "Green", "Black"],
          ],

          [
            "Smart Watch",
            "Fitness & notifications",
            3500,
            "smart-watch",
            ["One Size", "One Size", "One Size"],
            ["Black", "Grey", "Blue"],
          ],
          [
            "Analog Watch",
            "Classic design",
            4000,
            "analog-watch",
            ["One Size", "One Size", "One Size"],
            ["Brown", "Black", "Silver"],
          ],
          [
            "Digital Watch",
            "Modern LED display",
            3000,
            "digital-watch",
            ["One Size", "One Size", "One Size"],
            ["Red", "Black", "Blue"],
          ],
        ],
      },
    ];

    for (const seed of productSeeds) {
      for (let i = 0; i < seed.products.length; i++) {
        const category = seed.categoryList[Math.floor(i / 3)];
        const [name, desc, price, image, sizes, colors] = seed.products[i];
        await createProductWithVariations(
          name,
          desc,
          category._id,
          seed.store,
          price,
          image,
          sizes,
          colors
        );
      }
    }

    console.log("Large data seeded successfully!");
  } catch (err) {
    console.error("Error seeding data:", err);
  }
};

seedData();
