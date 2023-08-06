import styled from "styled-components";

const TheWord = ({ word }) => {
  const { str, revealed } = word;
    return (
        <Wrapper>
          {str.split("").map((letter, index) => (
            <span key={index} line={revealed[index]}>
              {revealed[index] ? letter : " _ "}
            </span>
          ))}
        </Wrapper>
    )
}

const Wrapper = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
`;
const Span = styled.span`
  display: block;
  border-bottom: ${(props) => (props.line ? "2px solid white" : "none")};
  width: 30px;
  margin: 0 3px;
  text-align: center;
`;

export default TheWord;
