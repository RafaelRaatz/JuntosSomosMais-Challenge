import { useEffect, useState } from "react";
import { CardList } from "..";
import { Container } from "./List.styles";
import { api } from "../../Services/api";
import { useGameStore } from "../../store/users";

export const List = () => {
  const [user, setUser] = useState<any[]>([]);
  const [visible, setVisible] = useState(9);
  const states = useGameStore((state) => state.states);
  const origin = useGameStore((state) => state.origin);
  const [userFiltered, setUserFiltered] = useState<any[]>([]);
  const updateLenght = useGameStore((state) => state.updateLenght);
  const updateFilterLenght = useGameStore((state) => state.updateFilterLenght);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 9);
  };

  const getUser = async () => {
    try {
      const response = await api.get("/members");
      const data = response?.data?.results;

      return setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (states === "") {
      setUserFiltered(user);
      return;
    }

    if (origin === "filter") {
      const filtered = user.filter((users) =>
        users.location.state.includes(states)
      );
      return setUserFiltered(filtered);
    }

    if (origin === "search") {
      const filtered = user.filter(
        (users) =>
          users.name.first.toLowerCase().includes(states) ||
          users.name.last.toLowerCase().includes(states)
      );
      return setUserFiltered(filtered);
    }
    if (origin === "order") {
      const ordain = user.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
      return setUserFiltered(ordain);
    }
  }, [states, user]);

  updateFilterLenght(userFiltered);
  updateLenght(user);

  return (
    <Container>
      <div className="list">
        {userFiltered?.slice(0, visible).map((user, key) => (
          <CardList
            key={key}
            name={user.name}
            location={user.location}
            picture={user.picture}
          />
        ))}
      </div>

      <div className="show-more">
        <button className="list-button" onClick={showMoreItems}>
          Mostrar mais
        </button>
      </div>
    </Container>
  );
};
