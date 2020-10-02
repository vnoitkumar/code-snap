import Editor from './Editor';
import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import domToImage from 'dom-to-image';

import './app.scss';

function App() {
  const [theme, setTheme] = useState('monokai');
  const [lang, setLang] = useState('jsx');
  const [scale, setScale] = useState('4');
  const [fileName, setFileName] = useState('code');

  function handelChange(event) {
    const value = event?.target?.value;
    const name = event?.target?.name;

    if (!name) {
      return;
    }

    switch (name) {
      case 'theme':
        value && setTheme(value);
        break;
      case 'lang':
        value && setLang(value);
        break;
      case 'scale':
        value && setScale(value);
        break;
      case 'fileName':
        setFileName(value);
        break;

      default:
        break;
    }
  }

  function downloadAsImg() {
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
      saveAs(blob, `${fileName ? fileName : 'code'}.png`);
    });
  }

  function resetAllControls() {
    setTheme('monokai');
    setLang('jsx');
    setScale('4');
    setFileName('code');
  }

  return (
    <>
      <div className='container-wrapper'>
        <div className='container'>
          <div className='controls'>
            <div>
              <label htmlFor='theme'>
                Theme &nbsp;
                <select
                  id='theme'
                  onChange={handelChange}
                  name='theme'
                  value={theme}
                >
                  <option>3024-day</option>
                  <option>3024-night</option>
                  <option>abcdef</option>
                  <option>ambiance</option>
                  <option>base16-dark</option>
                  <option>base16-light</option>
                  <option>blackboard</option>
                  <option>cobalt</option>
                  <option>darcula</option>
                  <option>dracula</option>
                  <option>eclipse</option>
                  <option>liquibyte</option>
                  <option>material</option>
                  <option>material-darker</option>
                  <option>material-palenight</option>
                  <option>material-ocean</option>
                  <option>mbo</option>
                  <option>midnight</option>
                  <option>monokai</option>
                  <option>moxer</option>
                  <option>paraiso-light</option>
                  <option>seti</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor='lang'>
                Language &nbsp;
                <select
                  id='lang'
                  onChange={handelChange}
                  name='lang'
                  value={lang}
                >
                  <option value='jsx'>React</option>
                  <option value='javascript'>JavaScript</option>
                  <option value='xml'>HTML</option>
                  <option value='xml'>XML</option>
                  <option value='css'>CSS</option>
                  <option value='sass'>SASS</option>
                  <option value='sass'>SCSS</option>
                  <option value='shell'>Shell Script</option>
                  <option value='python'>Python</option>
                  <option value='dart'>Dart</option>
                  <option value='dockerfile'>Dockerfile</option>
                  <option value='clike'>C</option>
                  <option value='clike'>C++</option>
                  <option value='clike'>Objective-C</option>
                  <option value='clike'>Java</option>
                  <option value='clike'>Scala</option>
                  <option value='markdown'>Markdown</option>
                  <option value='go'>Go</option>
                  <option value='sql'>MySQL</option>
                  <option value='rust'>rust</option>
                  <option value='Ruby'>Ruby</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor='scale'>
                Scale &nbsp;
                <select
                  id='scale'
                  onChange={handelChange}
                  name='scale'
                  value={scale}
                >
                  <option value='1'>1X</option>
                  <option value='2'>2X</option>
                  <option value='3'>3X</option>
                  <option value='4'>4X</option>
                </select>
              </label>
            </div>

            <div>
              <input
                type='text'
                name='fileName'
                value={fileName}
                placeholder='File name'
                onChange={handelChange}
              />
              <button onClick={downloadAsImg}>Save as {fileName}.png</button>
              &nbsp;
              <button onClick={resetAllControls}>Reset all settings</button>
            </div>
          </div>
          <div className='editor-wrapper'>
            <Editor theme={theme} lang={lang} />
          </div>

          <div>
            <h1>Share your source code in image formate</h1>

            <p>
              Inspired by{' '}
              <a
                href='https://carbon.now.sh'
                target='_blank'
                rel='noopener noreferrer'
              >
                Carbon
              </a>
            </p>
            <p>
              Created by{' '}
              <a
                href='https://vnoit.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Vinoth Kumar
              </a>
            </p>
            <p>
              <a
                href='https://github.com/vnoitkumar/code-post'
                target='_blank'
                rel='noopener noreferrer'
              >
                Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
