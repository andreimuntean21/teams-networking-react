function TeamRow({ id, promotion, members, name, url }) {
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value="${id}" />
      </td>
      <td>{promotion}</td>
      <td>{members}</td>
      <td>{name}</td>
      <td>
        <a href={url} target="_blank">
          {displayUrl}
        </a>
      </td>
      <td>
        <button type="button" data-id={id} className="action-btn edit-btn">
          &#9998;
        </button>
        <button type="button" data-id={id} className="action-btn remove-btn">
          ♻
        </button>
      </td>
    </tr>
  );
}

export function TeamsTable(props) {
  // console.warn(props);
  const teams = [
    {
      id: 1,
      promotion: "FastTrackIT",
      members: "Andrei Muntean",
      name: "Teams Networking",
      url: "https://github.com/andreimuntean21/teams-networking"
    },
    {
      id: 2,
      promotion: "Transilvania 03",
      members: "Andrei Muntean",
      name: "trei",
      url: "https://github.com/andreimuntean21/teams-networking"
    },
    {
      id: 2,
      promotion: "Transilvania 03 - 2",
      members: "Andrei Muntean",
      name: "trei",
      url: "https://github.com/andreimuntean21/teams-networking"
    }
  ];
  return (
    <form id="teamsForm" action="" method="get" className={props.loading ? "loading-mask" : ""}>
      <table id="teamsTable">
        <colgroup>
          <col className="select-all-column" />
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "15%" }} />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <TeamRow
              key={team.id}
              id={team.id}
              promotion={team.promotion}
              members={team.members}
              name={team.name}
              url={team.url}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" placeholder="Enter promotion" required />
            </td>
            <td>
              <input type="text" name="members" placeholder="Enter members" required />
            </td>
            <td>
              <input type="text" name="name" placeholder="Enter project name" required />
            </td>
            <td>
              <input type="text" name="url" placeholder="project URL" required />
            </td>
            <td>
              <button type="submit" className="action-btn" title="Add">
                ➕
              </button>
              <button type="reset" className="action-btn" title="Reset">
                ✖
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export function TeamsTableWrapper() {
  return <TeamsTable loading={false} />;
}
