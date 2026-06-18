import { useState } from "react";
import Todo from "./todo";
import SignUporm from "./SignUporm";
import "./App.css";
import SignUpormHook from "./SignUpormHook";
import RoutingExample from "./RoutingExample";
import { BrowserRouter } from "react-router-dom";

function Greeting({ age, name }) {
  return <h1>hello {name}</h1>;
}

function App() {
  // const showGreeting = false;
  const [showGreeting, setShowGreeting] = useState(true);
  function toggleGreet() {
    if (showGreeting) {
      setShowGreeting(false);
    } else {
      setShowGreeting(true);
    }
  }

  return (
    <>
      <button onClick={toggleGreet}>Toggle</button>
      <div>{showGreeting && <Greeting name={"ps"} age={"22"} />}</div>
      <Todo />
      <SignUporm />
      <SignUpormHook />
      <BrowserRouter>
        <RoutingExample />
      </BrowserRouter>
    </>
  );
}

export default App;
