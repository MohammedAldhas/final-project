import { useState } from "react";

function Nav() {
  const [first, setfirst] = useState("");

  return (
    <nav className="flex w-full items-center justify-end max-md:justify-center bg-[#744D90] fixed top-0 px-20 py-3 max-sm:px-1 z-30">
      <ul
        className="flex  items-center justify-between text-white  w-2/6 max-sm:w-full text-xl max-sm:text-sm font-mono max-md:justify-between max-md:w-3/6"
        data-te-navbar-nav-ref
      >
        <li className="" data-te-nav-item-ref>
          <a
            className={`px-2 rounded ${first} hover:bg-white hover:text-[#744D90] transition duration-300 `}
            href="#ourStory"
            data-te-nav-link-ref
            onClick={() => {
              console.log(scrollY);

              if (first.includes("bg-white")) {
                setfirst("");
              } else {
                setfirst("bg-white text-[#744D90] text-lg");
              }
            }}
          >
            قصصنا
          </a>
        </li>
        <li className="" data-te-nav-item-ref>
          <a
            href="/Sign"
            className=" rounded hover:bg-white hover:text-[#744D90] transition duration-300"
            onClick={() => {}}
          >
            انضم
          </a>
        </li>
        <li className="" data-te-nav-item-ref>
          <a
            className=" rounded hover:bg-white hover:text-[#744D90] transition duration-300"
            href="/LogIn"
            data-te-nav-link-ref
          >
            دخول
          </a>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
}

export default Nav;
