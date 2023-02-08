import styled from 'styled-components'

export const ContactStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 360px;
  width: 100%;
  height: 89px;
  list-style: none;
  padding: 5px;
  border-radius: 0 0 5px 0;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
  margin-right: 5px;
  transition: 0.2s;

  &:hover {
    background-color: white;
  }

  p {
    font-size: 15px;
    max-width: max-content;
    width: 100%;
    margin: 0;
    height: 30px;
  }

  .name-edit-delete {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 360px;
    width: 100%;
    height: 30px;

    p {
      font-size: 15px;
      font-weight: 600;
      max-width: max-content;
      margin: 0;
      height: 25px;
    }

    .edit-delete-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 70px;
      width: 100%;
      height: 30px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
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
          font-size: 20px;
          background: none;
        }
      }
    }
  }

  .contact-phone {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
    width: 129px;

    p {
      font-size: 15px;
      height: 20px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      margin-right: 5px;

      svg {
        font-size: 18px;
      }
    }
  }

  .contact-email {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
    max-width: 320px;
    width: 100%;

    p {
      font-size: 15px;
      height: 20px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      margin-right: 5px;

      svg {
        font-size: 20px;
      }
    }
  }
`
