import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { ThemeContext, themes } from "./components/ThemeContext";
import MyButton from "./components/MyButton";
import MyNewButton from "./components/MyNewButton";


function App() {

  const [currentTheme, setCurrentTheme] =useState(themes.light);

  return (
    <div className="App">
      
      <ThemeContext.Provider value={{
        theme: currentTheme,
        updateTheme: setCurrentTheme
      }}>

        <MyButton onClick={() => setCurrentTheme(themes.dark)}>
          <Link to="/">Click to view Home page</Link>
        </MyButton>
        <MyNewButton onClick={() => setCurrentTheme(themes.light)}>
          <Link to="about">Click to view About page</Link>
        </MyNewButton>

      </ThemeContext.Provider>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
      </Routes>
    </div>
  )
}

export default App