import { UseCounter } from "../hooks/UseCounter";

export const ContadorComponents = () => {
  const { contador, incrementar, reset, decremento } = UseCounter(0);

  return (
    <>
      <div className="container">
        <h1 className=" d-flex justify-content-center align-items-center ">Counter :</h1>
        <h1 className="counter">{contador}</h1>
        <hr />
        <button className="btn btn-success btnapp" onClick={() => incrementar(1)}>+1</button>
        <button className="btn btn-danger btnapp" onClick={reset}>Reset</button>
        <button className="btn btn-primary btnapp" onClick={() => decremento(1)}> -1</button>
      </div>
    </>
  );
};
