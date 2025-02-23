import { useDispatch, useSelector } from "react-redux";
import ProductsServices from "../services/productsServices";
import { useEffect, useState } from "react";
import { saveAllProducts } from "../store/productsSlice";
import LoaderComponent from "../components/LoaderComponent";
import SingleProductCardComponent from "../components/SingleProductCardComponent";

function HomePage() {
  const dispatch = useDispatch();
  const { products, currentCategory } = useSelector(
    (state) => state.productsStore
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    ProductsServices.getAllProducts(currentCategory)
      .then((res) => {
        dispatch(saveAllProducts(res.data));
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [currentCategory]);

  return (
    <main className="container mx-auto">
      {isLoaded ? (
        // wrapper div
        <div className="flex flex-wrap py-[50px] px-[16px] items-center justify-center gap-[50px]">
          {products.map((el, i) => {
            return <SingleProductCardComponent key={i} product={el} />;
          })}
        </div>
      ) : (
        <LoaderComponent />
      )}
    </main>
  );
}

export default HomePage;
