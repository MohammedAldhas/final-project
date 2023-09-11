
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Books{
    story:string,
    img:[{url:string}]
}
export default function BooksUser() {
  const [books, setbooks] = useState<Books[]>([]);
  const [img, setimg] = useState([]);
  const [count, setCount] = useState(0);
  const [countLength, setcountLength] = useState(0);
  const {id} = useParams()
  const book = async () => {
    try {
      axios
        .get(`https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks/${id}`)
        .then((res) => {
          console.log(res.data);
          setbooks(res.data.story);
          setimg(res.data.img)
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
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="w-2/4 h-2/4 bg-slate-500 flex justify-center items-center"
        onClick={() => {
  
        }}
      >
        {/* <div className="flex gap-1 justify-center items-center"> */}
          {books.map((el, i) => {
            if(count ==i){

                // console.log(img[i].url);
                
                return <div className="story text-start flex flex-col items-center">
                <img className="w-2/5" src={img[i].url} alt="error" />
                    {books[i]}
                </div>;
            }
          })}
        {/* </div> */}

        <button
          className="absolute left-0 bottom-4"
          onClick={(ev) => {
            if (count != countLength - 1) {
              setCount(count + 1);
            } else {
              ev.preventDefault();
            }
          }}
        >
          التالي
        </button>
        <button
          className="absolute right-0 bottom-4"
          onClick={(ev) => {
            if (count < countLength && count > 0) {
              setCount(count - 1);
            } else {
              ev.preventDefault();
            }
          }}
        >
          السابق
        </button>
      </div>
    </div>
  );
}
