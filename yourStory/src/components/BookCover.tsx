

interface Book{
    img:string,
    title:string
}
export default function BookCover(props:Book) {
  return (
    <div className=" flex flex-col justify-between">
      <div

        className="bg-white h-56 flex justify-center items-end gap-2 rounded-3xl shadow bg-cover bg-center hover:scale-105"
        style={{ backgroundImage: `url(${props.img})` }}
        // onClick={(e) => {

        // }}
      >
        {/* <img className="w-3/6" src={el.img[i].url} alt="خطا" /> */}
        <h2 className="bg-slate-50 w-full p-2 rounded-3xl text-center text-sm">
          {props.title}
        </h2>
      </div>
    </div>
  );
}
