import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";
export function Header(props) {
  let navigate = useNavigate();
  function goToCart() {
    return navigate("/cart");
  }

  function goToShop() {
    return navigate("/");
  }
  return (
    <StyledHeader>
      <h1 onClick={goToShop}>SuquinhoShop</h1>
      {!props.login ? (
        <button onClick={goToCart}>Carrinho</button>
      ) : (
        <button onClick={goToShop}>Vitrine</button>
      )}
    </StyledHeader>
  );
}
