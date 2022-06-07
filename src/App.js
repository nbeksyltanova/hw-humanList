import "./App.css";

import { Input, TextField, Button } from "@mui/material";

import React, { useState } from "react";

function App() {
  const [text, setText] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sms, setSms] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  function addTodo() {
    if ((text.length, last.length, email.length === 0)) {
      alert("Оставили поле пустым");
    }
    setTodo([
      ...todo,
      {
        text: text,
        last: last,
        email: email,
        sms: sms,
      },
    ]);
    setText("");
    setLast("");
    setEmail("");
    setSms("");
  }
  return (
    <div className="App">
      <div className="blog">
        {" "}
        <div div className="name">
          {" "}
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Name"
            type="text"
            value={text}
            placeholder="Asan"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="last-name">
          {" "}
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="  Last name"
            type="text"
            value={last}
            placeholder="Asanov"
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <div className="email">
          <TextField
            className="tr"
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Email"
            type="email"
            value={email}
            placeholder="...@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>{" "}
        <div className="text">
          <textarea
            value={sms}
            placeholder="Your message"
            cols="26"
            rows="5"
            onChange={(e) => setSms(e.target.value)}
          >
            {" "}
          </textarea>
        </div>
        <div className="sent">
          <Button onClick={addTodo} className="btn" variant="contained">
            {" "}
            Send
          </Button>
        </div>
      </div>

      <ol>
        <h1>Human list:{todo.length}</h1>
        {todo.map((item) => (
          <li>
            <p> Your name:{item.text}</p>
            <p> Your last name :{item.last}</p>
            <p> Your Email: {item.email}</p>
            <p> Your message: {item.sms}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
