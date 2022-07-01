import { useContext } from "react";
import { ProductsContext } from "../../Providers/Product";
import { ProdCard } from "./ProdCard";
import { StyledContainer } from "./style";

export function ContainerProds() {
  const { prods } = useContext(ProductsContext);
  console.log(prods);
  return (
    <>
      <StyledContainer>
        {prods.map((prod, i) => (
          <ProdCard key={i} product={prod} />
        ))}
      </StyledContainer>
    </>
  );
}
