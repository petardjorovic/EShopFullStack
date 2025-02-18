import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoriesComponent() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesStore);

  return (
    <div className="bg-gray-200 py-[10px]">
      <div className="container mx-auto">
        <button className="bg-mainBlue text-whiteTextColor py-[6px] px-[24px] rounded-md hover:bg-mainYellow transition-all duration-300">
          Show Categories
        </button>
      </div>
    </div>
  );
}

export default CategoriesComponent;
