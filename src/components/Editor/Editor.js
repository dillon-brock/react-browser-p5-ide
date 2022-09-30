import './Editor.css';

import AceEditor from 'react-ace';

import "ace-builds/webpack-resolver";
import 'ace-builds/src-noconflict/mode-javascript.js';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useState } from 'react';

export default function Editor({ setCode }) {
  const [editorCode, setEditorCode] = useState('');
  return (
    <div className='editor'>
      <div className='control-buttons'>
        <button className='play-button' onClick={() => setCode(editorCode)}>▶︎</button>
        <button className='stop-button' onClick={() => setCode('')}>◼︎</button>
      </div>
      <AceEditor
        onChange={(value) => {
          setEditorCode(value);
        }}
        value={editorCode}
        mode='javascript'
        theme='monokai'
      />
    </div>
  )
}