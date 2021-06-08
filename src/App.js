import { render } from '@testing-library/react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Heading from './components/Header'
function App() {
  return (
  <Router>

  <Route path ='/'exact render = {()=>(
    <>
     <Heading/>
    </>
  )}/>

 </Router>
   );
}


export default App;
