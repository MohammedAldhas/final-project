import "./App.css";
// import ChatGPT from "./components/ChatGPT";
import { Routes, Route } from "react-router-dom";
import BooksUser from "./components/BooksUser";
import ChatGPT from "./components/ChatGPT";
import OurStory from "./pages/OurStory";

import SignInPage from "./pages/SignInPage";
import LogInPage from "./pages/LogInPage";

function App() {
  // console.log(process);

  return (
    <>
      <Routes>
        <Route path="/" element={<OurStory></OurStory>}></Route>
        <Route path="/user" element={<ChatGPT></ChatGPT>}></Route>
        <Route path="/:id" element={<BooksUser></BooksUser>}></Route>
        <Route path="/Sign" element={<SignInPage></SignInPage>}></Route>
        <Route path="/LogIn" element={<LogInPage></LogInPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
