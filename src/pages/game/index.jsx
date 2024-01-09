import { useState, useEffect, useCallback } from "react";
import { getRandomEmoji, generateChoices, getRandomCategory } from "./utils";
import * as emojis from "unicode-emoji";
import Button from "@/components/Button";

export default function Game() {
  const [mode, setMode] = useState();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [emoji, setEmoji] = useState();
  const [choices, setChoices] = useState([]);
  const [guess, setGuess] = useState();
  const [isGuessing, setIsGuessing] = useState(false);

  const modeChoice = useCallback(() => {
    return mode === "emoji" ? "description" : "emoji";
  }, [mode]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setMode(urlParams.get("mode") || "description");
    setCategories(Object.keys(emojis.getEmojisGroupedBy("category")));
  }, []);

  useEffect(() => {
    if (categories) {
      setCategory(getRandomCategory());
    }
  }, [categories]);

  useEffect(() => {
    if (category) {
      setEmoji(getRandomEmoji(category, null));
    }
  }, [category]);

  useEffect(() => {
    if (emoji && category) {
      setChoices(generateChoices(emoji, category));
      setIsGuessing(true);
    }
  }, [emoji, category]);

  function handleGuess(e) {
    setGuess(e.target.getAttribute("data-emoji"));
    setIsGuessing(false);
  }

  function handleNewGuess() {
    setCategory(getRandomCategory());
    setIsGuessing(true);
  }

  const isChoiceCorrect = (c) => {
    return c[modeChoice()] === emoji[modeChoice()];
  };

  const isChoiceIncorrect = (c) => {
    return c[modeChoice()] !== emoji[modeChoice()] && c[modeChoice()] === guess;
  };

  return (
    <>
      {mode && category && emoji && choices ? (
        <div className="flex flex-col w-full items-center text-center">
          <div className="w-1/3">
            <p>Which emoji is this?</p>
            <p className="text-4xl font-bold mt-2 p-4 border-2 rounded-full border-gray-200 bg-white w-full">
              {emoji[mode]}
            </p>
          </div>
          {choices ? (
            <>
              <ul
                className={`flex mt-12 ${
                  mode === "description" ? "text-4xl" : "text-lg"
                } gap-4 ${mode === "emoji" && "grid grid-cols-2"}`}
              >
                {choices.map((c, i) => (
                  <li key={i}>
                    <button
                      data-emoji={c[modeChoice()]}
                      disabled={!isGuessing}
                      onClick={handleGuess}
                      className={`
                       ${
                         mode === "emoji" ? "p-4 w-64" : "p-6"
                       } border-2 rounded-full border-gray-200 
                     ${!isGuessing && isChoiceCorrect(c) && "bg-green-300  text-black"}
                     ${!isGuessing && isChoiceIncorrect(c) && "bg-red-300 text-black"}
                     ${isGuessing && "bg-white hover:scale-110 hover:border-gray-300"}
                      `}
                    >
                      {c[modeChoice()]}
                    </button>
                  </li>
                ))}
              </ul>
              <Button
                color="secondary"
                onClick={handleNewGuess}
                className={`${isGuessing && "invisible"} mt-8 text-xl px-8`}
              >
                Next
              </Button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
