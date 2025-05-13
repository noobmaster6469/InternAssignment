import React, { useEffect } from "react";
import { useCategoryStore } from "../store/useCategoryStore.js";
import { useStoreStore } from "../store/useStoreStore.js";
import { useActiveStore } from "../store/useActiveStore.js";

const Category = () => {
  const { store } = useStoreStore();
  const { categories, getCategories, setActiveCategory } = useCategoryStore();
  const { activeStatus, setActiveStatus } = useActiveStore();

  useEffect(() => {
    if (store) {
      getCategories(store);
    }
  }, [store, getCategories]);

  // Function to handle the active status
  const handleCategoryClick = (categoryId) => {
    if (activeStatus === categoryId) {
      setActiveStatus(null); // If the same category is clicked again, set activeStatus to null
    } else {
      setActiveStatus(categoryId);
    }
    setActiveCategory(categoryId); // Set the active category in the other store
  };

  return (
    <div className="px-8 py-4">
      <ul className="flex gap-6">
        <li onClick={() => handleCategoryClick(null)}>
          <button
            className={`text-xl px-4 py-2 border-4 rounded-xl transition-all duration-300 ${
              activeStatus === null
                ? "bg-emerald-600 text-white border-emerald-600"
                : "border-emerald-600 hover:bg-emerald-600 hover:text-white"
            }`}
          >
            All
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat._id} onClick={() => handleCategoryClick(cat._id)}>
            <button
              className={`text-xl px-4 py-2 border-4 rounded-xl transition-all duration-300 ${
                activeStatus === cat._id
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-emerald-600 hover:bg-emerald-600 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
