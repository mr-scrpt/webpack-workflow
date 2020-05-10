import React, { useState } from "react";
import Style from "./style.css";
import svg from "./churros.svg";
import jpg from "./drel.jpg";
import png from "./donut.png";
import { ReactComponent as ReactLogoComponent } from "./churros.svg";

import create from "../components/createDiv";
const el = create();
document.body.appendChild(el);

export const MyComponent = () => {
  const [color, setColor] = useState("pink");
  console.log("-> ENV", __ENV__);
  console.log("-> DEV", __DEV__);
  console.log("-> STAGE", __STAGE__);
  console.log("-> PROD", __PROD__);

  return (
    <div>
      <div className="content"></div>
      <h1 className={Style.title} style={{ "--mainColor": color }}>
        Title 1
      </h1>
      <img src={jpg} alt="alt" />
      <img src={png} alt="alt" />
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
