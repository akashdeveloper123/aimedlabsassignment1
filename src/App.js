import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Dashboard from './dash';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
