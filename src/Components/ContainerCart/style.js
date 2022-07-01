import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: auto;

  @media screen and (max-width: 524px) {
    flex-direction: column;
  }
`;
export const StyledContainerCarts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: auto;
  width: fit-content;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  @media screen and (min-width: 524px) and (max-width: 800px) {
    margin: 25px 25px 0 auto;
  }
`;
export const StyledNoProducts = styled.div`
  @media screen and (max-width: 800px) {
    margin: 0 15px;
  }
`;
export const StyledLi = styled.div`
  .flex {
    div {
      display: flex;
      justify-content: space-between;
    }
    border-bottom: 3px solid #ccf;
  }
`;
export const StyledTotal = styled.div`
  margin: 0 25px;
  background-color: #aaf;
  height: fit-content;
  box-sizing: border-box;

  width: 300px;
  padding: 10px 25px 30px;

  display: flex;
  flex-direction: column;
  align-content: center;

  text-align: center;

  h3 {
    margin-top: 40px;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 15px;
    margin: 10px auto;
  }

  @media screen and (min-width: 524px) and (max-width: 800px) {
    position: fixed;
    top: 150px;
    left: 15px;
  }
`;
export const StyledCard = styled.div`
  background-color: #aaf;
  height: fit-content;
  box-sizing: border-box;

  width: 175px;
  padding: 10px 25px 30px;

  display: flex;
  flex-direction: column;
  align-content: center;

  text-align: center;

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
    height: 100px;
    width: 100px;
    object-fit: cover;

    border-radius: 8px;
  }
`;

export const StyledQtd = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  margin: 10px 0;

  p {
    margin: auto 0;
  }
  .control {
    button {
      height: 25px;
      width: 25px;
      margin: 0;
      margin-left: 5px;
    }
  }
`;
