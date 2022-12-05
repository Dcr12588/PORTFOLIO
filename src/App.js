import './App.scss'
import { Routes, Route } from 'react-router-dom';
import AllCss from './components/allCSS';
import Home from './components/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element={<AllCss />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
