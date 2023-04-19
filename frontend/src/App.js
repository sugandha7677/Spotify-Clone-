import "./output.css";
import LoginComponent from "./routes/Login";


// import {BrowserRouter, Routes, Route } from "react-router-dom";
// npm instal
function App() {
  return (
    <div className="w-screen h-screen">
    <BrowserRouter>
 
    <Routes>
      <Route path = "/" element = {<HelloComponent />}/>
      <Route path ="/login" element = {<LoginComponent/>} />
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is hello from component</div>;
};

export default App;
