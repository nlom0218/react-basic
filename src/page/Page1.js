import React, { useState } from 'react';

const Page1 = () => {
  const [number1, setNumber1] = useState(1)
  const [number2, setNumber2] = useState(1)
  const [result1, setResult1] = useState(undefined)
  const [result2, setResult2] = useState(undefined)

  const plusFn = (num1, num2) => {
    const result = num1 + num2
    setResult1(result)
  }

  const minusFn = (num1, num2) => {
    setResult2(num1 - num2)
  }

  const onClickBtn = (number, type) => {
    if (number === "number1") {
      if (type === "apple") {
        setNumber1(prev => prev + 1)
      } else if (type === "minus") {
        setNumber1(prev => prev - 1)
      } else {
        setNumber1(1)
      }
    } else {
      if (type === "apple") {
        setNumber2(prev => prev + 1)
      } else if (type === "minus") {
        setNumber2(prev => prev - 1)
      } else {
        setNumber2(1)
      }
    }
  }

  return (<div>
    <div>number1: {number1}</div>
    <button onClick={() => onClickBtn("number1", "apple")}>+</button>
    <button onClick={() => onClickBtn("number1", "minus")}>-</button>
    <button onClick={() => onClickBtn("number1", "reset")}>리셋</button>
    <div>number2: {number2}</div>
    <button onClick={() => onClickBtn("number2", "apple")}>+</button>
    <button onClick={() => onClickBtn("number2", "minus")}>-</button>
    <button onClick={() => onClickBtn("number2", "reset")}>리셋</button>
    <br />
    <button onClick={() => plusFn(number1, number2)}>더하기</button>
    <div>더하기 결과: {result1}</div>
    <button onClick={() => minusFn(number1, number2)}>빼기</button>
    <div>빼기 결과: {result2}</div>
  </div>);
}

export default Page1;