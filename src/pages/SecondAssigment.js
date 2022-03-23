import '@mui/material';
import { Box, Button, Card, Icon } from '@mui/material';
import React from 'react';
import '../App.css'
import LockIcon from '@mui/icons-material/Lock';

const { useState } = React;

const SecondAssigments = () => {
    const [counterOne, setCount1] = useState(0);
    const [counterSecond, setCount2] = useState(0);
    const [counterThird, setCount3 ] = useState(0);

      return (
      
    <div>
      <header className="App-header">
        <h3>
          This is the second assigment part for the course about the lock thing.
        </h3>
      <p>This will contain the lock</p>
      <LockIcon id="LockIconi"/>
      <Box display="flex" justifyContent="space-between" margin>
        <Card id='CardForButtons'><div id="LockNumbers" >{counterOne}</div><Button id="btn1" variant='contained' onClick={() => setCount1(counterOne + 1)}>First number</Button></Card>
        <Card id='CardForButtons'><div id="LockNumbers">{counterSecond}</div><Button id="btn2"variant='contained' onClick={() => setCount2(counterSecond + 1)}>Second number</Button></Card>
        <Card id='CardForButtons'><div id="LockNumbers">{counterThird}</div><Button id="btn3" variant='contained' onClick={() => setCount3(counterThird + 1)}>Third number</Button></Card>
      </Box>
      </header>


    </div>
  );
};

export default SecondAssigments;