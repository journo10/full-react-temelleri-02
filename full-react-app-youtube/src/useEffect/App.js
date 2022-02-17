import React, { useState } from "react";
import "./styles.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";

export default function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
      <div className="App">
        {showComponent ? <FunctionComponent /> : <div />}
        <ClassComponent />
      </div>
    </>
  );
}
