import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordlist.json";

function App() {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  const [wordToGuess, setWordToGuess] = useState(getWord());

  const [guessedLetters, setGuessedLetters] = useState<string[]>(() => {
    return [];
  });

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))
  const isLoser = incorrectLetters.length >= 6

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e :KeyboardEvent) => {
      const key = e.key
      if (key !== 'Enter') return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener('keypress', handler)
    return () =>
      document.removeEventListener('keypress', handler)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key.match(/^[a-z]$/)) {
        e.preventDefault();
        addGuessedLetter(key);
      }
    };
    document.addEventListener("keyup", handler);

    return () => {
      document.removeEventListener("keyup", handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem" }}>
        {isWinner && 'You Win! - Refresh to try again'}
        {isLoser && 'Nice Try - Refresh to try again'}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
