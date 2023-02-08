import styled from 'styled-components'
import { IHomeStyleProps } from '../../interfaces'

export const HomeStyle = styled.main<IHomeStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(230, 230, 230, 0.3);

  .container-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 1200px;
    width: 100%;
    height: 100vh;

    @media (max-width: 781px) {
      height: 800px;
    }


    .logout-description {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      width: 100%;
      height: 35px;
      margin-top: 20px;
      margin-bottom: 20px;

      &::after,
      ::before {
        display: block;
        content: '';
        background-color: black;
        box-shadow: 0 0 3px;
        width: 230px;
        height: 2px;
        border-radius: 5px;

        @media (max-width: 1155px) {
          width: 0;
          height: 0;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        width: 50px;
        height: 35px;
        background-color: black;
        color: white;
        font-size: 17px;
        font-weight: 500;
        border: none;
        outline: 2px solid black;
        transition: 0.2s;
        cursor: pointer;

        @media (max-width: 710px) {
          width: 40px;
          height: 25px;
        }

        &:hover {
          color: black;
          background-color: white;
        }

        &:active {
          background-color: black;
          color: white;
        }

        svg {
          font-size: 23px;
          margin-left: 5px;

          @media (max-width: 710px) {
            font-size: 18px;
          }
        }
      }

      #description {
        max-width: max-content;
        width: 100%;
        margin: 0;

        @media (max-width: 710px) {
          font-size: 13px;
          height: 35px;
        }
        @media (max-width: 572px) {
          margin-left: 10px;
        }
      }
    }

    .profile-contacts {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
      width: 100%;

      @media (max-width: 781px) {
        flex-direction: column;
      }

      .content-profile {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 200px;
        max-width: 400px;
        width: 100%;

        h2 {
          margin: 0;
          font-size: 18px;
          width: max-content;
        }

        .profile-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: ${(props) => props.width};
          height: 25px;

          p {
            strong {
              color: ${(props) => props.isActive};
            }
          }

          span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;

            svg {
              color: ${(props) => props.isActive};
              font-size: 20px;
            }
          }
        }

        p {
          font-size: 15px;
          margin: 0;
          font-weight: 600;
          width: max-content;
        }

        .edit-add-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 110px;
          width: 100%;
          height: 50px;

          button {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 50px;
            height: 50px;
            padding: 0;
            border: none;
            outline: gray;
            color: black;
            font-size: 15px;
            font-weight: 600;
            background-color: rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: 0.2s;

            &:hover {
              background-color: rgba(0, 0, 0, 0.3);
              color: white;

              svg {
                color: white;
              }
            }

            svg {
              font-size: 26px;
              margin-left: 2px;
            }
          }
        }
      }

      .content-contacts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: 750px;
        width: 100%;
        height: 490px;
        padding: 5px;

        .title-search-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 35px;
          margin-bottom: 5px;

          h3 {
            margin: 0;
            font-size: 20px;

            @media (max-width: 390px) {
              font-size: 15px;
            }
          }

          input {
            height: 25px;
            padding-left: 5px;
            padding-right: 5px;
            margin-right: 2px;
            border: none;
            outline: 2px solid gray;
            border-radius: 0 0 5px 0;
            font-size: 13px;
            width: 300px;

            @media (max-width: 1118px) {
              max-width: 250px;
              width: 100%;
            }

            @media (max-width: 390px) {
              max-width: 200px;
            }
          }
        }

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: wrap;
          height: 490px;
          max-width: 800px;
          width: 100%;
          padding: 0;
          margin-top: 10px;
          background-color: rgba(0, 0, 0, 0.02);
          margin: 0;
          overflow-y: hidden;
          overflow-x: auto;
        }

        .warn-contacts {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 350px;
          width: 100%;
          height: 40px;
          margin: auto;

          span {
            width: 40px;
            height: 40px;
            svg {
              font-size: 40px;
              color: red;
            }
          }

          p {
            font-size: 15px;
            margin: 0;
            font-weight: 600;
          }
        }
      }
    }
  }
`
