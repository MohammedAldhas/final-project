interface Book {
  img: string;
  title: string;
}
export default function BookCover(props: Book) {
  return (
    // <div className=" flex flex-col justify-between">
    <div
      className="bg-[#744D90] h-fit w-full flex flex-col justify-between items-center gap-3 p-2 rounded-3xl shadow bg-cover bg-center hover:scale-105"
      // style={{ backgroundImage: `url(${props.img})` }}
      // onClick={(e) => {

      // }}
    >
      <div className="bg-white w-full  rounded-2xl flex-1">
        <img className="" src={props.img} alt="" />
      </div>
      <div className="w-full  text-xl text-right text-white h-1/4 flex justify-center items-center">
        <h2 className="px-3">{props.title}</h2>
      </div>
    </div>
    // </div>
  );
}
