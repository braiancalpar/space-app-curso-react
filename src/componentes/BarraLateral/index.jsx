import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import { useState } from "react";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  const [itemAtivo, setItemAtivo] = useState("inicio");
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={itemAtivo === "inicio"}
            onClick={() => setItemAtivo("inicio")}
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
            ativo={itemAtivo === "mais-vistos"}
            onClick={() => setItemAtivo("mais-vistos")}
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
            ativo={itemAtivo === "mais-curtidos"}
            onClick={() => setItemAtivo("mais-curtidos")}
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
            ativo={itemAtivo === "novas"}
            onClick={() => setItemAtivo("novas")}
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
            ativo={itemAtivo === "surpreenda-me"}
            onClick={() => setItemAtivo("surpreenda-me")}
          >
            Galeria Aleatória
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
