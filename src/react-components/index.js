import React, { useState } from "react";
import Style from "./style.css";
export const MyComponent = () => {
  const [color, setColor] = useState("pink");

  return (
    <div>
      <h1 className={Style.title} style={{ "--mainColor": color }}></h1>
      <h2>h2 dddd</h2>
      <h3>h3 ffff</h3>
      <div className={Style.testcolor}>Проверка цвета!!!</div>
      <button
        onClick={() => {
          setColor("yellow");
        }}
        className={Style.button}
      >
        <div className="text">Click</div>
      </button>
    </div>
  );
};
