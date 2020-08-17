import React, { Component } from 'react';

export class FetchRace extends Component {

  constructor (props) {
    super(props);
    this.state = { viewModel: [], loading: true };

    console.log(props.match.params.id);
    
    fetch('api/race?id=' + props.match.params.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ viewModel: data, loading: false });
      });
  }

  static renderRunners (runners) {
    return (
      <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rider</th>
              <th>Form</th>
              <th>Win</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>        
          {runners.map(runner =>
              <tr key={runner.name}>
                <td><a href="/betslip">{runner.name}</a></td>
                <td>{runner.rider}</td>
                <td>{runner.form}</td>
                <td><a href="/betslip?type=win&selection=1">{runner.win}</a></td>
                <td><a href="/betslip?type=place&selection=2">{runner.place}</a></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render () {
    let contents = this.state.loading? <p><em>Loading...</em></p> : FetchRace.renderRunners(this.state.viewModel.runners);

    return (
      <div>
        <h1>{ this.state.viewModel.name }</h1>
        <p>{ this.state.viewModel.description }</p>
        {contents}
      </div>
    );
  }
}