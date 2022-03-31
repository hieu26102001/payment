import React from "react";
import { AiOutlineRight , AiOutlineLeft } from "react-icons/ai";
const Pagination = ({ postPerPage, totalPosts , paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)
  return (
    <nav>
      <ul className="flex justify-center">
      <AiOutlineLeft onClick/>
        {pageNumbers.map((number) => {
            return(
                <div className="flex">
                    <a>  </a>
                <li key={number} className="">
            <a href = "#" onClick={() => paginate(number)}  className="text-black">
              {number}
              {/* {console.log(number)} */}
            </a>
          </li>
          </div>
            )        
        })}
        <AiOutlineRight/>
      </ul>

    </nav>
  );
};
export default Pagination;
