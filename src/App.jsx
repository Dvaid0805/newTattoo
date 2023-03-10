import React from 'react';
import { Footer, Contacts, CombinedContFoot, Services } from './sections';
import { Slider, ToSectionBtn, TestTilt, PreviewPageBtn } from './components';

export const App = () => {
  return (
    <div
      className="App"
      style={{
        background: '#1E1E1E',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Services />
      <CombinedContFoot />
    </div>
  );
};
