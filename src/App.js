import React, { useState } from 'react';
import Calculator from './Modules/Calculator';
import HistoryCalc from './Modules/HistoryCalc/HistoryCalc';

const App = () => {
  const [activeModule, setActiveModule] = useState('calculator');
  return (
    <section className='app'>
      <div className='navigation'>
        <button onClick={() => setActiveModule('calculator')}>
          My Calculator
        </button>
        <button onClick={() => setActiveModule('history')}>History</button>
      </div>

      <main className='module'>
        {activeModule === 'calculator' && <Calculator />}
        {activeModule === 'history' && <HistoryCalc />}
      </main>
    </section>
  );
};
export default App;
