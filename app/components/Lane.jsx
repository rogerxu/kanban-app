import React from 'react';
import connect from '../libs/connect';
import LaneHeader from './LaneHeader';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';

const selectNotesByIds = (allNotes, noteIds = []) => {
  return allNotes.filter((note) => {
    return noteIds.includes(note.id);
  });
};

class Lane extends React.Component {
  render() {
    const { lane, notes, LaneActions, NoteActions, ...props } = this.props;

    return (
      <div {...props}>
        <LaneHeader lane={lane} />
        <Notes
          notes={selectNotesByIds(notes, lane.notes)}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }

  deleteNote = (noteId, event) => {
    // avoid bubbling to edit
    event.stopPropagation();

    const { lane, NoteActions, LaneActions } = this.props;

    // detach note from lane
    LaneActions.detachFromLane({
      laneId: lane.id,
      noteId
    });

    // delete note
    NoteActions.delete(noteId);
  }

  activateNoteEdit = (id) => {
    this.props.NoteActions.update({id, editing: true});
  }

  // save note
  editNote = (id, task) => {
    this.props.NoteActions.update({ id, task, editing: false });
  }
}

// connect(state, actions)
export default connect(
  ({ notes }) => ({ notes }),
  { NoteActions, LaneActions }
)(Lane);
