import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 848px;

  .list {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    margin-top: 16px;
  }

  .show-more{
    display: flex;
    justify-content: center;
    margin-top: 40px;

    button{
      background-color: #fff;
      border: 1px solid #808080;
    }
  }
`;
