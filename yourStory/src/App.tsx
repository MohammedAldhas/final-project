import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BooksUser from "./components/BooksUser";
import ChatGPT from "./components/ChatGPT";
import SignInPage from "./pages/SignInPage";
import LogInPage from "./pages/LogInPage";

function App() {
  // const key = import.meta.env;
  // import.meta.env.DB_PASSWORD
  console.log(import.meta.env);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user" element={<ChatGPT></ChatGPT>}></Route>
        <Route path="/:id" element={<BooksUser></BooksUser>}></Route>
        <Route path="/Sign" element={<SignInPage></SignInPage>}></Route>
        <Route path="/LogIn" element={<LogInPage></LogInPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
