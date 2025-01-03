import { useState } from "react"

export const Counter = () => {

  const [count, setCount] = useState<number>(10)

  const increaseBy = (value: number) => {
    setCount(count + value)
  }

  const reset = () => {
    setCount(10)
  }


  return (
    <>
      <h3>Contador <small>{count}</small></h3>

      <div>
        <button onClick={() => increaseBy(1)}>+ 1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>- 1</button>
        &nbsp;
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}
