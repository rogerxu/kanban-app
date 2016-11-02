import React from 'react';

export default function Note({ task, onDelete }) {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
