import React from "react";
import { Header, Skills } from "./components";

const skills = [
  {
    id: 1,
    name: "Welcome",
    description: "greets the user",
    examples: ["hi there", "hello", "what's up"],
  },
  {
    id: 2,
    name: "Weather",
    description: "gets the weather from the user",
    examples: [
      "What's the weather",
      "can you tell me the weather",
      "Let me know the weather",
    ],
  },
  {
    id: 3,
    name: "Puns",
    description: "fetchs puns from the joke API",
    examples: [
      "Can you give me a pun",
      "I need a joke right now",
      "please can I have a joke",
      "Tell me something funny",
      "Give me a joke",
    ],
  },
  {
    id: 4,
    name: "time",
    description: "get the time",
    examples: [
      "What is the time here",
      "What is the time in Toyko",
      "What is the time in Paris",
      "Tell me the time in Paris",
      "I need the time in Paris",
    ],
  },
  {
    id: 5,
    name: "goodbye",
    description: "says goodbye to the user",
    examples: [
      "See you later",
      "bye",
      "Goodbye, Bob",
      "In a bit",
      "Until next time",
    ],
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Skills skills={skills} />
    </>
  );
};

export default App;
