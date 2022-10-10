import React from 'react';
import Calculator from './Modules/Calculator';
import HistoryCalc from './Modules/HistoryCalc/HistoryCalc';
import './app.scss';
import { NavLink, Route, Routes } from 'react-router-dom';

const App = () => {
  let activeClassName = 'active';
  return (
    <section className='wrapper'>
      <div className='navigation'>
        <NavLink
          to=''
          end
          className={({ isActive }) =>
            isActive ? `${activeClassName} nav-link` : 'nav-link'
          }
        >
          My Calculator
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${activeClassName} nav-link` : 'nav-link'
          }
          to='/history'
        >
          History
        </NavLink>
      </div>

      <main>
        <Routes>
          <Route path='/' element={<Calculator />} />
          <Route path='/history' element={<HistoryCalc />} />
        </Routes>
        {/* {activeModule === 'calculator' && }
        {activeModule === 'history' && } */}
      </main>
    </section>
  );
};
export default App;
