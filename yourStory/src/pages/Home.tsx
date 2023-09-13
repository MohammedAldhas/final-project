import landing from "../assets/reading-cover-1250x834.jpeg";
import Nav from "../components/Nav";
import OurStory from "./OurStory";
import Footer from "../components/Footer";
import UserNav from "../components/UserNav";
export default function Home() {


  
  return (
    <div className="bg-[#DEDBE9]  relative">
      {localStorage.getItem("user") ? <UserNav></UserNav> : <Nav></Nav>}

      <div className="h-screen relative">
        <div className="bg-gradient-to-l from-[#8451a8]  to-[#DED9FD] opacity-50 w-full h-full absolute"></div>
        <h1 className="w-2/4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, vero
          excepturi aperiam expedita sequi inventore suscipit nihil asperiores
          accusantium dolore aspernatur aliquid id nesciunt veritatis at culpa
          et nobis voluptas.
        </h1>
        <img className="w-full h-full" src={landing} alt="" />
      </div>
      <div className="py-20 px-20 " id="ourStory">
        <OurStory></OurStory>
      </div>

      <Footer></Footer>
    </div>
  );
}
