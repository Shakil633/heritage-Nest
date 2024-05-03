import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" max-w-[1440px] mx-auto bg-[#ECF5FF] h-[96px] fixed top-0 right-0 left-0 z-50">
      <div className="navbar max-w-[1216px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/page2"}>Buy</NavLink>
              </li>
              <li className=" mr-2">
                <NavLink to={"/page5"}>About</NavLink>
              </li>
              <li>
                <a>Sell</a>
              </li>
              <li>
                <a>Services</a>
              </li>

              <li>
                <a>Manage Rentals </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg font-normal">
                <li className=" mr-2">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className=" mr-2">
                  <NavLink to={"/page2"}>Buy</NavLink>
                </li>
                <li className=" mr-2">
                  <NavLink to={"/page5"}>About</NavLink>
                </li>
                
                <li className=" mr-2">
                  <a>Sell</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Link to={"/"}>
            <img
              className="w-[53.289px] h-[80px]"
              src="https://i.ibb.co/R24kn3w/Hertiage-Nest-Final-LOGO-1-1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <a> Manage Rentals</a>
              </li>
            </ul>
          </div>
          <button className="p-2 text-lg ml-2 font-normal rounded-lg bg-transparent border border-transparent hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
