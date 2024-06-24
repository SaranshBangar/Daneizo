import logo from "./../../../../public/Logo.svg";

const LogoTitleNavbar = () => {
  return (
    <div className="flex gap-2 items-center">
        <a href="/" className="cursor-default">
          <img src={logo} alt="logo" />
        </a>
        <a href="/" className="cursor-default">
          <h2 className="font-praise text-white text-[30px]">Daneízo</h2>
        </a>
    </div>
  );
}

export default LogoTitleNavbar;