import { StyledCard } from "../style";
import { useContext } from "react";
import { CartContext } from "../../../Providers/Cart";

export function ProdCard({ product }) {
  const { addCart } = useContext(CartContext);

  function handleAddProd() {
    console.log("addCard");
    addCart(product);
  }

  return (
    <StyledCard>
      <h2>{product.name}</h2>
      <p>Preço: R${product.price},00</p>
      <img src={product.img} alt={product.name} />
      <button onClick={handleAddProd}>Adicionar produto</button>
    </StyledCard>
  );
}
