import "./App.css";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<CreatePost></CreatePost>}></Route>
          <Route exact path="/read" element={<Read></Read>}></Route>
          <Route exact path="/edit/:id" element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
