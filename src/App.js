import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InputBar from './Components/InputBar/InputBar';
import CalculationLogs from './Components/CalculationLogs/CalculationLogs';
import socketIOClient from "socket.io-client";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

function App() {
  const [logs, setLogs] = useState(["a string", "another string"]);
  
  // listen to socket update
  useEffect(() => {
    socket.on("update", data =>{
      console.log("update")
      setLogs(data);
    })
  }, []);

  return (
    <div className="App container">
      <h1 className="mt-3">Calculator app</h1>
      <InputBar socket={socket}/>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Read more about the limitations of this calculator
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <ul className="text-left">
              <li>Only support these operations: <strong>+, -, *, \</strong></li>
              <li>Don't comply to the order of operation, we read from right to left instead</li>
              <p>For example, <em>5 + 2 * 10</em> will result in <em>70</em> instead of <em>25</em></p>
            </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <h2 className="mt-5 text-left">Logs:</h2>
      <CalculationLogs logs={logs}/>
    </div>
  );
}

export default App;
