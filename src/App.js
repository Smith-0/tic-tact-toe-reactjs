import { useEffect, useState } from "react";
import TicTacToe from "./TicTacToe";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isChecked, setIsChecked] = useState(false);
  const [toastColor, setToastColor] = useState({
    background: "#fff",
    color: "#000",
  });

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsChecked(true);
      setToastColor({
        background: "#000",
        color: "#fff",
      });
    } else {
      setIsChecked(false);
      setToastColor({
        background: "#fff",
        color: "#000",
      });
    }
  });

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.background = `linear-gradient(
        0deg,
        rgba(245, 56, 68, 0.9) 0%,
        rgba(66, 55, 143, 0.9) 75%
      )`;
    } else {
      document.body.style.background = `linear-gradient(
        0deg,
        rgba(126, 232, 250, 0.7) 0%,
        rgba(238, 192, 198, 0.7) 75%
      )`;
    }
  }, [theme]);

  console.log(theme);
  return (
    <>
      <label class="switch" data-theme-background={theme}>
        <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
        <span class="slider round"></span>
      </label>
      <div data-theme-background={theme}>
        <div className="container">
          <Toaster
            toastOptions={{
              className: "heading",
              duration: 3000,
              style: {
                background: toastColor.background,
                color: toastColor.color,
              },
            }}
          />
          <h1 className="heading">Tic - Tac - Toe</h1>
          <TicTacToe />
        </div>
      </div>
    </>
  );
}

export default App;
