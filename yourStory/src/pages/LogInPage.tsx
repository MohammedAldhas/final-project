import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

type Iuserlogin = {
  Username: string;
  Password: string;
  id: string;
};

export default function LogInPage() {
  const Nav = useNavigate();
  if (localStorage.getItem("user")) {
    Nav("/");
  }
  const [input, setInput] = React.useState<Iuserlogin>({
    Username: "",
    Password: "",
    id: "",
  });

  const [inputuse, setInputuser] = React.useState<Iuserlogin[]>([]);

  React.useEffect(() => {
    axios
      .get("https://64ecabe1f9b2b70f2bfac3e1.mockapi.io/login")
      .then((res) => {
        setInputuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input]);

  return (
    <div className="min-h-screen py-40 bg-[#D3CEE1]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#744D90] rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('/src/assets/log.jpg')] md:block"></div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <div className="max-w-[400px] w-full mx-auto rounded-lg bg-[#DED8FE] bg-opacity-25 shadow border-black backdrop-blur-sm  p-8 px-8">
              <form>
                <h1 className=" md:text-3xl text-center text-white sm:text-sm">
                  أهلا بكم في قصتي
                </h1>
                <h2 className="text-2xl mb-4 text-center p-2 text-white">
                  تسجيل دخول
                </h2>
                <div className="mt-5">
                  <input
                    className="border-2 rounded-md bg-[#DED8FE]  py-1 px-2 w-full text-right"
                    type="text"
                    value={input.Username}
                    placeholder="اسم مستخدم"
                    onChange={(e) => {
                      setInput({ ...input, Username: e.target.value });
                    }}
                  />
                </div>
                <div className="mt-5">
                  <input
                    className="border-2 rounded-md bg-[#DED8FE]  py-1 px-2 w-full text-right"
                    type="password"
                    value={input.Password}
                    placeholder="كلمة المرور"
                    onChange={(e) => {
                      setInput({ ...input, Password: e.target.value });
                    }}
                  />
                </div>
                <div className="mt-5">
                  <button
                    className="w-full bg-[#69C0DC] rounded-full py-3 text-center text-white"
                    onClick={(e) => {
                      inputuse.map((user) => {
                        if (
                          input.Username === user.Username &&
                          input.Password === user.Password
                        ) {
                          Nav("/");
                          localStorage.setItem("user", user.id);
                          localStorage.setItem("Username", user.Username);
                        } else {
                          toast.error(
                            "فشل تسجيل الدخول. يرجى التحقق من بيانات ."
                          );
                          e.preventDefault();
                        }
                      });
                    }}
                  >
                    تسجيل دخول
                  </button>
                  <ToastContainer
                    position={"top-center"}
                    autoClose={false}
                    closeOnClick={true}
                    pauseOnHover={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                  />
                </div>
                <p className="pt-10 text-center text-[#FED7D8] text-xl">
                  ليس لديك حساب؟{" "}
                  <a
                    className="font-semibold text-base text-[#212F54]  hover:underline"
                    href="/Sign"
                  >
                    سجل الأن
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
