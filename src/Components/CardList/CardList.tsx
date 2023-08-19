import { Container } from "./CardList.styles";
import UserImage from "../../assets/user.jpg";

interface IUser {
  name: any;
  location: any;
  picture: any;
}

export const CardList = ({ name, location, picture }: IUser) => {
  const { first, last } = name;
  const { large } = picture;
  const { street, city, state, postcode } = location;
  return (
    <Container>
      <div className="card-content">
        <img src={large} alt="" />
        <h2>
          {first[0].toUpperCase() + first.substring(1)}{" "}
          {last[0].toUpperCase() + last.substring(1)}
        </h2>

        <div className="user-info">
          <span>{street}</span>

          <span className="city">
            {city[0].toUpperCase() + city.substring(1)}
           
          </span>
          <span className="cep"> {state[0].toUpperCase() + state.substring(1)}  CEP: {postcode}</span>
        </div>
      </div>
    </Container>
  );
};
