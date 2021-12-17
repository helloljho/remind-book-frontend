import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import BookList from './pages/BookList';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/test" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
