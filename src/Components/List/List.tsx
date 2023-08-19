import { useEffect, useState } from "react";
import { CardList } from "..";
import { Container } from "./List.styles";
import { api } from "../../Services/api";

export const List = () => {
  const [user, setUser] = useState<any[]>([]);

  const getUser = async () => {
    try {
      const response = await api.get("/members");
      const data = response?.data?.results;

      console.log(data);
      return setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  },[]);

  return (
    <Container>
       {user?.map((user, key) => (
      <CardList key={key} name={user.name} location={user.location} picture={user.picture} />
      ))}
    </Container>
  );
};
