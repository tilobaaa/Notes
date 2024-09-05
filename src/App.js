import "./App.css";
import NoteContextProvider from "./store/NoteContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TakenNote from "./components/takenNote";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<TakenNote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);

function App() {
  const [userName, setUserName] = useState()

  return (
    <NoteContextProvider>
      <div className="App">
        <div>{routes}</div>
      </div>
    </NoteContextProvider>
  );
}

export default App;
