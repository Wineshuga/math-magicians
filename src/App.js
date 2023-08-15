import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import HomePage from './components/HomePage';

const Layout = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <ul>
        <Link className="link link-border" to="/">Home</Link>
        <Link className="link link-border" to="calculator">Calculator</Link>
        <Link className="link" to="quote">Quote</Link>
      </ul>
    </header>
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
