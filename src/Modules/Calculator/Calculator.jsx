import React, { memo, useCallback, useEffect, useState } from 'react';
import Button from '../../UI/Button';

import './Calculator.scss';

const Calculator = () => {
  const [value, setValue] = useState('0');
  const [screen, setScreen] = useState('0');
  const [memory, setMemory] = useState(null);
  const [accumulatedValue, setAccumulatedValue] = useState(null);
  const [clearButton, setClearButton] = useState('AC');
  const [operator, setOperator] = useState(null);

  const operate = (operator, value, memory) => {
    switch (operator) {
      case '+':
        return memory + parseFloat(value);
      case '-':
        return memory - parseFloat(value);
      case 'x':
        return memory * parseFloat(value);
      case '÷':
        return memory / parseFloat(value);
      case '=':
        return value;
    }
  };

  const allClear = () => {
    setValue('0');
    setMemory(false);
    setOperator(null);
  };

  const keyHandler = (content) => () => {
    const number = parseFloat(value);

    if (content === 'C') {
      setClearButton('AC');
      setValue('0');
      setMemory('0');
      return;
    }

    if (content === 'AC') {
      allClear(content);
      return;
    }

    if (content === 'C') {
      setScreen('0');
      return;
    }

    if (content === '±') {
      setValue((number * -1).toString());
      setOperator(null);
      return;
    }

    if (content === '%') {
      setValue((number / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === '.') {
      if (value.includes('.')) return;

      setValue(value + '.');
      return;
    }

    if (content === '+') {
      if (operator && operator !== content) {
        const updatedResult = operate(operator, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue('0');
        setOperator('+');
        return;
      }
      if (operator === content) {
        const updatedResult = operate(content, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue('0');
        setOperator('+');
        return;
      }
      setMemory(parseFloat(value));
      setValue('0');
      setOperator('+');
      return;
    }

    if (content === '-') {
      if (operator && operator !== content) {
        const updatedResult = operate(operator, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue(parseFloat(updatedResult));
        setOperator('-');
        return;
      }
      if (operator === content) {
        const updatedResult = operate(operator, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue('0');
        setOperator('-');
        return;
      }
      setMemory(parseFloat(value));
      setValue('0');
      setOperator('-');
      return;
    }

    if (content === 'x') {
      if (operator && operator !== content) {
        const updatedResult = operate(operator, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue('0');
        setOperator('x');
        return;
      }
      if (operator === content) {
        const updatedResult = operate(operator, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue('0');
        setOperator('x');
        return;
      }
      setMemory(parseFloat(value));
      setValue('0');
      setOperator('x');
      return;
    }

    if (content === '÷') {
      if (operator && operator !== content) {
        const updatedResult = operate(operator, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue('0');
        setOperator('÷');
        return;
      }
      if (operator === content) {
        const updatedResult = operate(operator, value, memory);
        setMemory(parseFloat(updatedResult));
        setValue('0');
        setOperator('÷');
        return;
      }
      setMemory(parseFloat(value));
      setValue('0');
      setOperator('÷');
      return;
    }

    if (content === '=') {
      if (!operator) return;
      const result = operate(operator, value, memory).toString();
      setOperator(null);
      setValue(result);
      const date = new Date().toDateString();
      const calcHistory = JSON.parse(localStorage.getItem('calcHistory')) || [];
      const updatedHistory = [...calcHistory, { date, result }];
      console.log(updatedHistory);
      localStorage.setItem('calcHistory', JSON.stringify(updatedHistory));
      return;
    }

    setClearButton('C');
    setValue(parseFloat(number + content).toString());
  };

  useEffect(() => {
    if (memory && value === '0') {
      setScreen(memory.toString());
      return;
    }
    setScreen(value.toString());
  }, [value, memory, screen]);

  return (
    <div className='App'>
      <div className='display'>{screen}</div>
      <div className='buttons'>
        <Button onClick={keyHandler} content={clearButton} type='function' />
        <Button onClick={keyHandler} content='±' type='function' />
        <Button onClick={keyHandler} content='%' type='function' />
        <Button onClick={keyHandler} content='÷' type='operator' />
        <Button onClick={keyHandler} content='7' />
        <Button onClick={keyHandler} content='8' />
        <Button onClick={keyHandler} content='9' />
        <Button onClick={keyHandler} content='x' type='operator' />
        <Button onClick={keyHandler} content='4' />
        <Button onClick={keyHandler} content='5' />
        <Button onClick={keyHandler} content='6' />
        <Button onClick={keyHandler} content='-' type='operator' />
        <Button onClick={keyHandler} content='1' />
        <Button onClick={keyHandler} content='2' />
        <Button onClick={keyHandler} content='3' />
        <Button onClick={keyHandler} content='+' type='operator' />
        <Button onClick={keyHandler} content='0' />
        <Button onClick={keyHandler} content='.' />
        <Button onClick={keyHandler} content='=' type='operator' />
      </div>
    </div>
  );
};

export default Calculator;
