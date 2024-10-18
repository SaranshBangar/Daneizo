import LinksNavbar from "./Navbar Components/NavbarLinks";
import LogoTitleNavbar from "./Navbar Components/NavbarLogoTitle";
import SearchNavbar from "./Navbar Components/NavbarSearch";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gradient-to-b from-[#28354F] to-[#040312] flex justify-center items-center">
      <nav className="w-[80%] h-[80px] flex justify-between items-center max-sm:w-[95%]">
        <div className="flex items-center space-x-10">
          <LogoTitleNavbar />
          <SearchNavbar />
        </div>
        <div>
          <LinksNavbar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
