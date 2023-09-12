import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Nav from "../components/Nav";
import UserNav from "./UserNav";
import images from "../assets/book.png";

interface Books {
  story: string;
  img: [{ url: string }];
}
export default function BooksUser() {
  const [books, setbooks] = useState<Books[]>([]);
  const [img, setimg] = useState([]);
  const [count, setCount] = useState(0);
  const [countLength, setcountLength] = useState(0);
  const { id } = useParams();
  const book = async () => {
    try {
      axios
        .get(`https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks/${id}`)
        .then((res) => {
          console.log(res.data);
          setbooks(res.data.story);
          setimg(res.data.img);
          setcountLength(res.data.story.length);
        });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    book();
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-screen bg-[#DEDBE9] ">
      {localStorage.getItem("user") ? (
        <UserNav></UserNav>
      ) : (
        <nav className="flex w-full items-center justify-between  bg-[#744D90] fixed top-0 px-20 max-sm:px-1 py-2 z-30 text-white">
          <a href="/">الرئيسية</a>
        </nav>
      )}

      <div
        className="w-2/4 h-2/4 bg-slate-800 flex justify-center items-center relative"
        onClick={() => {}}
      >
        {/* <div className="flex gap-1 justify-center items-center"> */}
        {books.map((el, i) => {
          if (count == i) {
            // console.log(img[i].url);

            return (
              <div className="bg-slate-100 story text-start flex items-center gap-6 h-full">
                <div
                  style={{ backgroundImage: `url(${img[i].url && images})` }}
                  className="border-l h-full w-2/5 flex justify-center items-center bg-cover bg-center"
                >
                  {/* <img className="" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg" alt="" /> */}
                </div>
                <p className="w-2/4">{books[i]}</p>
              </div>
            );
          }
        })}
        {/* </div> */}

        <button
          className="absolute righ-2/3 translate-x-2/3 bottom-0 bg-slate-400 text-xs rounded-full w-10 h-10"
          onClick={(ev) => {
            if (count != countLength - 1) {
              setCount(count + 1);
            } else {
              ev.preventDefault();
            }
          }}
        >
          <i className="fa-solid fa-arrow-left text-lg"></i>
        </button>
        <button
          className="absolute left-2/3 -translate-x-2/3 bottom-0 bg-slate-400 text-xs rounded-full w-10 h-10"
          onClick={(ev) => {
            if (count < countLength && count > 0) {
              setCount(count - 1);
            } else {
              ev.preventDefault();
            }
          }}
        >
          <i className="fa-solid fa-arrow-right text-lg"></i>
        </button>
      </div>
    </div>
  );
}
