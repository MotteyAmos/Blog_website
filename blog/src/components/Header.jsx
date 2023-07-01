import { images } from "../constants";

const navItemsInfo = [
    {name: "Home"},
    {name: "Articles"},
    {name: "Pages"},
    {name: "Pricing"},
    {name: "Faq"}
]

const NavItem = ({name}) => {
  return (
    <li className="relative group">
      <a href="/" className="px-2 py-2">
        {name}
      </a>
      <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
        /
      </span>
    </li>
  );
};
const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5 py-5 flex justify-between">
        <div>
          <img src={images.logo} alt="logo" />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-5 font-semibold">
            {
                navItemsInfo.map((item, key)=>{
                    return(
                        <NavItem key={key} name={item.name}/>
                    )
                })
            }
          </ul>
          <button className="border-2 border-blue-500 px-6 rounded-full py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
