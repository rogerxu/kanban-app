import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React',
  },
  {
    id: uuid.v4(),
    task: 'Do laundry',
  },
];

export default function App() {
  return (
    <div>
      <button onClick={() => console.log('add note')}>Add</button>

      <Notes notes={notes} />
    </div>
  );
}
