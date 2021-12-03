import Logo from "../navbar/Logo"
import LogoMobile from "../navbar/LogoMobile"
import InstagramMobile from "../navbar/InstagramMobile"
import Pesquisa from "../navbar/Pesquisa"
import Icones from "../navbar/Icones"
import IconesMobile from "../navbar/IconesMobile"

export default function Navbar() {
    return (
      <div class="navbar">
        <div class="container">
          <Logo />
          <LogoMobile />
          <InstagramMobile />
          <Pesquisa />
          <Icones />
          <IconesMobile />
        </div>
      </div>
    )
}