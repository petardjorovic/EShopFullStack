import HeadingComponent from "./HeadingTopComponent";
import CategoriesComponent from "./CategoriesComponent";
import Logo from "../assets/Logo.svg";

// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <header>
      <HeadingComponent />
      <nav className="bg-mainBlue h-full lg:h-[100px] py-[14px]">
        <div className="container mx-auto h-full flex flex-col lg:flex-row gap-[10px] items-center justify-between">
          {/* Logotip */}
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>

          {/* Search bar */}
          <div className="bg-whiteTextColor rounded-[20px]">
            <input
              type="text"
              placeholder="Search products"
              className="bg-transparent py-[17px] px-[24px] outline-none"
            />
            <button className="bg-mainYellow text-whiteTextColor rounded-[20px] py-[17px] px-[24px]">
              Search
            </button>
          </div>
          {/* Nav Menu Items */}
          <div className="flex-center gap-[30px]">
            <div className="flex-center gap-[5px]">
              <CiUser size={24} color="white" />
              <span className="text-whiteTextColor">
                <Link to={"/login"} className="text-white">
                  Login
                </Link>{" "}
                /{" "}
                <Link
                  to={"/register"}
                  className="font-bold text-whiteTextColor"
                >
                  Register
                </Link>
              </span>
            </div>
            <div className="flex-center">
              <div className="flex-center">
                <CiHeart size={24} color="white" />
                <span className="badge-counter">0</span>
              </div>
              <Link to={"/"} className="text-whiteTextColor">
                Favorite
              </Link>
            </div>
            <div className="flex-center">
              <div className="flex-center">
                <CiShoppingCart size={24} color="white" />
                <span className="badge-counter">0</span>
              </div>
              <Link to={"/cart"} className="text-whiteTextColor">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <CategoriesComponent />
    </header>
  );
}

export default NavbarComponent;
