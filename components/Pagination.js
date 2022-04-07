import React from "react";

const Pagination = ({ postPerPage, totalPosts , paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="flex">
        {pageNumbers.map((number , index) => {
          if(index + 1 === number) {
            let a = "text-blue-200 underline"
            return(
                <div className="flex">
                    <a>  </a>
                <li key={number} className="">
            <a href = "#" onClick={() => paginate(number)}  className=" mx-5 text-[#606266] ">
              {number}
              {/* {console.log(number)} */}
            </a>
          </li>
          </div>
            ) 
          
          }       
        })}
      </ul>

    </nav>
  );
};
export default Pagination;
