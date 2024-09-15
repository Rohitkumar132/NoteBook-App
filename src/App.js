import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import AddTodo from "./components/todo/AddTodo";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/add-todo" element={<AddTodo/>} />
        <Route exact path="/" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
