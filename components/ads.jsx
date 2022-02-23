import { intro } from "../data/globals";
export default function Intro() {
  return (
    <div>
      <div className="text-center my-10">
        <span className="h-4 w-32 bg-[#F3C219] absolute mr-3 "> </span>
        <h1 className=" text-center relative text-5xl font-extrabold">INTRODUCE</h1>
      </div>
      <div className = "justify-center">
      {intro.map((item,index) => {
        return (

          <div className="grid md:grid-cols-3 my-5">
              <div className="col-span-2 ml-11">
            <img className src={item.image} />
            </div>
            <div className="mt-32">
            <h1 className = "font-bold font-serif text-5xl"> {item.title}</h1>
            <p className = " text-[#717171] font-serif text-2xl"> {item.decription}</p>
            </div>
          </div>
  
          
        );
      })}</div>
    </div>
  );
}
