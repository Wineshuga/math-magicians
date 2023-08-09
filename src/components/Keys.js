import React from 'react';

const Keys = () => {
  const keys = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="keys">
      {keys.map((key) => (
        <button key={key} type="button" className={`key ${key === '0' ? 'zero' : ''} ${['+', '-', '÷', '×', '='].includes(key) ? 'orange-key' : 'grey-key'}`}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keys;
