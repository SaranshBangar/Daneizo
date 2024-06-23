import LinksNavbar from "./Navbar Components/LinksNavbar"
import LogoTitleNavbar from "./Navbar Components/LogoTitleNavbar"
import SearchNavbar from "./Navbar Components/SearchNavbar"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-[#28354F] to-[#040312] w-full h-[80px] flex justify-between px-[102px]">
        <section>
            <LogoTitleNavbar />
        </section>
        <section>
            <SearchNavbar />
        </section>
        <section>
            <LinksNavbar />
        </section>
    </nav>
  )
}

export default Navbar