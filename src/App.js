import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InputBar from './Components/InputBar/InputBar';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
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
      <div>Placeholder for log viewer</div>
    </div>
  );
}

export default App;
