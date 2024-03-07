import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const OutputContainer = styled.div`
width: 20;
height: calc(100vh - 50.5px);
padding: 20px;
box-sizing: border-box;
overflow: auto;
border-left: 1px solid #1d011f;
background-color: #E0D7FF;
`;
interface MarkdownOutputProps{
    markdown: string;
}
const MarkdownOutput: React.FC<MarkdownOutputProps> = ({markdown}) => {
    return(
        <OutputContainer>
            <ReactMarkdown>{markdown}</ReactMarkdown>
            
        </OutputContainer>
    );
};
export default MarkdownOutput;