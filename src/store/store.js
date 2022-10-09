import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../Modules/Calculator/calculatorSlice';

export default configureStore({
  reducer: {
    calc: calculatorReducer,
  },
});
