import "./menu.css";

export function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#home" data-page="home">
          Home
        </a>
      </li>
      <li>
        <a href="#skills" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#languages" data-page="languages">
          Languages
        </a>
      </li>
      <li>
        <a href="#rubik" data-page="rubik">
          💠Rubik's
        </a>
      </li>
    </ul>
  );
}
