import { useState, useEffect } from "react";
import axios from "axios";
import BookCover from "../components/BookCover";

interface Boks {
  id: number;
  title: string;
  img: [{ url: string }];
}
export default function OurStory() {
  const [boks, setboks] = useState<Boks[]>([]);
  // const [books, setbooks] = useState([]);
  const [input, setinput] = useState("");
  useEffect(() => {
    axios
      .get("https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks")
      .then((res) => {
        setboks(res.data);
        console.log(res.data);
      });
  }, []);

  const filteredBooks = boks.filter((el) => {
    return el.title.includes(input);
  });
  // g
  return (
    <div className="flex flex-col justify-center items-center gap-2  ">
      <h1 className="text-xl" id="ourStory">
        قصصنا
      </h1>

      <div className=" w-2/5 max-md:w-3/4 max-sm:w-full flex justify-center relative ">
        <input
          className="border w-full  p-2 rounded-full text-right outline-none"
          type="search"
          placeholder="ابحث عن القصة"
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <i className="fa-solid fa-magnifying-glass absolute top-2/4 -translate-y-2/4 left-5"></i>
      </div>

      <div
        className="grid grid-cols-4  w-full justify-between items-center mt-10 p-5
       gap-14 py-7  rounded-3xl bg-[#ffffff33] my-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:w-full"
      >
        {filteredBooks.map((el) => {
          return (
            <div
              className="flex justify-center items-center w-full "
              onClick={() => {
                console.log(el.id);
                location.href = `/${el.id}`;
              }}
            >
              <BookCover
                key={el.id}
                img={
                  (el.img[0].url == ""
                    ? "https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg"
                    : el.img[0].url)
                }
                title={el.title}
              ></BookCover>
            </div>
          );
        })}
      </div>
    </div>
  );
}
