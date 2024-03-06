import styled from "styled-components";

interface HeaderProps{
    onToggleGuide:() => void;
}
const HeaderContainer = styled.header`display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: #E0D7FF;
color: white;
`


const Button = styled.button`background-color: #B676B1;
padding:10px;
color: #000000;
border: none;
border-radius: 5px;
cursor:pointer;
font-size: 1rem;
&:hover {
background-color: #8F3A84;}`

const Title = styled.h1`
color: #8F3985;
margin: 0;

`



const Header: React.FC<HeaderProps> =  ({ onToggleGuide }: HeaderProps) =>{
    return(
        <HeaderContainer>

            <Title> Markdown Preview </Title>
            <Button onClick={onToggleGuide}>Markdown cheat Sheet</Button>
        </HeaderContainer>
    );
};
export default Header;