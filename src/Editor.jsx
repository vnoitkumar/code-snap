import React, { useState, useEffect } from 'react';
import CodeMirror from './CodeMirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/xml/xml'; // for html
import 'codemirror/mode/css/css'; // The SCSS mode is a sub-mode of the CSS mode (defined in css.js).
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/shell/shell'; // bash
import 'codemirror/mode/python/python';
import 'codemirror/mode/dart/dart';
import 'codemirror/mode/dockerfile/dockerfile';
import 'codemirror/mode/clike/clike'; // Scala, Java, Objective-C, C++, C
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/go/go';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/ruby/ruby';

import 'codemirror/lib/codemirror.css';
import './editor.css';

function Editor({ theme, lang }) {
  const DEFAULT_CODE = `import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}`;

  const options = {
    theme,
    mode: lang,
    tabSize: 2
  };

  useEffect(
    function () {
      switch (theme) {
        case '3024-day':
          require('codemirror/theme/3024-day.css');
          break;
        case '3024-night':
          require('codemirror/theme/3024-night.css');
          break;
        case 'abcdef':
          require('codemirror/theme/abcdef.css');
          break;
        case 'ambiance':
          require('codemirror/theme/ambiance.css');
          break;
        case 'base16-dark':
          require('codemirror/theme/base16-dark.css');
          break;
        case 'base16-light':
          require('codemirror/theme/base16-light.css');
          break;
        case 'blackboard':
          require('codemirror/theme/blackboard.css');
          break;
        case 'cobalt':
          require('codemirror/theme/cobalt.css');
          break;
        case 'darcula':
          require('codemirror/theme/darcula.css');
          break;
        case 'dracula':
          require('codemirror/theme/dracula.css');
          break;
        case 'eclipse':
          require('codemirror/theme/eclipse.css');
          break;
        case 'liquibyte':
          require('codemirror/theme/liquibyte.css');
          break;
        case 'material':
          require('codemirror/theme/material.css');
          break;
        case 'material-darker':
          require('codemirror/theme/material-darker.css');
          break;
        case 'material-palenight':
          require('codemirror/theme/material-palenight.css');
          break;
        case 'material-ocean':
          require('codemirror/theme/material-ocean.css');
          break;
        case 'mbo':
          require('codemirror/theme/mbo.css');
          break;
        case 'midnight':
          require('codemirror/theme/midnight.css');
          break;
        case 'monokai':
          require('codemirror/theme/monokai.css');
          break;
        case 'moxer':
          require('codemirror/theme/moxer.css');
          break;
        case 'paraiso-light':
          require('codemirror/theme/paraiso-light.css');
          break;
        case 'seti':
          require('codemirror/theme/seti.css');
          break;
        default:
          require('codemirror/theme/monokai.css');
          break;
      }
    },
    [theme]
  );

  const [code, setCode] = useState(DEFAULT_CODE);

  function onChange(editor, data, value) {
    setCode(value);
  }

  return <CodeMirror value={code} options={options} onChange={onChange} />;
}

export default Editor;
