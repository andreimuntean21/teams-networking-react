import { useState } from "react";
import "./menu.css";

export function MainMenu() {
  const [active, setActive] = useState("home");
  return (
    <ul id="top-menu-bar">
      <li>
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={() => {
            setActive("home");
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#todos"
          className={active === "todos" ? "active" : ""}
          onClick={() => {
            setActive("todos");
          }}
        >
          To Do's
        </a>
      </li>
      <li>
        <a
          href="#teams"
          className={active === "teams" ? "active" : ""}
          onClick={() => {
            setActive("teams");
          }}
        >
          Projects
        </a>
      </li>
    </ul>
  );
}
