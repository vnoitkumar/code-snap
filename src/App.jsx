import React from 'react';
import { StyledEditor } from './StyledEditor';
import domToImage from 'dom-to-image';

function App() {
  function downloadAsImg() {
    const scale = 4;
    const element = document.getElementsByClassName('CodeMirror')[0];

    const props = {
      width: element.clientWidth * scale,
      height: element.clientHeight * scale,
      style: {
        transform: `scale(${scale})`,
        'transform-origin': 'top left'
      }
    };

    domToImage.toBlob(element, props).then(function (blob) {
      const objectURL = URL.createObjectURL(blob);

      const img = new Image();
      img.src = objectURL;
      document.body.appendChild(img);
    });
  }
  return (
    <>
      <button onClick={downloadAsImg}>PNG</button>
      <StyledEditor />
    </>
  );
}

export default App;
