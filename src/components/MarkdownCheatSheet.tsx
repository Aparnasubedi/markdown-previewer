import styled from "styled-components";

const GuideContainer = styled.div`
  background-color: #beb6f0;
  padding: 10px;
  margin: 10px;
  border: 1px solid #2e2c2cdd;
  list-style-type: none;
  color: black;
`;
const MarkdownCheatSheet: React.FC = () => {
  return (
    <GuideContainer>
      <h2>Markdown Cheat Sheet</h2>
      <ul>
        <li>
          <code># H1</code>
        </li>
        <li>
          <code>## H2</code>
        </li>
        <li>
          <code>### H3</code>
        </li>
        <li>
          <code>**bold**</code>
        </li>
        <li>
          <code>*italic*</code>
        </li>
        <li>
          <code>[Link](http://a.com)</code>
        </li>
        <li>
          <code>![Image](http://url/a.png)</code>
        </li>
        <li>
          <code>`inline code`</code>
        </li>
        <li>
          <code>```block code```</code>
        </li>
        <li>
          <code>- list item</code>
        </li>
      </ul>
    </GuideContainer>
  );
};
export default MarkdownCheatSheet;
