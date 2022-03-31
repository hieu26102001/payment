import { BiCart } from "react-icons/bi";
export default function CardProduct({ title, price, image, decription }) {
  return (
    <div className="bg-[#F2F6FC] px-2 py-3">
      <img className="w-[300px] h-[224px] " src={image} />
      <h3 className="font-Roboto text-xl mt-4 ml-3 font-medium text-[#4F4F4F]"> {title}</h3>
      <p>{decription}</p>
      <h3 className="text-[#2F88FF] text-2xl ml-3">${price}</h3>
      <button className=" justify-items-center bg-[#2F88FF] text-white px-6 py-1 rounded-md flex text-base">
        {" "}
        Add 1 to basket{" "}
        <BiCart className ="text-xl ml-2"/>
      </button>
    </div>
  );
}
