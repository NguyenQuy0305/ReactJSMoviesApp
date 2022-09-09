import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Catalog />}>
            <Route path="search/:keyword" element={<Catalog />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
