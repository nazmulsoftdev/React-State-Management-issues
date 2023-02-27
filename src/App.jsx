import React, { useState } from "react";
import AdditionCount from "./components/AdditionCount/AdditionCount";
import View from "./components/View";

const InitialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [state, setState] = useState(InitialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };



  // INCREMENT 

  const Increment = (id) => {
    const updateCount = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });

    setState(updateCount);
  };


  // DECREMENT

  const Decrement = (id) => {
    const updatedCount = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }

      return {
        ...c,
      };
    });

    setState(updatedCount);
  };

  return (
    <div className="App">
      {state.map((count) => (
        <View
          key={count.id}
          id={count.id}
          count={count.count}
          Increment={Increment}
          Decrement={Decrement}
        />
      ))}

      <br />
      <AdditionCount totalCount={totalCount()} />
    </div>
  );
}

export default App;
