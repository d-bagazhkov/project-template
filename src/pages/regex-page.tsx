import React from "react";
import CodeMirror from 'react-codemirror'
import './regex-page.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/darcula.css'

type RegexPageState = {
  regexValue: string,
  fieldValue: string
};

type RegexPageProps = {};

export default class RegexPage extends React.Component<RegexPageProps, RegexPageState> {

  state = {
    regexValue: "/[\\w\\W]*",
    fieldValue: ""
  };

  regexEditor: CodeMirror.Editor | null = null;

  render() {
    return (
      <div>
        It is regex parse page
        <CodeMirror
          value={this.state.regexValue}
          options={{
            mode: 'javascript',
            theme: 'darcula',
            lineNumbers: false
          }}
          ref={(editor: ReactCodeMirror.ReactCodeMirror) => this.regexEditor = this.regexEditor || editor.getCodeMirror()}
        />
        <CodeMirror
          className="field-value"
          value={this.state.fieldValue}
          options={{
            mode: 'regex',
            theme: 'darcula',
            lineNumbers: true
          }}
          onChange={(e) => this.setState({fieldValue: e.replace("\n", "")})}
        />
      </div>
    );
  }

  componentDidMount(): void {
    if (this.regexEditor) {
      this.regexEditor.setSize(null, this.regexEditor.defaultTextHeight() + 2 * 4);
      this.regexEditor.on("beforeChange", function (instance, change) {
        const newText = change.text.join("").replace(/\n/g, ""); // remove ALL \n !
        change.update && change.update(change.from, change.to, [newText]);
        return true;
      });
    }
  }

}
