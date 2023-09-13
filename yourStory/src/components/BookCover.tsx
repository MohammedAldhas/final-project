interface Book {
  img: string;
  title: string;
}
export default function BookCover(props: Book) {
  return (
    // <div className=" flex flex-col justify-between">
    <div
      className="bg-[#744D90] h-80 w-[20rem] flex flex-col justify-between items-center gap-3  shadow bg-cover bg-center hover:scale-105 "
      // style={{ backgroundImage: `url(${props.img})` }}
      // onClick={(e) => {

      // }}
    >
      <div className="bg-white w-full  h-56 flex justify-center items-center ">
        <img className=" w-full h-full" src={props.img} alt="err" />
      </div>
      <div className="w-full  text-sm text-right text-white h-1/4 flex justify-center items-center">
        <h2 className="px-3">{props.title}</h2>
      </div>
    </div>
    // </div>
  );
}
