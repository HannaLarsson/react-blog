import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Create } from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import { Home } from './pages/Home';
import About from './pages/About';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/create"  element={<Create/>} />
            <Route path="/blogs/:id"  element={<BlogDetails/>} />
          </Routes>
        </div>
      </div>
  </Router>
  );
};
