import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import ContactUs from "./components/views/ContactUs";
function App() {
  return (
    <div>
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
        <li>
          <Link to="/contact-us">Contact Us With Link To</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
export default App;
