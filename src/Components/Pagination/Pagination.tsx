import { useGameStore } from "../../store/users";
import { Container } from "./Pagination.styles";
import { AiOutlineDown } from "react-icons/ai"

export const Pagination = () => {
  const userLenght = useGameStore(state => state.userLenght);
  const userFilterLenght = useGameStore(state => state.userFilterLenght);
  const updateOrigin = useGameStore(state => state.updateOrigin);
  const updateUser = useGameStore(state => state.updateUser);

  const handleOrder = (e: any) => {
    updateUser(e);
    updateOrigin('order');
  };

  return (
    <Container>
      <span>Exibindo  {userFilterLenght.length} de {userLenght.length}  itens</span>

      <span>ordenar por: <button onClick={e => handleOrder(e)}>A-Z </button>
      </span>
    </Container>
  );
};
