import styled from "styled-components";
const HeaderContainer = styled.header`display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: 
color: white;
`


const Button = styled.button`background-color: #61dafb;
padding:10px;
color: #282c34;
border: none;
border-radius: 5px;
cursor:pointer;
font-size; 1rem;
&:hover{
background-color: #35a8d4;`

const Title = styled.title`
color: #282c34;
style: 

`


interface HeaderProps {
    onToggleGuide: () => void;
}
const Header = ({ onToggleGuide }: HeaderProps) =>{
    return(
        <HeaderContainer>
            <h1>Markdown preview</h1>
            <Button onClick={onToggleGuide}>cheat Sheet</Button>
        </HeaderContainer>
    );
;}
export default Header;