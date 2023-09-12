// import React from 'react'
interface Books {
  img: string |undefined;
  tex: string;
}
export default function Book(props: Books) {
  return (
    <>
      <div className="flex items-center">
        <p className="story text-right">{props.tex}</p>
      </div>
      <img src={props.img && "https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg"} alt="" />
    </>
  );
}
