import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InputBar from './Components/InputBar/InputBar';
import CalculationLogs from './Components/CalculationLogs/CalculationLogs';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");
  const [logs, setLogs] = useState(["a string", "another string"]);
  
  // listen to socket update
  useEffect(() => {
    let socket = socketIOClient(ENDPOINT);
    socket.on("logsUpdate", data => {
      setResponse(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Calculator app</h1>
      <InputBar/>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
      <h2>Logs:</h2>
      <CalculationLogs logs={logs}/>
    </div>
  );
}

export default App;
