import { Container } from "./Sidebar.styles";

export const Sidebar = () => {
  return (
    <Container>
      <div className="content">
        <h2>Por estado</h2>

        <div className="inputs">
          <span>
            <input type="checkbox" />
            <label>São Paulo</label>
          </span>
          <span>
            <input type="checkbox" />
            Rio de Janeiro
          </span>
          <span>
            <input type="checkbox" />
            Minas Gerais
          </span>
          <span>
            <input type="checkbox" />
            Espirito Santo
          </span>
          <span>
            <input type="checkbox" />
            Bahia
          </span>

          <a href="">Ver todos</a>
        </div>
      </div>
    </Container>
  );
};
