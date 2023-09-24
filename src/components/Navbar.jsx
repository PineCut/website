import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#9FD996]">PineCut.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 text-[#223240] font-bold ">
          <a>Company</a>
        </li>
        <li className="p-4 text-[#223240] font-bold ">Resources</li>
        <li className="p-4 text-[#223240] font-bold ">About</li>
        <li className="p-4 text-[#223240] font-bold ">Contact</li>
        <li className="p-4 text-[#223240] font-bold ">Legals</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#347355] bg-[#223240] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold  m-4 text-[]">PineCut.</h1>

        <li className="p-4 text-white font-bold  border-b border-white">
          Company
        </li>
        <li className="p-4 text-white font-bold  border-b border-white">
          Resources
        </li>
        <li className="p-4 text-white font-bold  border-b border-white">
          About
        </li>
        <li className="p-4 text-white font-bold  border-b border-white">
          Contact
        </li>
        <li className="p-4 text-white font-bold ">Legals</li>
      </ul>
    </div>
  );
};

export default Navbar;
