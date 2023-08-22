import { Container } from "./Header.styles";
import { AiOutlineSearch } from "react-icons/ai";
import LogoImage from "../../assets/logo.svg";
import { useGameStore } from "../../store/users";
import { ChangeEvent } from "react";

export const Header = () => {
  const updateOrigin = useGameStore(state => state.updateOrigin);
  const updateUser = useGameStore(state => state.updateUser);


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    updateUser(e.target.value);
    updateOrigin("search");
  };

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
              onChange={(e) => handleSearch(e)}
            />
          </div>

          <button className="header-button"></button>
          <button className="header-button"></button>
        </div>
      </div>
    </Container>
  );
};
