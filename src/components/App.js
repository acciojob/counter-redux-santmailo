import React from "react";
import "./../styles/App.css";
import { Counter } from "../features/counter/counter";
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Counter />
    </div>
  );
};

export default App;
