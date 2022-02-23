import { shop } from "../data/globals";

export default function Shopping() {
  return (
    <div>
      <div className="text-center my-10">
        <span className="h-4 w-32 bg-[#F3C219] absolute mr-3 "> </span>
        <h1 className=" text-center relative text-5xl font-extrabold">
          MUA SẮM
        </h1>
      </div>
      <div className="grid md:grid-cols-4 mx-20 gap-1 grid-cols-2 justify-items-center mb-[116px]">
        {shop.map((item) => {
          return (
            <div className="py-10">
              <img src={item.image} />
              <h1 className = " mt-4 text-2xl font-bold font-Notosans"> {item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
