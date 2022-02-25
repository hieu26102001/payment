import Link from "next/link";
export default function Banner() {
  return (
    <div className=" mx-auto bg-[#D6EBFF] flex ">
      <div className="top-28 ml-16 md:absolute  ">
        <h1 className="text-2xl md:text-[64px] font-bold text-[#2F88FF] md:w-[600px] w-[240px] mb-4 font-serif leading-normal">
          Electronic payment solution in Viet Nam
        </h1>
        <p className="text-[#2F88FF] mb-4 font-serif w-[200px] md:w-[380px]">
          PAYMENT is a modern and breakthrough technology in the field of
          electronic payment, bringing superior experiences to customers and
          partners.
        </p>
        <Link href="/store">
          <button className="md:block hidden uppercase font-bold rounded-md w-[351px] h-[61px] text-white bg-blue-500 text-lg">
            {" "}
            Shopping Now{" "}
          </button>
        </Link>
        <Link href="/store">
        <button className = "font-bold text-white rounded-md w-[130px] h-[44px] md:hidden bg-blue-500"> SHOP NOW </button>
        </Link>
      </div>
      <img className="pt-10 md:ml-96 bg-[#D6EBFF]" src="../Index/Banner.png" />
      {/* <div>
        <img src= "../Index/imagebanner1.png" />
        <img src= "../Index/imagebanner2.png" />
        <img src= "../Index/imagebanner3.png" />
        <img src= "../Index/imagebanner4.png" />
      </div> */}
    </div>
  );
}
