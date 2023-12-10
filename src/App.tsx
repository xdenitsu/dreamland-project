import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import EntryDetails from './components/EntryDetails/EntryDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="My Diary"/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/entries/:id" element={<EntryDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;