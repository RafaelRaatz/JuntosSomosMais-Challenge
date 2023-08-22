import { Container } from "./CardList.styles";

interface IUser {
  name: any;
  location: any;
  picture: any;
}

export const CardList = ({ name, location, picture }: IUser) => {
  return (
    <Container>
      <div className="card-content">
        <img src={picture.large} alt="" />
        <h2>
          {name.first[0].toUpperCase() + name.first.substring(1)}{" "}
          {name.last[0].toUpperCase() + name.last.substring(1)}
        </h2>

        <div className="user-info">
          <span>{location.street}</span>

          <span className="city">
            {location.city[0].toUpperCase() + location.city.substring(1)}
          </span>
          <span className="cep">
            {" "}
            {location.state[0].toUpperCase() +
              location.state.substring(1)} CEP: {location.postcode}
          </span>
        </div>
      </div>
    </Container>
  );
};
