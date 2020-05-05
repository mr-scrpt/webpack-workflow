import React, { useState } from "react";
import Style from "./style.css";
import "./style.scss";
import { ReactComponent as ReactLogoComponent } from "../../static/assets/img/churros.svg";

export const MyComponent = () => {
  const [color, setColor] = useState("pink");

  return (
    <div>
      <h1 className={Style.title} style={{ "--mainColor": color }}>
        Title 1
      </h1>
      <h2>Title 2</h2>
      <h3>Привет!</h3>
      <ReactLogoComponent width={50} height={50} />

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
