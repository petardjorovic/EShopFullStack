import { useDispatch, useSelector } from "react-redux";
import ProductsServices from "../services/productsServices";
import { useEffect, useState } from "react";
import { saveAllProducts } from "../store/productsSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsStore);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    ProductsServices.getAllProducts()
      .then((res) => {
        dispatch(saveAllProducts(res.data));
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div>
          {products.map((el, i) => {
            return <p key={i}>{el.title}</p>;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default HomePage;
