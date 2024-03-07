import styled from "styled-components";
const InputContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50.5px);
  /* padding: 20px; */
  box-sizing: border-box;
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: 2px black;
  padding: 10px;
  box-sizing: border-box;
  background-color: #E3DBFF;
  font-size: 16px;
  outline: none;
`;
interface MarkdownInputProps {
  value: string;
  onchange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onchange }) => {
  return (
    <InputContainer>
      <StyledTextArea onChange={onchange} value={value} />
    </InputContainer>
  );
  return <div> MarkdownInput</div>;
};
export default MarkdownInput;
