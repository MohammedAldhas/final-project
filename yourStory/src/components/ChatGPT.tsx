import { useState, useEffect } from "react";
import axios from "axios";

import Book from "./Book";
interface Boks {
  id: number;
  title: string;
  img: [{ url: string }];
}
const ChatGPT = () => {
  const apiKey = "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";
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [imge, setImg] = useState([
    {
      url: "",
    },
  ]);
  const [translate, settranslate] = useState("");
  const [count, setcount] = useState(0);
  const [hiddenClass, sethiddenClass] = useState("hidden");
  const [boks, setboks] = useState<Boks[]>([]);

  useEffect(() => {
    axios
      .get("https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks")
      .then((res) => {
        setboks(res.data);
      });
  }, []);

  const translater = async () => {
    try {
      axios
        .post(
          "https://libretranslate.de/translate",
          {
            q: input,
            source: "ar",
            target: "en",
            api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data.translatedText);
          settranslate(res.data.translatedText);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const userbooks = [];

  const sendToGPT = async () => {
    try {
      axios
        .post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: ` قصة اطفال عن ${input}`,

              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setResponse(res.data.choices[0].message.content);
          // console.log(res.data.choices[0].message.content);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const imgGPT = async () => {
    try {
      axios
        .post(
          "https://api.openai.com/v1/images/generations",
          {
            prompt: `${translate} cartoon`,
            n: 10,
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setImg(res.data.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //  ================================================================================

  const arr = response.split("\n\n");

  return (
    <div className="bg-[#F9E9E9] py-5">
      <div className="flex justify-center items-center gap-3">
        <input
          className="border p-3 text-right rounded-full mb-5 w-3/12 outline-none"
          type="text"
          id="input"
          placeholder="اكتب قصتك"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onMouseLeave={() => {
            translater();
          }}
        />
        <button
          className="shadow"
          onClick={() => {
            setTimeout(() => {
              imgGPT();
            }, 2000);
            sendToGPT();
          }}
        >
          انشاء
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {arr.map((e, i) => {
          if (i == count) {
            
            return (
              <div
                key={i}
                className="shadow rounded bg-slate-50 w-2/4 h-96 flex overflow-hidden p-4 gap-4 justify-center relative"
              >
                <Book img={imge[count].url} tex={e}></Book>
                <button
                  className="absolute left-0 bottom-4"
                  onClick={(ev) => {
                    if (count < arr.length && count != arr.length - 1) {
                      setcount(count + 1);

                      console.log(arr.length);
                      console.log(count);
                      console.log(imge);
                      if (count == arr.length - 2) {
                        sethiddenClass("block");
                      }
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
                    if (count < arr.length && count > 0) {
                      setcount(count - 1);
                    } else {
                      console.log(arr);
                      console.log(imge);

                      ev.preventDefault();
                    }
                  }}
                >
                  السابق
                </button>

                <button
                  className={`${hiddenClass}`}
                  onClick={() => {
                    const book = {
                      img: imge,
                      story: arr,
                    };
                    userbooks.push(book);
                    // console.log(userbooks);

                    axios.post(
                      "https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks",
                      {
                        img: book.img,
                        title: input,
                        story: arr,
                      }
                    );
                  }}
                >
                  send
                </button>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4 mt-6 w-2/4">
          {boks.map((el, i) => {
            return (
              <div key={i} className=" flex flex-col justify-between">
                <div
                  id={`${el.id}`}
                  className="bg-white h-56 flex justify-center items-end gap-2 rounded-3xl shadow bg-cover bg-center hover:scale-105"
                  style={{ backgroundImage: `url(${el.img[i].url})` }}
                  // onClick={(e) => {

                  // }}
                >
                  {/* <img className="w-3/6" src={el.img[i].url} alt="خطا" /> */}
                  <h2 className="bg-slate-50 w-full p-2 rounded-3xl text-center text-sm">
                    {el.title}
                  </h2>
                </div>
                <div className="flex gap-1 justify-center text-center ">
                  <div
                    id={`${el.id}`}
                    className=" bg-blue-500 cursor-pointer text-white rounded-full w-2/5"
                    onClick={() => {
                      console.log(el.id);
                      location.href = `/${el.id}`;
                    }}
                  >
                    عرض
                  </div>
                  <div
                    id={`${el.id}`}
                    className=" bg-red-600 text-white rounded-full w-2/5"
                    onClick={() => {
                      axios.delete(
                        `https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks/${el.id}`
                      );
                    }}
                  >
                    حذف
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatGPT;
