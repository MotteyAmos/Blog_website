import { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {GoChevronDown} from "react-icons/go";

const navItemsInfo = [
  { name: "Home", type:"link" },
  { name: "Articles", type:"link" },
  { name: "Pages", type:"dropdown", items:["About us", "Contact us"] },
  { name: "Pricing", type:"link" },
  { name: "Faq", type:"link" },
];
 
const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      {item.type ==="link" ? <>
      <a href="/" className="px-2 py-2">
        {item.name}
      </a>
      <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
        /
      </span>
      </> :
      <>
       <a href="/" className="px-4 py-2 flex gap-x-1 items-center">
        
        <span>{item.name}</span>
        <GoChevronDown/>
       </a>
       <div className="hidden translate-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max">
          <ul className="flex flex-col shadow-lg overflow-hidden">
              {
                item.items.map((page, key)=>(
                 
                    <a href="/" key={key}
                    className="hover:bg-slate-900 hover:text-white px-4 py-2 text-white rounded-md lg:text-slate-700">
                      {page}
                     
                    </a>
                
                ))
              }
          </ul>
       </div>
      </>
      }

    </li>
  );
};
const Header = () => {
  const [navIsvisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    return setNavIsVisible(!navIsvisible);
  };
  return (
    <section>
      <header className="container mx-auto px-5 py-5 flex justify-between">
        <div>
          <img src={images.logo} alt="logo" />
        </div>
        <div className="z-50 lg:hidden">
          {navIsvisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsvisible ? "right-0 " : " "
          } transition-all duration-300 mt-[56px] lg:mt-0 text-white lg:text-slate-700 z-49 flex bg-slate-900 lg:bg-transparent fixed -right-full 
          justify-center w-full gap-5 lg:w-auto lg:justify-end bottom-0 top-0 gap-x-9 items-center lg:static flex-col lg:flex-row`}
        >
          <ul className="flex flex-col items-center gap-5 text-md lg:flex-row gap-x-5 font-semibold">
            {navItemsInfo.map((item, key) => {
              return <NavItem key={key} item={item} />;
            })}
          </ul>
          <button className="border-2 border-blue-500 px-6 rounded-full py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold ">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
