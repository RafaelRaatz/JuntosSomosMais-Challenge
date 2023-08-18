import { List, Pagination } from "../../Components";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "./Home.styles";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="main-title">
          <span>Home - Usuários - Detalhes </span>

          <h1>Lista de membros</h1>
        </div>

        <div className="main-content">

        <Sidebar />
        <div className="main-list">
        <Pagination />
        <List/>
        </div>

        </div>
      </Container>
    </>
  );
};
