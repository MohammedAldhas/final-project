
import Home from "./pages/Home";


import "./App.css";
// import ChatGPT from "./components/ChatGPT";
import { Routes,Route } from "react-router-dom";
import BooksUser from "./components/BooksUser";
import ChatGPT from "./components/ChatGPT";
import OurStory from "./pages/OurStory";




function App() {

  
  return (


    <>

<Routes>

  <Route path="/" element={<OurStory></OurStory>}></Route>
  <Route path="/user" element={<ChatGPT></ChatGPT>}></Route>
  <Route path="/:id" element={<BooksUser></BooksUser>}></Route>
</Routes>
        
    </>


  );
}


export default App;
