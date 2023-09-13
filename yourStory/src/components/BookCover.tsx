interface Book {
  img: string;
  title: string;
}
export default function BookCover(props: Book) {
  return (
    // <div className=" flex flex-col justify-between">
    <div
      className="bg-[#744D90] w-full flex flex-col justify-between items-center gap-3  shadow bg-cover bg-center hover:scale-105 "

      // style={{ backgroundImage: `url(${props.img})` }}
      // onClick={(e) => {

      // }}
    >
      <div className="bg-white w-full  h-56 flex  items-center shadow flex-1">
        <img className=" w-full h-full" src={props.img} alt="err" />
      </div>
      <div className="w-full   text-sm text-right text-white flex justify-center items-center h-fit cursor-pointer">
        <h2 className="px-3">{props.title}</h2>
      </div>
    </div>
    // </div>
  );
}
