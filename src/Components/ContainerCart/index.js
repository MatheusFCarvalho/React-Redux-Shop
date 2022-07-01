import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { CartProd } from "./CartProd";
import NoProducts from "./NoProducts";
import { StyledContainer, StyledContainerCarts } from "./style";
import TotalCard from "./TotalCard";

export function ContainerCart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <StyledContainer>
        <TotalCard cart={cart} />
        <StyledContainerCarts>
          {cart.length == 0 && <NoProducts />}
          {cart.map((prod, i) => (
            <CartProd key={i} index={i} product={prod} />
          ))}
        </StyledContainerCarts>
      </StyledContainer>
    </>
  );
}
