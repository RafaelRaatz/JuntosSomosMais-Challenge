import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;
  height: 474px;
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

        a{
            text-decoration: underline;
            color: #000;
        }
    }
  }
`;
