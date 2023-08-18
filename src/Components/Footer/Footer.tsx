import { Container } from "./Footer.styles";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import LogoImage from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <Container>
      <div className="footer-content">
        <div className="logo">
          <img src={LogoImage} alt="" />

          <span>Juntos Somos Mais Fidelização S.A.</span>
        </div>

        <div className="social-media">
          <span>Siga nos nas redes sociais:</span>

          <div className="icons">
            <BsFacebook className="icon"/>
            <BsInstagram className="icon" />
            <BsLinkedin className="icon" />
          </div>
        </div>
      </div>
    </Container>
  );
};
