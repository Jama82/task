

import { Form } from 'react-bootstrap';
import './App.css';
import Counter from './components/Counter/Counter';
import UserContextProvider from './components/MainContext';
import MainRoutes from './components/MainRoutes';

import Receipts from './components/Menu/Receipts';

function App() {
  return (
    
<div className="App">
  
      <Counter />
    <Receipts />
    <Form />
   
    
    </div>
  );
}

export default App;


