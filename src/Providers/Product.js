import { createContext, useState } from "react";

const dataBase = [
  {
    name: "Café",
    price: 7,
    img: "https://th.bing.com/th/id/R.a83f1328a876924ba9b66323880759e4?rik=O%2bKrOo5I8HbY%2bw&riu=http%3a%2f%2fcampovivo.com.br%2fwp-content%2fuploads%2f2017%2f12%2fcafe-xicara.jpg&ehk=LnzAtOjH37zzFlFIvMhhOpuIU6BbISm1IrfWtrEKHxQ%3d&risl=&pid=ImgRaw&r=0",
    id: 1,
    qtd: 1,
  },
  {
    name: "Guarana",
    price: 9,
    img: "https://majoricario.com.br/site/wp-content/uploads/2021/02/Guarana.png",
    id: 2,
    qtd: 1,
  },
  {
    name: "Coca-cola",
    price: 8,
    img: "https://compass3d.com.br/wp-content/uploads/2017/03/72839-beber-cocacola-deixa-os-dentes-amarelos-leia-e-descubra.jpg",
    id: 3,
    qtd: 1,
  },
  {
    name: "Fanta",
    price: 10,
    img: "https://i.pinimg.com/originals/57/2c/4c/572c4c15c90d10ef9bd38e4887351b4e.jpg",
    id: 4,
    qtd: 1,
  },
];

export const ProductsContext = createContext();

export const ProviderProducts = ({children}) => {
  const [prods, setProds] = useState(dataBase);
  return (
    <ProductsContext.Provider value={{prods}}>
      {children}
    </ProductsContext.Provider>
  );
};
