import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  max-width: 100vw;
  width: 100%;
  height: 90px;
  background-color: white;
  box-shadow: 0 0 10px 0px black;

  .container-header {
    display: flex;
    height: 100%;
    max-width: 1200px;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: space-evenly;

    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 350px;
      width: 100%;
      height: 32px;
      transition: 0.2s;

      @media (max-width: 410px) {
        max-width: 300px;
      }

      &:hover {
        transform: scale(1.05);
      }

      h1 {
        margin: 0;
        max-width: 270px;
        width: 100%;
        font-size: 23px;

        @media (max-width: 410px) {
          font-size: 18px;
          max-width: max-content;
        }
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 31.5px;

        @media (max-width: 410px) {
          width: 35px;
          height: 26px;
        }

        svg {
          font-size: 32px;

          @media (max-width: 410px) {
            font-size: 26px;
          }
        }
      }
    }
  }
`
