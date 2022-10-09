import React from 'react';
import Button from '../../UI/Button';

import './Calculator.scss';

const Calculator = () => {
  return (
    <div className='App'>
      <div className='display'>0</div>
      <div className='buttons'>
        <Button content='AC' type='function' />
        <Button content='±' type='function' />
        <Button content='%' type='function' />
        <Button content='÷' type='operator' />
        <Button content='7' />
        <Button content='8' />
        <Button content='9' />
        <Button content='x' type='operator' />
        <Button content='4' />
        <Button content='5' />
        <Button content='6' />
        <Button content='-' type='operator' />
        <Button content='1' />
        <Button content='2' />
        <Button content='3' />
        <Button content='+' type='operator' />
        <Button content='0' />
        <Button content='.' />
        <Button content='=' type='operator' />
      </div>
    </div>
  );
};

export default Calculator;
