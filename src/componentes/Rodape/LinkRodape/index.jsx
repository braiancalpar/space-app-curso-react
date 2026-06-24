import styled from "styled-components";

const Item = styled.li`
  margin-right: 32px;
`;

const Link = styled.a`
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const LinkRodape = ({ href, icon, alt }) => {
  return (
    <Item>
      <Link href={href}>
        <Icon src={icon} alt={alt} />
      </Link>
    </Item>
  );
};

export default LinkRodape;
