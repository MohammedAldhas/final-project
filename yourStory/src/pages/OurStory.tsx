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
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-xl">قصصنا</h1>
      <input
        className="border w-2/5 p-2 rounded-full text-right"
        type="search"
        placeholder="ابحث عن القصة"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <div className="grid grid-cols-5 gap-4 w-9/12">
        {filteredBooks.map((el) => {
          return (
            <div
              onClick={() => {
                console.log(el.id);
                location.href = `/${el.id}`;
              }}
            >
              <BookCover
                key={el.id}
                img={el.img[0].url}
                title={el.title}
              ></BookCover>
            </div>
          );
        })}
      </div>
    </div>
  );
}
