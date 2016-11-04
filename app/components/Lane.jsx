import React from 'react';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
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
    const { connectDropTarget, lane, notes,
      LaneActions, NoteActions, ...props } = this.props;

    return connectDropTarget(
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

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const targetLane = targetProps.lane;

    // empty target lane
    if (!targetLane.notes.length) {
      // attach note to target lane
      LaneActions.attachToLane({
        laneId: targetLane.id,
        noteId: sourceId
      });
    }
  }
};

export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),

  // connect(state, actions)
  connect(
    ({ notes }) => ({ notes }),
    { NoteActions, LaneActions }
  )
)(Lane);
