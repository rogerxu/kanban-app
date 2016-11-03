import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

class App extends React.Component {
  render() {
    const { lanes } = this.props;

    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>Add</button>
        <Lanes lanes={lanes} />
      </div>
    );
  }

  addLane = () => {
    this.props.LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  }
}

// connect(state, actions)
export default connect(
  ({ lanes }) => ({ lanes }),
  { LaneActions }
)(App);
