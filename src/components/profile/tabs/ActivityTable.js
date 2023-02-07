import React from "react";
import "../Profile.css";
const ActivityTable = () => {
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
      mamberid: "USER LOGIN",
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
      mamberid: "USER LOGIN",
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
  ];
  return (
    <div className="shadow-md rounded-md sm:mx-10">
      <div className="flex  justify-end mx-6 mt-10">
        <div className="bg-foreground rounded-full  px-4 max-w-[300px] my-5  flex items-center border border-gray-300 ">
          <input
            className="px-4  py-[6px] border-0 outline-none w-full bg-transparent placeholder:text-sm placeholder:px-3"
            placeholder="Search..."
            type="search"
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
            {table.map((item) => {
              return (
                <tr
                  id={item.id}
                  className="border-[#00000033] border-y-[1px] justify-between h-[48px] hover:bg-[#0000000a]"
                >
                  <td className="text-center font_f font-normal text-base">
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
      <nav
        aria-label="Page navigation example  center mr-4 "
        style={{ textAlign: "end", marginRight: "36px" }}
        className="flex items-center justify-end py-3"
      >
        <span className="text-[12px] text-[#0000008a] font_f">
          Items per page: 6 1 – <span className="px-4">6 of 7</span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="/"
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white  rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ActivityTable;
