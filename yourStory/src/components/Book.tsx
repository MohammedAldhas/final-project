// import React from 'react'
interface Books {
  img: string | undefined;
  tex: string;
}
export default function Book(props: Books) {
  return (
    <div className="flex justify-center gap-2 items-center max-md:flex-col-reverse max-md:justify-end h-full w-full">
      <div className="flex items-center">
        <p className="story text-right">{props.tex}</p>
      </div>
      <div className="max-md:h-[250px] w-full h-full flex justify-center items-center">
        <img className="h-full w-full" src={props.img} />
      </div>
    </div>
  );
}
