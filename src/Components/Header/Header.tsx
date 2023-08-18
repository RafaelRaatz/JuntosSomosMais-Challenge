import { Container } from "./Header.styles";
import { AiOutlineSearch } from "react-icons/ai";
import LogoImage from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Container>
      <div className="header-content">
        <div>
          <img className="logo" src={LogoImage} alt="" />
        </div>
        <div className="header-functions">
          <div className="header-search">
            <AiOutlineSearch />

            <input
              className="header-input"
              type="text"
              placeholder="Buscar Aqui"
            />
          </div>

          <button className="header-button"></button>
          <button className="header-button"></button>
        </div>
      </div>
    </Container>
  );
};
