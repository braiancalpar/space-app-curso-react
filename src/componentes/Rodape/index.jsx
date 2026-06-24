import styled from "styled-components";
import LinkRodape from "./LinkRodape";
import linksRedesSociaisJSON from "./redesSociais.json";

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;
const RedesSociais = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 17px;
  padding: 0;
  margin-left: 17px;
`;
const TextoRodape = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-right: 17px;
`;
const Rodape = () => {
  const linksRedesSociais = linksRedesSociaisJSON;
  return (
    <Footer>
      <RedesSociais>
        {linksRedesSociais.map((rede) => (
          <LinkRodape
            key={rede.nome}
            href="#"
            icon={rede.icone}
            alt={rede.nome}
          />
        ))}
      </RedesSociais>
      <TextoRodape>Desenvolvido por Alura.</TextoRodape>
    </Footer>
  );
};
export default Rodape;
