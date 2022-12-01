import React, { useState } from 'react'
/* eslint no-eval: 0 */
function Calculator() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '+', '-', '.', '%'];

  const handleClick = (value) => {
    if (
      (ops.includes(value) && (calc === '')) ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const backspace = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const clear = () => {
    setCalc("");
  }

  return (
    <div className='container'>
      <div className='display'>
        {result ? '' : ''}
        {calc || "0"}
      </div>
      <div className='keypad'>
        <button onClick={clear} className="clear">AC</button>
        <button onClick={backspace}>&larr;</button>
        <button onClick={() => handleClick('/')}>&divide;</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate} className="result">=</button>
      </div>
    </div>
  )
}

export default Calculator