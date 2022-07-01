import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: auto;
  width: fit-content;

  @media screen and (max-width: 624px) {
    flex-direction: column;
  }
`;
export const StyledCard = styled.div`
  background-color: #aaf;
  height: fit-content;
  box-sizing: border-box;

  width: 200px;
  padding: 10px 25px 30px;

  display: flex;
  flex-direction: column;
  align-content: center;

  button {
    margin-top: 15px;
    border: none;
    border-radius: 6px;
    background-color: #ccf;
    height: 50px;
    cursor: pointer;

    transition: 500ms;
    &:hover {
      background-color: darkblue;
      color: whitesmoke;
    }
  }

  img {
    margin: auto;
    height: 160px;
    width: 160px;
    object-fit: cover;
  }
`;
