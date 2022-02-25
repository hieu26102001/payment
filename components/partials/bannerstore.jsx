import Link from "next/link";
export default function BannerStore() {
  return (
    <div className="  bg-[#D6EBFF] md:flex  ">
      <div className="md:pt-28 pt-24 md:ml-16 md:relative absolute mx-4 ">
        <h1 className="text-2xl md:text-5xl font-bold text-[#2F88FF] md:w-[600px] w-full mb-4  leading-tight">
          Mua sắm bằng Bitcoin, BNB và hơn thế nữa!
        </h1>
        <p className="text-[#2F88FF]  w-full md:w-[380px] text-[12px] md:text-base font-normal">
          Với PAYMENT, việc chi tiêu tiền điện tử trở nên dễ dàng hơn rất nhiều.
          Ghé thăm bất kỳ thương nhân nào được liệt kê để mua những thứ bạn yêu
          thích bằng tiền điện tử bằng 
        </p>
      </div>
      <div>
      <img
        className=" justify-center md:w-[426px] md:h-[475px] w-[202px] h-[440px] ml-32  pt-56  md:ml-52 md:pt-5 bg-[#D6EBFF]"
        src="../Store/BannerStore2.png"
      />
      </div>
    </div>
  );
}
