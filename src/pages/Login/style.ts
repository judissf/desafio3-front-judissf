import styled from 'styled-components'
import { ILoginStyleProps } from '../../interfaces'

export const LoginStyle = styled.main<ILoginStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 800px;
  background-color: rgba(230, 230, 230, 0.3);

  .container-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    height: 800px;
    padding-left: 5px;
    padding-right: 5px;

    .content-login {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      max-width: 320px;
      width: 100%;
      height: 400px;
      outline: 1.5px solid black;
      box-shadow: 0 0 5px 2px black;
      border-radius: 0 0 5px 5px;
      background-color: white;

      h2 {
        margin-top: 10px;
        font-size: 28px;
        margin-bottom: 0;
        text-align: center;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-width: 300px;
        width: 100%;
        height: 270px;
        border: none;

        &::after,
        ::before {
          display: block;
          margin: 0 auto;
          content: '';
          width: 150px;
          font-size: 12px;
          height: 5px;
          border-radius: 5px;
          background-color: ${(props) => props.err};
          transition: 0.3s;
        }

        label {
          color: black;
          font-size: 15px;
          font-weight: 700;
          margin-top: 10px;
          width: max-content;
        }

        input {
          max-width: 277px;
          font-size: 15px;
          padding: 0 10px;
          width: 100%;
          height: 32px;
          border: none;
          outline: 2px solid gray;
          border-radius: 0 0 5px 0;
          margin-left: 1px;
          margin-top: 10px;
          transition: 0.2s;

          &:hover {
            outline-color: black;
          }

          &:focus {
            outline-color: black;
          }
        }

        span {
          color: red;
          font-size: 13px;
          font-weight: bold;
          margin-top: 5px;
          height: 20px;
          width: max-content;
        }

        .content-input-password {
          display: flex;
          max-width: 300px;
          width: 100%;
          align-items: center;
          height: 40px;

          input {
            max-width: 240px;
            width: 100%;
            height: 32px;
            border: none;
            border-radius: 0;
            outline: 2px solid gray;
            transition: 0.2s;
          }

          #password {
            margin-top: 0;

            &:hover {
              outline-color: black;
            }
          }

          #toggle-password {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 31px;
            height: 32px;
            margin-left: 6px;
            border: none;
            border-radius: 0 0 5px 0;
            outline: 2px solid gray;
            padding: 0;
            background-color: transparent;
            cursor: pointer;
            color: black;
            transition: 0.2s;

            &:hover {
              outline-color: black;
              background-color: rgba(0, 0, 0, 0.1);
            }

            svg {
              font-size: 17px;
            }
          }
        }

        #submit-button {
          padding: 0;
          width: 300px;
          height: 32px;
          border: none;
          font-size: 16px;
          font-weight: 700;
          background-color: rgba(230, 230, 230, 0.9);
          margin-top: 10px;
          border-radius: 5px;
          margin-bottom: 21px;
          cursor: pointer;
          transition: 0.2s;

          &:hover {
            background-color: black;
            color: white;
          }
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        text-decoration: none;

        #link-to-register {
          height: 32px;
          padding: 0;
          width: 300px;
          font-size: 15px;
          font-weight: 700;
          color: white;
          border: none;
          outline: 2px solid black;
          background-color: black;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.2s;

          &:hover {
            color: black;
            background-color: white;
            outline-color: black;
          }
        }
      }
    }
  }
`
