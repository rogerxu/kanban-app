import React from 'react';

export default function Note({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}
