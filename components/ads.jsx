import { intro } from "../data/globals";
export default function Intro() {
  return (
    <div className="mx-10">
      <div className="text-center my-10">
        <span className="h-4 w-32 bg-[#F3C219] absolute "> </span>
        <h1 className=" text-center text-5xl font-extrabold relative ">
          INTRODUCE
        </h1>
      </div>
      <div className="justify-center">
        {intro.map((item, index) => {
          return (
            index === 1 && (
              <div className="grid md:grid-cols-5 my-10 grid-flow-row-dense">
                <div className="col-span-3 ml-11">
                  <img src={item.image} />
                </div>
                <div className="mt-32 col-span-2">
                  <h1 className="font-bold font-serif text-5xl mb-10">
                    {item.title}
                  </h1>
                  <p className=" text-[#717171] font-serif text-2xl">
                    {item.decription}
                  </p>
                  <button className="md:w-40 w-full mt-10 h-[61px] rounded-md text-lg text-bold font-Notosans bg-[#F3C219] text-white ">
                    SHOP
                  </button>
                </div>
              </div>
            )
               
          );
        })}
      </div>
    </div>
  );
}
