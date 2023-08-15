import React, { useState } from 'react';
import Keys from './Keys';
import calculate from '../logic/calculate';
import styles from '../styles/Calculator.module.css';

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
    <div className={styles.calcPage}>
      <h2>
        Let&apos;s do some maths!
      </h2>
      <div className={styles.calc}>
        <div className={styles.output}>
          {showInput.total}
          {' '}
          {showInput.operation}
          {' '}
          {showInput.next}
        </div>
        <Keys click={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
