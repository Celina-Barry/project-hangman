import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import GameOverModal from "./GameOverModal";
import words from "../data/words.json";
import letters from "../data/letters.json"

import { colors, contentWidth } from "./GlobalStyles";
const initialGameState = { started: false, over: false, win: false };
const App = () => {
  const [usedLetters, setUsedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState({ str: "", revealed: []});
  const [gameOver, setGameOver] = useState(false)
  useEffect(() => {
    if (word.revealed.join('') === word.str) {
      handleEndGame(true);
    }
    if (wrongGuesses.length >= 10) {
      handleEndGame(false);
    }
  }, [word.revealed, word.str, wrongGuesses.length]);
  
  const getNewWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const revealedArray = Array.from({ length: randomWord.length }, () => "");
    setWord( { str: randomWord, revealed: revealedArray});
    };
    const handleReset = () => {
      setUsedLetters([]);
      setWrongGuesses([]);
      getNewWord();
      setGame({...initialGameState, started: true});
    };

    const handleStart = () => {
    if (!word.str) {
      getNewWord();
    }
    setGame({...game, started: !game.started});
  };

  const handleEndGame = (win) => {
    setGame({...game, over: true, win });
    setGameOver(true);
    alert(`Game Over! You ${win ? "win" : "lose"}`);
  };

    const handleGuess = (ltr) => {
      console.log("Guessed Letter: ", ltr);
      setUsedLetters((prevUsedLetters) => [...prevUsedLetters, ltr]);
      const { str, revealed } = word;
      if (str.includes(ltr)) {
          const newRevealed = revealed.map((currentLetter, index) =>
          str[index] === ltr ? ltr : currentLetter
          );
          //console.log("Revealed Letters: ", newRevealed);
          if (word.revealed.join('') === word.str) {
            handleEndGame(true);
          }
        setWord({...word, revealed: newRevealed});
      } else {
        // if the guessed letter is not in the word add it to the wrongGuesses
        setWrongGuesses((prevWrongGuesses) => [...prevWrongGuesses, ltr]);
        console.log("Wrong Guesses: ", wrongGuesses);
      }
      if (wrongGuesses.length >= 10) {
        handleEndGame(false);
      }
      
    };
  return (
    <Wrapper>
      {/* <GameOverModal /> */}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart}>{game.started ? (game.over ? "Continue" : "Pause") : "Start"}</Button>
        <Button onClickFunc={handleReset}>Restart</Button>
      </Nav>
      {game.started && (
      <>
        <Container>
          <Deadman />
          <RightColumn>
            <DeadLetters wrongGuesses={wrongGuesses} />
            <TheWord word={word} />
          </RightColumn>
        </Container>
        <Keyboard letters={letters} handleGuess={handleGuess} usedLetters={usedLetters}/>
      </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default App;
