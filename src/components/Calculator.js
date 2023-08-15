import React, { useState } from 'react';
import Keys from './Keys';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [showInput, setShowInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (key) => {
    const calc = calculate(showInput, key);
    setShowInput(calc);
  };

  return (
    <>
    <div>
      Let's do some maths!
    </div>
    <div className="calc">
      <div className="output">
        {showInput.total}
        {' '}
        {showInput.operation}
        {' '}
        {showInput.next}
      </div>
      <Keys click={handleClick} />
    </div>
    </>
  );
};

export default Calculator;
