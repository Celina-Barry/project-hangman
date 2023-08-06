import styled from "styled-components";
import LetterKey from "./LetterKey";

import { colors, contentWidth } from "./GlobalStyles";

const Keyboard = ({ letters, handleGuess, usedLetters }) => {

    
    return (
        <Wrapper>
            {letters.map((letter) => (
                <LetterKey 
                key={letter} 
                letter={letter}
                onClick={() => handleGuess(letter)}
                disabled={usedLetters.includes(letter)}
                />
            ))}
            
        </Wrapper>
    )
};

const Wrapper = styled.div`
  background: ${colors.yellow};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 12px;
  max-width: ${contentWidth};
  min-width: 320px;
`;

export default Keyboard;
