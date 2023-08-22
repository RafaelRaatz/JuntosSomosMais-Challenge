import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;
  height: 100%;
  border: 1px solid #e5e5e5;

  .content{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;


    .inputs{
        display: flex;
        flex-direction: column;
        gap: 5px;

        input{
            margin-right: 10px;
        }

        .list-button{
          display: flex;
          margin: 0px;
          background-color: #fff;
          text-decoration: underline;
        }
    }
  }
`;
