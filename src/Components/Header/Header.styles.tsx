import styled from "styled-components";

export const Container = styled.header`
  height: 96px;
  background: #f5f5f5;
  display: flex;

  .header-content {
    width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 148px;
      height: 40px;
    }

    .header-functions {
      display: flex;
      align-items: center;
      gap: 20px;

      .header-search {
        display: flex;
        background: #fff;
        border-radius: 30px;
        align-items: center;
        padding-left: 10px;
        border: 1px solid #b0b0b0;

        .header-input {
          width: 464px;
          height: 48px;
          border: none;
          border-radius: 30px;
          padding: 5px;
          border: none;
        }

        input:focus {
          border: 0 none;
          outline: 0;
        }
      }

      .header-button {
        width: 176px;
        height: 16px;
        background: #d8d8d8;
      }
    }
  }
`;
