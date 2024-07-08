import { useState } from "react"

export default function CounterApp() {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const {counter1, counter2, counter3} = state // desestructuramos el state
  return (
      <>
          <h1>Counter1: { counter1 }</h1>
          <h1>Counter2: { counter2 }</h1>
          <h1>Counter3: { counter3 }</h1>
          <hr />
          <button
              className="btn"
              onClick={() => setCounter({
                  ...state, // llamamos el valor de todos los elementos del objeto con spread
                  counter1: counter1 + 1,
                })
              }
          >
              + 1 to Counter1
          </button>
      </>
  )
}
