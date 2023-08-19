import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 310px;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #e5e5e5;

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
      width: 120px;
      border-radius: 100px;
    }

    h2 {
      font-size: 20px;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: center;

      .city {
        margin-top: 20px;
        font-size: 14px;
      }

      .cep {
        font-size: 14px;
      }
    }
  }
`;
