import React, { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { useStoreStore } from "../store/useStoreStore.js";
import { useCategoryStore } from "../store/useCategoryStore.js";
import { useOrderStore } from "../store/useOrderStore.js";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useProductStore();
  const { activeCategory } = useCategoryStore();
  const { storeInfo } = useStoreStore();
  const { order, addToCart, setStore, setOrder } = useOrderStore();

  useEffect(() => {
    if (storeInfo?._id) {
      getProducts(storeInfo._id, activeCategory);
    }
    setStore(storeInfo.name);
    setOrder(storeInfo.name);
  }, [storeInfo, getProducts, activeCategory, setOrder]);
  console.log("Products:", products);
  console.log("activeCategory:", activeCategory);
  console.log("storeInfo:", storeInfo.name);
  console.log("order:", order);

  const addHandler = (productVariation) => {
    addToCart(productVariation._id, storeInfo.name);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="card w-full max-w-xs bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <figure>
            <Link
              to={`/store/${storeInfo.name}/${product.defaultVariation._id}`}
            >
              <img
                src={`http://localhost:3000/uploads/${product.defaultVariation.image}`}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg cursor-pointer"
              />
            </Link>
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-lg font-semibold text-primary">
                ${product.defaultVariation.price}
              </div>
              <div className="text-sm font-medium text-gray-600">
                <span className="text-gray-400">Color:</span>{" "}
                {product.defaultVariation.color}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-gray-400">Size:</span>{" "}
              {product.defaultVariation.size}
            </div>
            <div className="card-actions mt-4">
              <button
                className="btn btn-primary w-full"
                onClick={() => addHandler(product.defaultVariation)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
