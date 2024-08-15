import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const secondTextAreaRef = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (secondTextAreaRef.current) {
      secondTextAreaRef.current.scrollTop = secondTextAreaRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <div className="App">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Digite algo aqui..."
      />
      <textarea
        value={text}
        readOnly
        placeholder="O texto aparece aqui..."
        ref={secondTextAreaRef}
      />
    </div>
  );
}

export default App;