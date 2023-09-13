import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import UserNav from "./UserNav";
import Book from "./Book";
import BookCover from "./BookCover";
interface Boks {
  user: string;
  id: number;
  title: string;
  img: [{ url: string }];
}
const ChatGPT = () => {
  const nave = useNavigate();
  if (!localStorage.getItem("user")) {
    nave("/");
    // location.href =
  }
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
  // const [boks, setboks] = useState<Boks[]>([]);

  const userId = localStorage.getItem("user");
  useEffect(() => {
    axios
      .get("https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks")
      .then((res) => {
        setboks(
          res.data.filter((el) => {
            return el.user == userId;
          })
        );
      });
  }, [response]);

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
            prompt: `${translate} cartoon style`,
            n: 10,
            // num_images: 15,
            // model: "text-davinci-002",
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);

          setImg(res.data.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //  ================================================================================

  const arr = response.split("\n\n");

  return (
    <div className="bg-[#6772c849]  flex flex-col justify-center items-center  w-full bg-[#DEDBE9] py-32">
      {localStorage.getItem("user") ? <UserNav></UserNav> : <Nav></Nav>}

      <div className="flex justify-center items-center gap-1 w-full ">
        <input
          className="border p-3 text-right rounded-full w-2/6 max-sm:w-2/3 outline-none"
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
          onClick={() => {
            console.log(imge);
          }}
        />
        <button
          className="shadow w-14 text-white text-xs py-1 rounded-full bg-[#744D90] "
          onClick={() => {
            imgGPT();

            sendToGPT();
          }}
        >
          انشاء
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-2/3 max-md:w-3/4 max-sm:w-5/6 h-[350px]  mt-5">
        {arr.length > 10
          ? (arr.length = 10)
          : arr.map((e, i) => {
              if (i == count) {

                
                return (
                  //

                  <div
                    key={i}
                    className=" bg-[#744d9088] story text-start flex  w-full  items-center gap-6 h-full shadow rounded-2xl relative"
                  >
                    <div
                      style={{ backgroundImage: `url(${imge[count].url})` }}
                      className="border-l h-full w-2/4 flex justify-center items-center bg-cover bg-center rounded-r-xl"
                      onClick={(ev) => {
                        if (count < arr.length && count > 0) {
                          setcount(count - 1);
                        } else {
                          ev.preventDefault();
                        }
                      }}
                    ></div>
                    {/* <img src={imge[count].url} alt="" /> */}
                    <div
                      className=" h-full flex justify-center items-center w-2/4"
                      onClick={(ev) => {
                        if (count < arr.length && count != arr.length - 1) {
                          setcount(count + 1);
                          if (count == arr.length - 2) {
                            sethiddenClass("block");
                          }
                        } else {
                          ev.preventDefault();
                          
                        }
                      }}
                    >
                      <p className="px-2 text-white max-sm:text-sm">
                        {e}
                      </p>
                    </div>

                    <button
                      className={`${hiddenClass} absolute bottom-2 left-3`}
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
                            user: userId,
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
      <div className="flex justify-center items-center w-full">
        <div
          className="grid grid-cols-3  w-2/3 justify-between items-center mt-10 p-5
       gap-14 py-7  rounded-3xl bg-[#ffffff33] my-5  max-md:grid-cols-2 max-sm:grid-cols-1 "
        >
          {boks.map((el, i) => {
            return (
              <div key={i} className=" flex flex-col justify-between relative">
                <div className={`del w-full h-[90%] absolute  z-20 }`}>
                  <button
                    className="bg-red-700 text-white rounded-full h-8 w-8 flex justify-center items-center absolute right-0"
                    onClick={() => {
                      axios.delete(
                        `https://64ec5fbaf9b2b70f2bfa2f93.mockapi.io/userBooks/${el.id}`
                      );
                    }}
                  >
                    X
                  </button>
                </div>
                <div
                  className=""
                  onClick={() => {
                    console.log(el.id);
                    location.href = `/${el.id}`;
                  }}
                >
                  <BookCover img={el.img[i].url} title={el.title}></BookCover>
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
