import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BookCover from "../components/BookCover";
export default function OurStory() {
  const [boks, setboks] = useState([]);
  useEffect(() => {
    axios
      .get("https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks")
      .then((res) => {
        setboks(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <input className="border w-2/5 p-2 rounded-full" type="search" />
      <div className="grid grid-cols-5 w-9/12">
        {boks.map((el, i) => {
          return (
            <>
              <BookCover
                key={el.id}
                img={el.img[i].url}
                title={el.title}
              ></BookCover>
            </>
          );
        })}
      </div>
    </div>
  );
}
