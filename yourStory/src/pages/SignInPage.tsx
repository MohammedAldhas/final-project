import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
type IuserInfo = {
  Username: string;
  Email: string;
  Password: string;
};

function SignInPage() {
  const Nav = useNavigate();
  if (localStorage.getItem("user")) {
    Nav("/");
  }
  const [message, setMessage] = React.useState("");
  const [input, setInput] = React.useState<IuserInfo>({
    Username: "",
    Email: "",
    Password: "",
  });

  const AddUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (input.Username == "") {
      const notify = () => toast.warning("ادخل اسم المستخدم");
      notify();

      e.preventDefault();
    } else if (input.Username.length < 5) {
      setMessage("اسم المستخدم يجب ان يتكون من 5 حروف او اكثر");
      e.preventDefault();
    } else if (input.Email == "") {
      const notify = () => toast.warning("ادخل الايميل");
      notify();
      e.preventDefault();
      setMessage("");
    } else if (
      !input.Email.includes("@") ||
      !input.Email.includes("com") ||
      input.Email.length < 8
    ) {
      setMessage("يجب أن يحتوي البريد الإلكتروني  ، على سبيل المثال. @,com");
      e.preventDefault();
    } else if (input.Password == "") {
      const notify = () => toast.warning("ادخل كلمة المرور");
      notify();
      e.preventDefault();
      setMessage("");
    } else if (input.Password.length < 8) {
      setMessage("الرمز السري يجب ان يتكون من 8 حروف او اكثر");
      e.preventDefault();

      // }else if(!input.Password.includes('*,#')){
      //   setMessage("يجب أن يحتوي الرمز السري  ، على سبيل المثال. #,*")
      //   e.preventDefault()
    } else {
      const notify = () => toast.success("تم التسجيل بنجاح");
      notify();
      setMessage("");

      axios
        .post("https://64ecabe1f9b2b70f2bfac3e1.mockapi.io/login", {
          Username: input.Username,
          Email: input.Email,
          Password: input.Password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      Nav("/LogIn");
    }
  };

  return (
    <div className="min-h-screen py-40 bg-[#D3CEE1]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#FED7D8] rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('/src/assets/signup.jpg')]"></div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h1 className=" text-3xl text-center text-[#2d3f72]">
              أهلا بكم في قصتي
            </h1>
            <h2 className="text-2xl mb-4 text-center p-2 text-[#3e4f7e]">
              تسجيل جديد
            </h2>
            <form>
              <div className="mt-5">
                <input
                  className="border-2 rounded-md border-[#FB9324] py-1 px-2 w-full text-right"
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
                  className=" border-2 rounded-md border-[#FB9324] py-1 px-2 w-full text-right"
                  type="email"
                  value={input.Email}
                  placeholder="البريد الالكتروني"
                  onChange={(e) => {
                    setInput({ ...input, Email: e.target.value });
                  }}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 rounded-md border-[#FB9324] py-1 px-2 w-full text-right"
                  type="password"
                  value={input.Password}
                  placeholder="كلمة المرور"
                  onChange={(e) => {
                    setInput({ ...input, Password: e.target.value });
                  }}
                />
              </div>
              <span
                className="flex text-[#0C0A3E] text-xs ml-8"
                style={{ color: "red" }}
              >
                {message}
              </span>
              <div className="mt-5">
                <button
                  className="w-full bg-[#69C0DC] rounded-full py-3 text-center text-white"
                  onClick={(e) => {
                    AddUser(e);
                    // e.preventDefault
                  }}
                >
                  تسجيل
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
              <p className="pt-10 text-center text-white text-xl">
                لديك حساب؟{" "}
                <a
                  className="font-semibold text-base text-[#212F54]  hover:underline"
                  href="/LogIn"
                >
                  {" "}
                  تسجيل دخول
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInPage;
