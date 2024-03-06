import { useState } from 'react'
import Header from './components/Header';
import MarkdownCheatSheet from './components/MarkdownCheatSheet'
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import styled, { createGlobalStyle } from 'styled-components';


const Container = styled.div`
  display: flex ;
  width: 100%;
`;
const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding:0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    color: white;
  }
`


const App = () =>{
 // const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
 // const handleToggleGuide = () =>{
  //  setShowCheatSheet(!showCheatSheet);
  const[markdown, setMarkdown] = useState(`# Hello World`);
  const[showGuide,setShowGuide] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{setMarkdown(e.target.value);
  }
  return(
    <>
    <GlobalStyles/>
    <Header onToggleGuide={()=>setShowGuide(!showGuide)}/>
    {showGuide && <MarkdownCheatSheet/>}
    <Container>
      <MarkdownInput value ={markdown} onchange={handleChange}/>
      <MarkdownOutput markdown={markdown}/>
    </Container>


    </>
  );
};

export default App;
