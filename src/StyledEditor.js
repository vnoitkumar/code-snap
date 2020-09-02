import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import prettier from 'prettier/standalone';
import babylonParser from 'prettier/parser-babel';

// const babylonParser = await import('prettier/parser-babel') // import when it is required

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/mode/jsx/jsx');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/dracula.css');
require('codemirror/theme/panda-syntax.css');
require('codemirror/theme/material.css');

require('./style.css');
const DEFAULT_JS_VALUE =
  "import * as React from 'react'\r\nimport { withRouter } from 'react-router'\r\n\r\nimport * as methods from './methods'\r\nimport { Input } from '#components/Input'\r\nimport { inject, observer } from 'mobx-react'\r\nimport './Splash.css'\r\n\r\nconst selector = (tree) => {\r\n  console.warn({ tree })\r\n  return {\r\n    moduleStore: tree.state.moduleStore\r\n  }\r\n}";

const DEFAULT_JSX_OPTIONS = {
  theme: 'material',
  autoCloseBrackets: true,
  // cursorScrollMargin: 48,
  mode: 'jsx',
  // lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  styleActiveLine: true,
  viewportMargin: 99
};

export class StyledEditor extends React.Component {
  state = {
    jsValue: DEFAULT_JS_VALUE || this.props.jsValue
  };

  componentDidMount() {
    const jsValue = prettier.format(DEFAULT_JS_VALUE, {
      parser: 'babel',
      plugins: [babylonParser],
      semi: false,
      singleQuote: true
    });
    this.setState({
      jsValue
    });
  }

  formateCode = () => {
    try {
      const jsValue = prettier.format(this.state.jsValue, {
        parser: 'babel',
        plugins: [babylonParser],
        semi: false,
        singleQuote: true
      });
      this.setState({
        jsValue
      });
    } catch (error) {
      console.error(error);
    }
  };

  onChange = (which) => (editor, data, value) => {
    this.setState({ [`${which}Value`]: value });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.formateCode}>Formate Code</button>

        <PureEditor
          name='js'
          value={this.state.jsValue}
          options={DEFAULT_JSX_OPTIONS}
          onChange={this.onChange('js')}
        />
      </React.Fragment>
    );
  }
}

class PureEditor extends React.PureComponent {
  render() {
    console.log(`rendering -> ${this.props.name}`);
    return (
      <CodeMirror
        value={this.props.value}
        options={this.props.options}
        onBeforeChange={this.props.onChange}
      />
    );
  }
}
