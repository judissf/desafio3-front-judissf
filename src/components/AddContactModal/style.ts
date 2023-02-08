import styled from 'styled-components'
import { IAddContactModalStyleProps } from '../../interfaces'

export const AddModalStyle = styled.div<IAddContactModalStyleProps>`
  display: flex;
  top: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.25);

  .container-add-contact-modal {
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 300px;
    width: 100%;
    height: 410px;
    border-radius: 0 0 5px 5px;
    background-color: rgba(0, 0, 0, 0.5);

    .title-button-close {
     display: flex;
     align-items: center;
     justify-content: space-between;
     height: 30px;
     max-width: 300px;
     width: 100%;
     margin-bottom: 10px;

     h4 {
      color: white;
      font-size: 18px;
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
      justify-content: space-between;
      height: 360px;
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
       color: white;
       width: max-content;
       margin-bottom: 5px;
      }

      input {
       border: none;
       padding: 0 5px;
       outline: 2px solid gray;
       width: 286px;
       height: 32px;
       margin-left: 2px;
       font-size: 15px;
       border-radius: 0 0 5px 0;

       &:focus {
        outline-color: gray;
       } 
      }

      span {
       color: red;
       height: 20px;
       margin-bottom: 5px;
       width: max-content;
       font-size: 15px;
       font-weight: bold;
      }

      button {
       background-color: white;
       color: black;
       width: 100%;
       height: 32px;
       padding: 0;
       margin-bottom: 5px;
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
