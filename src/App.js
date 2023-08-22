import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route Component={Home} path="/" exact={true} />
            <Route Component={About} path="/about" />
            <Route Component={SinglePost} path="/post/:slug" />
            <Route Component={Post} path="/post" />
            <Route Component={Project} path="/project" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
