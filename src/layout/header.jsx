import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[f1e4e1] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex h-20 items-center">
          <img className="h-20" src="/img/B2B.png" alt="loading" link="#" />
        </div>
        <nav>
          <ul className="flex space-x-4 text-center font-semibold text-black">
            <li>
              <Link to="/" className="hover:text-[#19B2E7]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#19B2E7]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-[#19B2E7]">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-[#19B2E7]">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
