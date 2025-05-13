import React, { useEffect } from "react";
import { useStoreStore } from "../store/useStoreStore.js";
import StoreInfos from "../component/StoreInfos.jsx";
import { useParams } from "react-router-dom";
import { useVariationStore } from "../store/useVariationStore.js";
import { useOrderStore } from "../store/useOrderStore.js";

const Description = () => {
  const { storeInfo, initializeStore } = useStoreStore();
  const { variationId, storeName } = useParams();
  const { variations, mainVariation, getVariation, getAllVariation } =
    useVariationStore();
  const { order, addToCart, setStore, setOrder } = useOrderStore();

  const addHandler = (productVariation) => {
    addToCart(productVariation, storeInfo.name);
  };

  useEffect(() => {
    const fetchVariation = async () => {
      await getVariation(variationId);
      await getAllVariation(variationId);
      await initializeStore(storeName);
    };
    setStore(storeInfo.name);
    setOrder(storeInfo.name);
    fetchVariation();
  }, [variationId, getVariation, getAllVariation, setOrder, setStore]);

  console.log("mainVariation", mainVariation),
    console.log("variations", variations);
  console.log("storeInfo", storeInfo.name);
  if (!mainVariation || variations.length === 0) {
    return <div className="text-center py-10">Loading product...</div>;
  }
  return (
    <>
      <div>
        <StoreInfos storeInfo={storeInfo} />
        {/* main product */}
        <h1 className="text-3xl text-center py-4 text-bold">Main Product:</h1>
        <div className="card w-full max-w-xs bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-auto">
          <figure>
            <img
              src={`http://localhost:3000/uploads/${mainVariation.variation.image}`}
              alt={mainVariation.product.name}
              className="w-full h-64 object-cover rounded-t-lg cursor-pointer"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-semibold">
              {mainVariation.product.name}
            </h2>
            <p className="text-sm text-gray-500">
              {mainVariation.variation.description}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-lg font-semibold text-primary">
                ${mainVariation.variation.price}
              </div>
              <div className="text-sm font-medium text-gray-600">
                <span className="text-gray-400">Color:</span>{" "}
                {mainVariation.variation.color}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <span className="text-gray-400">Size:</span>{" "}
              {mainVariation.variation.size}
            </div>
            <div className="card-actions mt-4">
              <button
                className="btn btn-primary w-full"
                onClick={() => addHandler(mainVariation.variation._id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* all variations */}
        <h1 className="text-3xl text-center py-4 text-bold">
          Product Variations:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {variations.variations.map((vari) => (
            <div
              key={vari._id}
              className="card w-full max-w-xs bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <figure>
                <img
                  src={`http://localhost:3000/uploads/${vari.image}`}
                  alt={mainVariation.product.name}
                  className="w-full h-64 object-cover rounded-t-lg cursor-pointer"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-semibold">
                  {mainVariation.product.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {mainVariation.product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-lg font-semibold text-primary">
                    ${vari.price}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    <span className="text-gray-400">Color:</span> {vari.color}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <span className="text-gray-400">Size:</span> {vari.size}
                </div>
                <h1>{vari._id}</h1>
                <div className="card-actions mt-4">
                  <button
                    className="btn btn-primary w-full"
                    onClick={() => addHandler(vari._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    // <h1>hello</h1>
  );
};

export default Description;
