import logo from "./../../../../public/Logo.svg"

const LogoTitleNavbar = () => {
  return (
    <div className="flex gap-2">
        <img src={logo} alt="logo" />
        <h2 className="font-logoFont">Daneízo</h2>
    </div>
  )
}

export default LogoTitleNavbar