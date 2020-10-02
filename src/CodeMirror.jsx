import React from 'react';
import { Controlled } from 'react-codemirror2';

function CodeMirror({ value, options, onChange }) {
  return (
    <Controlled value={value} options={options} onBeforeChange={onChange} />
  );
}

export default CodeMirror;
