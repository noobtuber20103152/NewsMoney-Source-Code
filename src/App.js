
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [bgColor, SetbgColor] = useState('light')
  const [DarkText, SetDarkText] = useState('Dark');
  const [TextColor, SetTextColor] = useState({
    color:"black"
  });
  const[dark, Setdark] = useState('light');
  const[light, Setlight] = useState('dark')
  const ChangeMode = function(){
    if(bgColor==='light'){
      SetbgColor('dark');
      SetDarkText('Light')
      SetTextColor({
        color:"white"
      })
      document.body.style.backgroundColor= "black"
      Setdark('dark')
      Setlight('light')
    }
    else{
      SetbgColor('light');
      SetDarkText('Dark')
      SetTextColor({
        color:"black"
      })
      document.body.style.backgroundColor= "white"
      Setdark('light')
      Setlight('dark')
    }
}
  return (
    <>
    <Navbar bgColor = {bgColor} TextColor = {TextColor} DarkText={DarkText} ChangeMode={ChangeMode}/>
    <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<News dark = {dark} light = {light} TextColor={TextColor} key="general"  category="general" />} />
            <Route exact path={"/sports"} element={<News dark = {dark} light = {light} TextColor={TextColor} key="sports" category="sports" />} />
            <Route exact path={"/science"} element={<News dark = {dark} light = {light}  TextColor={TextColor} key="science" category="science" />} />
            <Route exact path={"/technology"} element={<News dark = {dark} light = {light} TextColor={TextColor} key="technology" category="technology" />} />
            <Route exact path={"/business"} element={<News dark = {dark} light = {light} TextColor={TextColor} key="technology" category="business" />} />
            <Route exact path={"/health"} element={<News dark = {dark} light = {light} TextColor={TextColor} key="technology" category="health" />} />
            <Route exact path={"/entertainment"} element={<News dark = {dark} light = {light} TextColor={TextColor} key="technology" category="entertainment" />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
