import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { runFireWorks } from "./function";

const TicTacToe = () => {
  const [input, setInput] = useState(["", "", "", "", "", "", "", "", ""]);

  const [playerTurn, setPlayerTurn] = useState("X");
  const [gameResult, setGameResult] = useState("");

  var prevState = input;

  const handleInput = (position) => {
    if (gameResult === "") {
      if (input[position] === "") {
        if (playerTurn === "X") {
          prevState[position] = "X";
          setPlayerTurn("O");
        } else {
          prevState[position] = "O";
          setPlayerTurn("X");
        }
        setInput(prevState);

        // 0 1 2
        // 3 4 5
        // 6 7 8
      } else {
        toast.error("Position already occupied.", {
          duration: 3000,
        });
      }
    }
  };

  useEffect(() => {
    setInput(prevState);
    if (prevState[0] !== "" && prevState[1] !== "" && prevState[2] !== "") {
      if (prevState[0] === prevState[1] && prevState[1] === prevState[2]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[0]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setGameResult("");
          setInput(["", "", "", "", "", "", "", "", ""]);
        }, 3000);
      }
    }
    if (prevState[0] !== "" && prevState[3] !== "" && prevState[6] !== "") {
      if (prevState[0] === prevState[3] && prevState[3] === prevState[6]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[0]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setGameResult("");
          setInput(["", "", "", "", "", "", "", "", ""]);
        }, 3000);
      }
    }
    if (prevState[0] !== "" && prevState[4] !== "" && prevState[8] !== "") {
      if (prevState[0] === prevState[4] && prevState[4] === prevState[8]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[0]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setGameResult("");
          setInput(["", "", "", "", "", "", "", "", ""]);
        }, 3000);
      }
    }
    if (prevState[3] !== "" && prevState[4] !== "" && prevState[5] !== "") {
      if (prevState[3] === prevState[4] && prevState[4] === prevState[5]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[3]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setGameResult("");
          setInput(["", "", "", "", "", "", "", "", ""]);
        }, 3000);
      }
    }
    if (prevState[1] !== "" && prevState[4] !== "" && prevState[7] !== "") {
      if (prevState[1] === prevState[4] && prevState[4] === prevState[7]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[1]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setGameResult("");
          setInput(["", "", "", "", "", "", "", "", ""]);
        }, 3000);
      }
    }
    if (prevState[2] !== "" && prevState[5] !== "" && prevState[8] !== "") {
      if (prevState[2] === prevState[5] && prevState[5] === prevState[8]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[2]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setGameResult("");
          setInput(["", "", "", "", "", "", "", "", ""]);
        }, 3000);
      }
    }
    if (prevState[6] !== "" && prevState[7] !== "" && prevState[8] !== "") {
      if (prevState[6] === prevState[7] && prevState[7] === prevState[8]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[6]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setGameResult("");
          setInput(["", "", "", "", "", "", "", "", ""]);
        }, 3000);
      }
    }

    if (prevState[2] !== "" && prevState[4] !== "" && prevState[6] !== "") {
      if (prevState[2] === prevState[4] && prevState[4] === prevState[6]) {
        setGameResult("WIN");
        toast.success(`Player ${prevState[6]} is won.`);
        runFireWorks();
        setTimeout(() => {
          setInput(["", "", "", "", "", "", "", "", ""]);
          setGameResult("");
        }, 3000);
      }
    }
    // 0 1 2
    // 3 4 5
    // 6 7 8

    if (
      prevState[0] !== "" &&
      prevState[1] !== "" &&
      prevState[2] !== "" &&
      prevState[3] !== "" &&
      prevState[4] !== "" &&
      prevState[5] !== "" &&
      prevState[6] !== "" &&
      prevState[7] !== "" &&
      prevState[8] !== "" &&
      gameResult !== "WIN" &&
      (prevState[2] === prevState[4] && prevState[4] === prevState[6]) ===
        false &&
      (prevState[6] === prevState[7] && prevState[7] === prevState[8]) ===
        false &&
      (prevState[2] === prevState[5] && prevState[5] === prevState[8]) ===
        false &&
      (prevState[1] === prevState[4] && prevState[4] === prevState[7]) ===
        false &&
      (prevState[3] === prevState[4] && prevState[4] === prevState[5]) ===
        false &&
      (prevState[0] === prevState[4] && prevState[4] === prevState[8]) ===
        false &&
      (prevState[0] === prevState[4] && prevState[4] === prevState[8]) ===
        false &&
      (prevState[0] === prevState[3] && prevState[3] === prevState[6]) ===
        false &&
      (prevState[0] === prevState[1] && prevState[1] === prevState[2]) === false
    ) {
      setGameResult("TIE");
      toast.success(`That's a tie. Play again`);
      setTimeout(() => {
        setGameResult("");
        setInput(["", "", "", "", "", "", "", "", ""]);
      }, 500);
    }
    // eslint-disable-next-line
  }, [playerTurn]);

  return (
    <div className="border__wrap">
      <div className="game__container">
        <div className="small__box" onClick={() => handleInput(0)}>
          <div className="input">{input[0]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(1)}>
          <div className="input">{input[1]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(2)}>
          <div className="input">{input[2]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(3)}>
          <div className="input">{input[3]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(4)}>
          <div className="input">{input[4]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(5)}>
          <div className="input">{input[5]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(6)}>
          <div className="input">{input[6]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(7)}>
          <div className="input">{input[7]}</div>
        </div>
        <div className="small__box" onClick={() => handleInput(8)}>
          <div className="input">{input[8]}</div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
