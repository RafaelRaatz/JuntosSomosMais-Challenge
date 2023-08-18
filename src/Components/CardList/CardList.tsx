import { Container } from "./CardList.styles";
import  UserImage  from "../../assets/user.jpg";

export const CardList = () => {
  return (
    <Container>
      <div className="card-content">
        <img src={UserImage} alt="" />
        <h2>Joselino Alves</h2>

        <span>Rua Espirito Santo, 2096</span>
        
        <span>São José De Ribamar <br /> Paraná CEP: 96895</span>
      </div>
    </Container>
  );
};
