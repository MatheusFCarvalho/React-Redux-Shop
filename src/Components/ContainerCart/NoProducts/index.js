import { Link } from "react-router-dom";
import { StyledNoProducts } from "../style";

function NoProducts() {
  return (
    <StyledNoProducts>
      <h2>
        Sem produtos, clique <Link to="/"> aqui</Link> e adicone!
      </h2>
    </StyledNoProducts>
  );
}
export default NoProducts;
