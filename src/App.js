import './App.css';
import SketchDisplay from './components/SketchDisplay';
import Editor from './components/Editor/Editor';
import { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  return (
    <div className="App">
      <Editor setCode={setCode}/>
      <SketchDisplay code={code}/>
    </div>
  );
}

export default App;
