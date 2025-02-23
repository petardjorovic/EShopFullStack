import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsServices from "../services/productsServices";
import { saveAllCategories } from "../store/categoriesSlice";
import { toast } from "react-toastify";
import { setNewCategoryAction } from "../store/productsSlice";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

function CategoriesComponent() {
  const location = useLocation();
  const [isActiveCat, setIsActiveCat] = useState(false);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesStore);
  const { currentCategory } = useSelector((state) => state.productsStore);
  useEffect(() => {
    ProductsServices.getAllCategories()
      .then((res) => dispatch(saveAllCategories(res.data)))
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, []);

  function handleToggleCat() {
    setIsActiveCat(!isActiveCat);
  }

  return (
    <div className="bg-gray-200 py-[10px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-[20px] md:gap-[20px]">
        <button
          className="bg-mainBlue text-whiteTextColor py-[6px] px-[24px] rounded-md hover:bg-mainYellow transition-all duration-300"
          onClick={location.pathname === "/" ? handleToggleCat : ""}
        >
          {isActiveCat ? "Hide" : "Show"} Categories
        </button>
        {isActiveCat ? (
          ""
        ) : (
          <div className="flex-center gap-[10px]">
            <IoIosArrowForward color="#003F62" />
            <p className="uppercase text-mainBlue font-semibold ">
              {currentCategory}
            </p>
          </div>
        )}
        {isActiveCat ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] place-items-center">
            <li
              onClick={() => {
                dispatch(setNewCategoryAction("All Products"));
                setIsActiveCat(false);
              }}
              className={`${
                currentCategory === "All Products"
                  ? "bg-mainYellow"
                  : "bg-mainBlue"
              } rounded-md text-center w-[250px] cursor-pointer px-[24px] py-[6px] uppercase text-whiteTextColor hover:bg-mainYellow transition-all duration-300`}
            >
              All Products
            </li>
            {categories.map((el, i) => {
              return (
                <li
                  onClick={() => {
                    dispatch(setNewCategoryAction(el));
                    setIsActiveCat(false);
                  }}
                  key={i}
                  className={`${
                    currentCategory === el ? "bg-mainYellow" : "bg-mainBlue"
                  } rounded-md text-center w-[250px] cursor-pointer px-[24px] py-[6px] uppercase text-whiteTextColor hover:bg-mainYellow transition-all duration-300`}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default CategoriesComponent;
