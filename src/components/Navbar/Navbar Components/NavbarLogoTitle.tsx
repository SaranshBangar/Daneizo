const LogoTitleNavbar = () => {
  return (
    <div className="flex gap-2 items-center">
        <a href="/" className="cursor-default">
          {/* Replace the bottom div with the logo */}
          {/* <div className="bg-pink-200 opacity-30 w-[35px] h-[35px]"></div> */}
          <img src="./Logo.svg" alt="" className="size-[35px]" />
        </a>
        <a href="/" className="cursor-default">
          <h2 className="font-praise text-white text-[30px]">Daneízo</h2>
        </a>
    </div>
  );
}

export default LogoTitleNavbar;