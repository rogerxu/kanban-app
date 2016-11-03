import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';

class LaneHeader extends React.Component {
  render() {
    const { lane } = this.props;

    return (
      <div className="lane-header">
        <div className="lane-add-note">
          <button className="add-note" onClick={this.addNote}>Add</button>
        </div>
        <div className="lane-name">{lane.name}</div>
      </div>
    );
  }
  addNote = (event) => {
    event.stopPropagation();

    const { lane, NoteActions, LaneActions } = this.props;

    const noteId = uuid.v4();

    NoteActions.create({
      id: noteId,
      task: 'New task'
    });

    // attach note to lane
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    });
  }
}

// connect(state, actions)
export default connect(
  () => ({}),
  { NoteActions, LaneActions }
)(LaneHeader);
