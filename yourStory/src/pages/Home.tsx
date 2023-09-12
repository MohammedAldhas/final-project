import imgN from "../assets/Nav.png";
import imgF from "../assets/foot.png";
import imgB from "../assets/book.png";
import Nav from "../components/Nav";
import OurStory from "./OurStory";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="min-h-[200vh] relative bg-[#6772c849]  z-0">
      <div className="fixed w-full  top-0  z-20 ">
        <Nav />
      </div>

      {/* Image at the top */}
      <img
        src={imgN}
        alt="Image at the top"
        className="absolute top-4 z-10 w-full h-auto bg-cover bg-no-repeat bg-fixed "
      />

      {/* Container for the two images */}
      <div className="absolute inset-x-0 bottom-0 h-auto">
        {/* Image on the left */}
        <img
          src={imgB}
          alt="Image on the left"
          className="fixed -left-5 bottom-0  transform  w-80 -z-10 bg-cover bg-no-repeat bg-fixed"
        />
        {/* <div className="w-full h-52 bg-black"></div> */}
        <div id="ourStory">
          <OurStory></OurStory>
        </div>
        {/* Image at the bottom */}
        <img
          src={imgF}
          alt="Image at the bottom"
          className=" bg-cover bg-no-repeat bg-fixed absolute -bottom-2 left-0 right-0 -z-10"
          />
      <Footer></Footer>
      </div>
    </div>
  );
}
