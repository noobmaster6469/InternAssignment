import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { stores } from "../constants";
import { useStoreStore } from "../store/useStoreStore";
import WrongStore from "../component/WrongStore";
import StoreInfos from "../component/StoreInfos";
import Category from "../component/Category";
import Products from "../component/Products";

const Store = () => {
  const { initializeStore, storeInfo } = useStoreStore();
  const { slug } = useParams();

  useEffect(() => {
    if (slug && stores.includes(slug)) {
      initializeStore(slug);
    }
  }, [slug, initializeStore]);

  if (!slug || !stores.includes(slug)) {
    return (
      <div>
        <WrongStore />
      </div>
    );
  }

  if (!storeInfo) return <div>Loading store data...</div>;

  return (
    <div>
      <StoreInfos storeInfo={storeInfo} />
      <Category />
      <Products />
    </div>
  );
};

export default Store;
