import { ChangeEvent, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { Container } from "./Sidebar.styles";
import { useGameStore } from "../../store/users";

export const Sidebar = () => {
  const [visible, setVisible] = useState(9);
  const [state, setState] = useState<any[]>([]);
  const updateUser = useGameStore((state) => state.updateUser);
  const updateOrigin = useGameStore((state) => state.updateOrigin);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    updateUser(e.target.value);
    updateOrigin("filter");
  };

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 20);
  };

  const getUser = async () => {
    try {
      const response = await api.get("/members");
      const data = response?.data?.results;

      const uniqueInfoSet = new Set();

      data.map((info: any) => uniqueInfoSet.add(info.location.state));

      const uniqueInfoList = [...uniqueInfoSet];

      setState(uniqueInfoList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <div className="content">
        <h2>Por estado</h2>

        <div className="inputs">
          {state?.slice(0, visible).map((state, key) => (
            <span>
              <input
                type="radio"
                value={state}
                onChange={(e) => handleFilter(e)}
              />
              {state[0].toUpperCase() + state.substring(1)}
            </span>
          ))}

          <button className="list-button" onClick={showMoreItems}>
            Ver todos
          </button>
        </div>
      </div>
    </Container>
  );
};
