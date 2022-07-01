import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: #aaf solid 3px;

  padding: 20px 150px;
  margin-bottom: 25px;

  h1 {
    font-size: 24px;
    cursor: pointer;
  }

  button {
    border-radius: 15px;
    padding: 10px 20px;
    border-style: none;

    transition: 500ms;
    &:hover {
      background-color: darkblue;
      color: white;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 15px;
    margin: 0;
    padding: 25px;
    text-align: center;
  }
`;
