import styled from "styled-components";

interface HeaderProps {
  onToggleGuide: () => void;
}
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #e0d7ff;
  color: white;
  border-bottom: 2px solid #1d011f;
`;

const Button = styled.button`
  background-color: #b676b1;
  padding: 10px;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #8f3a84;
  }
`;

const Title = styled.h1`
  color: #8f3985;
  margin: 0;
  font-family:Arial, Helvetica, sans-serif;
`;

const Header: React.FC<HeaderProps> = ({ onToggleGuide }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title> Markdown Preview </Title>
      <Button onClick={onToggleGuide}>Markdown cheat Sheet</Button>
    </HeaderContainer>
  );
};
export default Header;
