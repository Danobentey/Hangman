type HangamanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangamanWordProps) {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color: !guessedLetters.includes(letter) ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
