import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

class LaneHeader extends React.Component {
  render() {
    const { lane } = this.props;

    return (
      <div className="lane-header" onClick={this.activateLaneEdit}>
        <div className="lane-add-note">
          <button onClick={this.addNote}>+</button>
        </div>
        <Editable className="lane-name"
          editing={lane.editing}
          value={lane.name}
          onEdit={this.editName} />

        <div className="lane-delete">
          <button onClick={this.deleteLane}>x</button>
        </div>
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

  activateLaneEdit = () => {
    const { lane, LaneActions } = this.props;
    LaneActions.update({
      id: lane.id,
      editing: true
    });
  }

  // save name
  editName = (name) => {
    const { lane, LaneActions } = this.props;
    LaneActions.update({
      id: lane.id,
      name,
      editing: false
    });
  }
  
  deleteLane = (event) => {
    event.stopPropagation();

    const { lane, LaneActions } = this.props;
    LaneActions.delete(lane.id);
  }
}

// connect(state, actions)
export default connect(
  () => ({}),
  { NoteActions, LaneActions }
)(LaneHeader);
