import styled from 'styled-components'
import { IRegisterStyleProps } from '../../interfaces'

export const RegisterStyle = styled.main<IRegisterStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 900px;
  background-color: rgba(230, 230, 230, 0.3);

  .container-register {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    height: 710px;
    padding-left: 5px;
    padding-right: 5px;

    .content-register {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 700px;
      max-width: 320px;
      width: 100%;
      box-shadow: 0 0 4px 2px black;
      border-radius: 0 0 5px 5px;
      background-color: white;

      h2 {
        margin: 0;
        width: max-content;
        font-size: 28px;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 550px;
        max-width: 300px;
        width: 100%;

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
          width: max-content;
          font-size: 15px;
          font-weight: 700;
          margin-top: 10px;
        }

        input {
          max-width: 276px;
          width: 100%;
          height: 32px;
          padding: 0 10px;
          font-size: 15px;
          border: 0;
          outline: 2px solid gray;
          border-radius: 0 0 5px 0;
          margin-top: 10px;
          margin-left: 2px;
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

        .input-password {
          display: flex;
          align-items: center;
          max-width: 300px;
          width: 100%;
          margin-top: 10px;
          height: 35px;

          #password {
            max-width: 238px;
            margin-top: 0;
            border-radius: 0;
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            padding: 0;
            outline: 2px solid gray;
            background-color: transparent;
            height: 31.5px;
            width: 32px;
            margin-left: 6px;
            border-radius: 0 0 5px 0;
            transition: 0.2s;
            cursor: pointer;

            &:hover {
              outline-color: black;
              background-color: rgba(0, 0, 0, 0.1);
            }

            svg {
              font-size: 17px;
            }
          }
        }

        .input-confirmPassword {
          display: flex;
          align-items: center;
          max-width: 300px;
          width: 100%;
          height: 35px;
          margin-top: 10px;

          #confirmPassword {
            max-width: 238px;
            margin-top: 0;
            border-radius: 0;
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            padding: 0;
            outline: 2px solid gray;
            background-color: transparent;
            height: 32px;
            width: 32px;
            margin-left: 6px;
            border-radius: 0 0 5px 0;
            cursor: pointer;
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

        #register-button {
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

        #link-to-login {
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
