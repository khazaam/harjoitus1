import '@mui/material';
import React from 'react';
import ReactDOM from "react-dom";

const DomiSivu = () => {
  const rootElement = document.getElementById('root');
  //const rootElement2 = document.getElementById("root");
  const element = <div style={{ color: 'green' }}>This is empty text, inside a div</div>;
  //const element2 = <div style={{ color: 'blue' }}>This is a another div</div>;
  ReactDOM.render(element, rootElement);
  return (
    <div>
      <header className="App-header">
        <h1>
          This is the Dom page exercise, this actually wont show,
          I also tried to use two rendered elements with dom, but it did not work.
        </h1>

      </header>

    </div>
  );
};

export default DomiSivu;