import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Todolist from "./Component/Todolist";

function App() {
  return (
    <div className="App">
      <nav>
        <Link style={{ marginRight: "10px" }} to="/">
          Home
        </Link>
        <Link to="/todolist">Todolist</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todolist" element={<Todolist></Todolist>}></Route>
      </Routes>
    </div>
  );
}

export default App;
