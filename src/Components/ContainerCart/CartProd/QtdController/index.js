import { useContext } from "react";
import { CartContext } from "../../../../Providers/Cart";
import { StyledQtd } from "../../style";

function QtdControl(props) {
  const { addCart, remOneCart } = useContext(CartContext);

  const { qtd, product, index } = props;

  function handleAddOne() {
    addCart(product);
  }

  function handleRemOne() {
    remOneCart(product);
  }
  return (
    <StyledQtd>
      <p>Qtd: {qtd}</p>
      <div className="control">
        <button onClick={handleAddOne}>+</button>
        <button onClick={handleRemOne}>-</button>
      </div>
    </StyledQtd>
  );
}
export default QtdControl;
