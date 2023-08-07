import React from "react";
import { deleteTeamRequest, loadTeamsRequest } from "./middleware";

type Team = {
  id: string;
  promotion: string;
  members: string;
  name: string;
  url: string;
};

type Props = {
  loading: boolean;
  teams: any[];
};

type RowProps = {
  team: Team;
  deleteTeam(id: string): void;
};

function TeamRow(props: RowProps) {
  const { id, promotion, members, name, url } = props.team;
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value={id} />
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
        <button type="button" className="action-btn edit-btn">
          &#9998;
        </button>
        <button
          type="button"
          className="action-btn remove-btn"
          onClick={() => {
            props.deleteTeam(id);
          }}
        >
          ♻
        </button>
      </td>
    </tr>
  );
}

export function TeamsTable(props: Props) {
  console.warn("TeamTable", props);
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
          {props.teams.map(team => (
            <TeamRow
              key={team.id}
              team={team}
              deleteTeam={function (id) {
                console.warn("pls remove %o team", id);
                deleteTeamRequest(id);
              }}
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

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
};

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    console.warn("wrapper", props);
    super(props);
    this.state = {
      loading: false,
      teams: []
    };
  }

  componentDidMount(): void {
    loadTeamsRequest().then(teams => {
      console.info("loaded", teams);
      this.setState({
        loading: false,
        teams
      });
    });
  }
  render() {
    console.info("render");
    return <TeamsTable loading={this.state.loading} teams={this.state.teams} />;
  }
}
