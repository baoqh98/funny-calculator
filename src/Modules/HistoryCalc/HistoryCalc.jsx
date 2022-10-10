import React from 'react';

import './HistoryCalc.scss';

const HistoryCalc = () => {
  const calcHistory = JSON.parse(localStorage.getItem('calcHistory')) || [];
  return (
    <div className='history'>
      <h1>Calculation History</h1>
      <ul>
        {calcHistory.map((item) => {
          return (
            <li key={item.date + Math.random()}>
              <h6>{item.date}</h6>
              <p>{item.result}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoryCalc;
