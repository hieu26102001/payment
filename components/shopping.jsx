import { shop } from "../data/globals";

export default function Shopping() {
  return (
    <div>
      <div className="text-center my-10 relative">
        <h1 className="z-10 text-center md:text-5xl text-2xl leading-8 font-extrabold">
        <span className="md:h-4 md:w-32 w-[67px] h-3 bg-[#F3C219] absolute md:top-4 top-3 -z-10 "> </span>
          MUA SẮM
        </h1>
      </div>
      <div className="grid md:grid-cols-4 md:mx-20 mx-4 gap-1 grid-cols-2 justify-items-center mb-[116px]">
        {shop.map((item) => {
          return (
            <div className="py-10">
              <img src={item.image} />
              <h1 className = " mt-4 md:text-2xl text-lg font-bold font-Notosans text-[#1E2329]"> {item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
