import React from 'react';

export default function Notes({ notes }) {
  return (
    <ul>{notes.map(note =>
      <li key={note.id}>{note.task}</li>
    )}</ul>
  );
}
Notes.displayName = 'Notes';
