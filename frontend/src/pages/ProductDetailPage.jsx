import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsServices from "../services/productsServices";
import LoaderComponent from "../components/LoaderComponent";

function ProductDetailPage() {
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    ProductsServices.getSingleProduct(productId).then((res) => {
      setProduct(res.data);
      setIsLoaded(true);
    });
  }, []);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }
  return (
    <div className="px-[16px] py-[50px]">
      {isLoaded ? (
        <div className="container mx-auto flex flex-col md:flex-row gap-[20px]">
          {/* left side */}
          <div className="w-full md:w-[50%] items-center justify-center border">
            <img
              src={product.images[currentImage]}
              alt={product.title}
              className="border"
            />
            <div className="flex items-center justify-center gap-[5px]">
              {product.images.map((el, i) => {
                return (
                  <img
                    className={`w-[100px] border object-contain rounded-md ${
                      currentImage === i ? "border-slate-600" : ""
                    }`}
                    src={el}
                    alt={product.title}
                    key={i}
                    onClick={() => handleCurrentImage(i)}
                  />
                );
              })}
            </div>
          </div>
          {/* right side */}
          <div className="w-[50%] border">
            <h3>{product.title}</h3>
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default ProductDetailPage;
