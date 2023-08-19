import styled from "styled-components";

export const Container = styled.div`
  height: 296px;
  background: #3a3a3a;
  display: flex;
  color: #fff;
  margin-top: 150px;

  .footer-content {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;

    .logo {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;

      img {
        width: 176px;
        filter: contrast(0) brightness(2);
      }
    }
    .social-media {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      .icons {
        display: flex;
        flex-direction: row;
        gap: 20px;
        color: #28b0fc;

        .icon {
          font-size: 30px;
        }
      }
    }
  }
`;
