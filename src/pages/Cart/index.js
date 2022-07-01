import { ContainerCart } from "../../Components/ContainerCart";
import { Header } from "../../Components/Header";

export function Cart() {
  return (
    <>
      <Header login={true} />

      <ContainerCart />
    </>
  );
}
