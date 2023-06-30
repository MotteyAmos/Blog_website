import { images } from "../constants"

const Header = () => {
  return (
   <section>
    <header className="container mx-auto px-5 py-5 flex justify-between">
        <div>
            <img src={images.logo} alt="logo" />
        </div>
        <div  className="flex gap-x-9 items-center">
            <ul className="flex gap-x-5 font-semibold">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Articles</a>
                </li>
                <li>
                    <a href="/">Pages</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
                <li>
                    <a href="/">Faq</a>
                </li>
            </ul>
            <button className="border-2 border-blue-500 px-6 rounded-full py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold">Sign in</button>
        </div>
    </header>
   </section>
  )
}

export default Header