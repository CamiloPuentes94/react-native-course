import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {

  const { count, increaseBy, reset } = useCounter({
    initValue: 5
  })




  return (
    <>
      <h3>Contador with Hook <small>{count}</small></h3>

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
