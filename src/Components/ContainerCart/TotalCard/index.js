import styled from "styled-components";
import { StyledLi, StyledTotal } from "../style";

function TotalCard({ cart }) {
  const totalTudo = cart.reduce((prev, current) => {
    return prev + current.price * current.qtd;
  }, 0);

  return (
    <StyledTotal>
      <h2>Informações</h2>
      {cart.map((prod, i) => (
        <StyledLi key={i}>
          <div className="flex">
            <div>
              <h4>{prod.name}</h4>
              <p>Total: R${prod.qtd * prod.price},00</p>
            </div>
            <div>
              <p>Und. R${prod.price},00</p>
              <p>Qtd: {prod.qtd}</p>
            </div>
          </div>
        </StyledLi>
      ))}
      <h3>Total:R${totalTudo},00</h3>
    </StyledTotal>
  );
}
export default TotalCard;
