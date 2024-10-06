import Image from "next/image";

const LogoTitleNavbar = () => {
  return (
    <div className="flex gap-2 items-center">
      <a href="/" className="cursor-default">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={35}
          height={35}
          className="w-[2vw] h-auto" 
        />
      </a>
      <a href="/" className="cursor-default">
        <h2 className="font-praise text-white text-[2rem] md:text-[30px]">Daneízo</h2> 
      </a>
    </div>
  );
}

export default LogoTitleNavbar;
