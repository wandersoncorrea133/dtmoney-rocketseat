import logoImg from "../../assets/Logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal(): void;
}

const Header: React.FC<HeaderProps> = ({
  onOpenNewTransactionModal,
}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
