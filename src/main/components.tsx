import { useState } from "react";
import { TeamsTableWrapper } from "../teams/TeamsTable";

export function TeamsPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="tbar">
        <button id="removeSelected">✖ Remove selected</button>
        <div className="tfill"></div>
        <input
          type="search"
          placeholder="Search..."
          onChange={e => {
            console.info("search", e.target.value);
            // search = e.target.value;
            setSearch(e.target.value);
            // ContentWrapper(); // not working
          }}
        />
        <label htmlFor="searchTeams">🔎</label>
      </div>

      <TeamsTableWrapper search={search} />
    </>
  );
}

export function HomePage() {
  return <div>Home...</div>;
}

export function TodosPage() {
  return <div>Todos...</div>;
}

export function ContentWrapper() {
  //console.warn("wrapper.render %o", search);

  return (
    <div id="main">
      <div>Home...</div>
      <div>To Do's...</div>
      <HomePage />
      <TodosPage />
      <TeamsPage />
    </div>
  );
}
