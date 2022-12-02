import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value); // 숫자형으로 형변환을 하기 위해 +를 붙임
  };
  console.log(number);

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };

  return (
    <div>
      <h1>Number: {globalNumber}</h1>
      <input onChange={onChangeHandler} type="number" />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
}

export default App;

/*
// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch(); // 함수
  // const counterStore = useSelector((state) => state);
  // console.log(counterStore);
  const number = useSelector((state) => state.counter.number);
  // console.log(number);
  // {type:"PLUS_ONE"}
  // const counterStore = useSelector(function (state) {
  //   return state;
  // });

  return (
    <div>
      <h1>Number : {number}</h1>
      <button
        onClick={() => {
          // dispatch({ type: "PLUS_ONE" }); // 함수형태(action)
          dispatch(plusOne());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // dispatch({ type: "MINUS_ONE" }); // 함수형태(action)
          dispatch(minusOne());
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
*/
