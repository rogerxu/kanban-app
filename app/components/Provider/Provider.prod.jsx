import React from 'react';
import AltContainer from 'alt-container';
import alt from '../../libs/alt';
import setup from './setup';

setup(alt);

export default function Provider({ children }) {
  return (
    <AltContainer flux={alt}>
      {children}
    </AltContainer>
  );
}
