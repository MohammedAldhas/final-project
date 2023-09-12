import logo from "../assets/قصتي.png";

function Nav() {
  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#ffffff] py-2 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <a
            className="mb-4 ml-2 mr-5 mt-3  flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="/"
          >
            <img className="w-12" src={logo} />
          </a>
        </div>
        <ul
          className="list-style-none mr-auto flex flex-col items-center pl-0 lg:flex-row"
          data-te-navbar-nav-ref
        >
          <li className="mb-4  p-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              className="text-[#212F54] transition duration-200 hover:text-[#212F54]  hover:ease-in-out focus:text-[#212F54]  disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              href="#ourStory"
              data-te-nav-link-ref
            >
              قصصنا
            </a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
            href="/Sign"
              className="px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => {}}
            >
              انضم
            </a>
          </li>
          <li className="mb-4 p-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              className="text-[#212F54]  transition duration-200 hover:text-[#212F54]  hover:ease-in-out focus:text-[#212F54]  disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="/LogIn"
              data-te-nav-link-ref
            >
              دخول
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
