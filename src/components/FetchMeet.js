import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class FetchMeet extends Component {
  static displayName = ""; //FetchData.name;

  constructor (props) {
    super(props);
    this.state = { viewModel: [], loading: true };
    const id = this.props.match.params.id;

    fetch('api/meet?id=' + id)
      .then(response => response.json())
      .then(data => {
        this.setState({ viewModel: data, loading: false });
      });
  }

  static renderMeet (viewModel) {
    return (
      <div>
        <h1>{viewModel.name}</h1>
        <h2>Races</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Jump</th>
            </tr>
          </thead>
          <tbody>
            { viewModel.races.map(race =>
              <tr key={race.id}>
                <td>{race.number}</td>
                <td>
                  <Link to={{
                    pathname: "/race/" + race.id
                    }}>{race.name}</Link>
                </td>
                <td>{race.start}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }

  render () {
    let contents = this.state.loading? <p><em>Loading...</em></p> : FetchMeet.renderMeet(this.state.viewModel);

    return (
      <div>
        {contents}
      </div>
    );
  }
}