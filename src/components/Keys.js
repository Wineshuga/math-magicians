import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Keys.module.css';

const Keys = ({ click }) => {
  const keys = [
    'AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];

  return (
    <div className={styles.keys}>
      {keys.map((key) => (
        <button
          key={key}
          type="button"
          className={`${styles.key} ${key === '0' ? styles.zero : ''} ${['+', '-', '÷', 'x', '='].includes(key) ? styles['orange-key'] : styles['grey-key']}`}
          onClick={() => click(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

Keys.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Keys;
