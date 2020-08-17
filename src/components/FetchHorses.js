import React, { Component } from "react";
import useSWR from "swr";

export class FetchHorses extends Component {
  static displayName = ""; //FetchData.name;

  constructor(props) {
    super(props);
    this.state = { races: [], loading: true };

    fetch("horseracing/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ races: data, loading: false });
      });
  }

  static renderRaces(races) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Track</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => (
            <tr key={race.location}>
              <td>
                <a href={"/meet/" + race.id}>{race.location}</a>
              </td>
              <td>{race.race1}</td>
              <td>{race.race2}</td>
              <td>{race.race3}</td>
              <td>{race.race4}</td>
              <td>{race.race5}</td>
              <td>{race.race6}</td>
              <td>{race.race7}</td>
              <td>{race.race8}</td>
              <td>{race.race9}</td>
              <td>{race.race10}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      FetchHorses.renderRaces(this.state.races)
    );

    return (
      <div>
        <h1>Australian and New Zealand Horse Racing</h1>
        {contents}
      </div>
    );
  }
}
