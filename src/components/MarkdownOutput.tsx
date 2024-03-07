import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const OutputContainer = styled.div`
  /* width: 20; */
  width: 100%;
  height: calc(100vh - 50.5px);
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  border-left: 2px inset #1d011f;
  background-color: #e3dbff;
  -webkit-text-fill-color: black;
  font-family: Lucida Handwriting;
  font-size: 0.5rem;

`;
interface MarkdownOutputProps {
  markdown: string;
}
const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};
export default MarkdownOutput;
