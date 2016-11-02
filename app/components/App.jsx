import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {
  render() {
    const { notes } = this.props;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>Add</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    });
  }

  deleteNote = (id, event) => {
    // avoid bubbling to edit
    event.stopPropagation();

    this.props.NoteActions.delete(id);
  }

  activateNoteEdit = (id) => {
    this.props.NoteActions.update({id, editing: true});
  }

  // save note
  editNote = (id, task) => {
    const { NoteActions } = this.props;
    NoteActions.update({ id, task, editing: false });
  }
}

// connect(state, actions)
export default connect(({ notes }) => ({
  notes
}), {
  NoteActions
})(App);
