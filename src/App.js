import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign_up from "./Sign_up";
import Login from "./Login";
import Verification from "./Verification";


function App() {
  return (
    <div>
      {/* <Sign_up/> */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
