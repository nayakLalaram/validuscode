import React from "react";
import "../Profile.css";
import Pagination from "react-custom-pagination";
import { useState } from "react";
const ActivityTable = () => {
  const [value, setValue] = useState("");
  const table = [
    {
      id: 0,
      mamberid: "USER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 1,
      mamberid: "USER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 2,
      mamberid: "TEAM LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 3,
      mamberid: "USER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 4,
      mamberid: "MANAGER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 5,
      mamberid: "USER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 6,
      mamberid: "USER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 7,
      mamberid: "USER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
    {
      id: 8,
      mamberid: "USER LOGIN",
      mamberdate: "	User Logged In Success",
      rate: "01/11/2022 08:57",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = table.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <div className="shadow-md rounded-md sm:mx-10">
      <div className="flex  justify-end mx-6 mt-10">
        <div className="bg-foreground rounded-full  px-4 max-w-[300px] my-5  flex items-center border border-gray-300 ">
          <input
            className="px-4  py-[6px] border-0 outline-none w-full bg-transparent placeholder:text-sm placeholder:px-3"
            placeholder="Search..."
            type="text"
            value={value}
            onChange={(e) =>setValue(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="#727272"
            viewBox="0 0 256 256"
            className="relative right-[250px]"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="116"
              cy="116"
              r="84"
              fill="none"
              stroke="#727272"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></circle>
            <line
              x1="175.4"
              y1="175.4"
              x2="224"
              y2="224"
              fill="none"
              stroke="#727272"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </div>
      </div>
      <div className="overflow-x-scrol w-full">
        <table class="sm:table-fixed my_table l">
          <thead className="border-t-[#00000033] border-b-[#9626cb] border-b-[5px]  border-t-[1px] justify-between h-[52px] ">
            <tr className="t">
              <th className="text-center font_f text-sm">Name</th>
              <th className="text-center font_f text-sm">Description</th>
              <th className="text-center font_f  text-sm">Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {currentPosts.filter((item) => item.mamberid.toUpperCase().includes(value)).map((item) => {
              return (
                <tr
                  id={item.id}
                  className="border-[#00000033] border-y-[1px] justify-between h-[48px] hover:bg-[#0000000a]"
                >
                  <td className="text-center font_f font-normal text-[16px]">
                    {item.mamberid}
                  </td>
                  <td className="font_f text-center  font-normal text-sm">
                    {item.mamberdate}
                  </td>
                  <td className="font_f text-center font-normal text-sm">
                    {item.rate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mr-3 text-[15px] " > 
         <Pagination 
          totalPosts={table.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          showIndex={true}
          view={1}
          showLast={false}
          showFirst={false}
          bgColor="white"
          color = 'black'
          indexbgColor = 'white'
          selectColor = 'white'
          justify='end'
        />
        </div>
    </div>
  );
};

export default ActivityTable;
