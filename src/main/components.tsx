import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
  return (
    <div id="main">
      <div className="tbar">
        <button id="removeSelected">✖️Remove selected</button>
        <button>✅</button>
        <div className="tfill"></div>
        <input type="search" name="search" id="searchTeams" />
        <label htmlFor="searchTeams">🔎</label>
      </div>

      <TeamsTableWrapper />
    </div>
  );
}
