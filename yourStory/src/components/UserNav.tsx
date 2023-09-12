import React from "react";
// import { useNavigate } from "react-router-dom";

export default function UserNav() {
  const [hiddin, sethiddin] = React.useState("hidden");

  const addHidden = () => {
    if (hiddin == "hidden") {
      sethiddin("block");
    } else {
      sethiddin("hidden");
    }
  };
  // const nav = useNavigate();
  return (
    <nav className="flex w-full items-center justify-between  bg-[#744D90] fixed top-0 px-20 max-sm:px-1 py-2 z-30 text-white">
      <a href="/">الرئيسية</a>
      <div className="flex gap-2 items-center">
        <p>{localStorage.getItem("Username")}</p>
        <div
          className="bg-white w-10 h-10 rounded-full flex justify-center items-center relative cursor-pointer"
          onClick={addHidden}
        >
          <i className="fa-solid fa-user text-[#744D90] text-xl"></i>
          <div
            className={`bg-[#744D90] w-52  absolute bottom-[-7.7rem] ${hiddin} right-2/4 translate-x-[15px] transition-all duration-500`}
          >
            <ul className="flex flex-col justify-center items-center gap-1 h-full p-2">
              <li className="bg-white w-full text-center py-2">
                <a className="text-[#744D90]" href={`/user`}>
                  صفحتك
                </a>
              </li>
              <li className="bg-white w-full text-center py-2 text-red-700">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    localStorage.clear();
                    // nav("/");
                    location.href = "/"
                  }}
                >
                  تسجيل الخروج
                </p>
              </li>
            </ul>
          </div>
          <div
            className={`bg-none border-[15px] border-b-transparent border-l-transparent  border-r-transparent  border-[#744D90] absolute -bottom-9 ${hiddin} transition-all duration-500`}
          ></div>
        </div>
      </div>
    </nav>
  );
}
