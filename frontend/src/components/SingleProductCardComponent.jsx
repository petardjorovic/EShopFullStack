import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function SingleProductCardComponent({ product }) {
  return (
    <div className="w-[250px] border-2 border-slate-400 rounded-lg h-[300px] flex flex-col gap-[5px] transition-all duration-300 hover:border-slate-600">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-[100%] h-[60%] object-contain"
      />

      <div className="flex flex-col items-start justify-between h-[40%] py-[10px] px-[10px]">
        <Link
          className="text-mainBlue text-l"
          to={"/productDetail/" + product.id}
        >
          {product.title}
        </Link>
        <p className="flex-center flex-row gap-[10px]">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            size="small"
            readOnly
          />{" "}
          <span className="badge">{product.rating}</span>
        </p>
        <p className="text-2xl font-bold">${product.price}</p>
      </div>
    </div>
  );
}

export default SingleProductCardComponent;
