import { shop } from "../data/globals";
import Link from "next/link";
export default function Shopping() {
  return (
    <div className="max-w-[1600px] mx-auto" >
      <div className="text-center my-10 relative">
        <h1 className="z-10 text-center lg:text-5xl md:text-3xl leading-8 font-extrabold relative">
        <span className="md:h-4 md:w-32 w-[67px] h-3 bg-[#F3C219] absolute md:top-4 top-3 -z-10 "> </span>
          SHOPPING
        </h1>
      </div>
      <div className="grid md:grid-cols-4 md:mx-20 mx-4 gap-2 grid-cols-2 justify-items-center mb-[116px]">
        {shop.map((item) => {
          return (
            <div className="py-10">
              <Link href="/product">
              <img src={item.image} />
              </Link>
              <h1 className = "mt-4 lg:text-2xl text-lg font-bold font-Notosans text-[#1E2329]"> {item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
