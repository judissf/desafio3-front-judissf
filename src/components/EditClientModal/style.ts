import styled from 'styled-components'
import { IEditClientModalStyleProps } from '../../interfaces'

export const EditClientStyle = styled.div<IEditClientModalStyleProps>`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);

  .container-edit-client {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 310px;
    padding: 10px;
    width: 100%;
    height: 360px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 5px 5px;

    .title-close-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      width: 100%;

      h4 {
        font-size: 18px;
        color: white;
        margin: 0;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background-color: black;
        cursor: pointer;
        padding: 0;
        border: 0;
        transition: 0.2s;
        outline: 2px solid transparent;

        &:hover {
          outline-color: gray;
        }

        svg {
          color: white;
          font-size: 27px;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      width: 100%;
      height: 320px;

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
        height: 25px;
        font-weight: 600;
        color: white;
        margin-bottom: 2px;
      }

      input {
        max-width: 295px;
        margin-left: 2px;
        width: 100%;
        height: 32px;
        padding: 0 5px;
        border: none;
        outline: 2px solid gray;
        font-size: 15px;
        margin-bottom: 5px;
        border-radius: 0 0 5px 0;
      }

      .content-input-password {
        display: flex;
        align-items: center;
        width: 100%;
        height: 35px;

        #password {
          width: 260px;
          margin: 0;
          height: 30px;
          border-radius: 0;
        }

        #toggle-password {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 31px;
          height: 30px;
          margin-left: 6px;
          border: none;
          border-radius: 0 0 5px 0;
          outline: 2px solid gray;
          padding: 0;
          background-color: transparent;
          cursor: pointer;
          color: black;
          transition: 0.2s;
          border-radius: 0 0 5px 0;
          margin-bottom: 0;

          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }

          svg {
            font-size: 17px;
            color: white;
          }
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

      button {
        background-color: white;
        color: black;
        width: 100%;
        height: 32px;
        padding: 0;
        margin-bottom: 10px;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        outline: 2px solid transparent;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          outline-color: white;
          background-color: black;
          color: white;
        }
      }
    }
  }
`
