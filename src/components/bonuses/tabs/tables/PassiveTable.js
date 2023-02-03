import React from "react";
import "../../Bonuses.css";
function PassiveTable() {
  const table = [
    {
      id: 0,
      mamberid: "20/2/2023 16:32",
      mamberdate: "99.00",
      rate: "128.7",
      date: "13",
      percent: "12",
      admin: "118.79999%",
      released: "9.9",
    },
    {
      id: 1,
      mamberid: "20/2/2023 16:32",
      mamberdate: "99.00",
      rate: "128.7",
      date: "13",
      percent: "12",
      admin: "118.79999%",
      released: "9.9",
    },
    {
      id: 2,
      mamberid: "20/2/2023 16:32",
      mamberdate: "99.00",
      rate: "128.7",
      date: "13",
      percent: "12",
      admin: "118.79999%",
      released: "9.9",
    },
    {
      id: 3,
      mamberid: "20/2/2023 16:32",
      mamberdate: "99.00",
      rate: "128.7",
      date: "13",
      percent: "12",
      admin: "118.79999%",
      released: "9.9",
    },
    {
      id: 4,
      mamberid: "20/2/2023 16:32",
      mamberdate: "99.00",
      rate: "128.7",
      date: "13",
      percent: "12",
      admin: "118.79999%",
      released: "9.9",
    },
  ];
  return (
    <>
      <div>
        <div className="card overflow-auto mt-2 mb-3 bg-white ">
          <div className=" h-16  flex mt-4 items-center ml-6 justify-between ">
            <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
              <span className="font_f text-[22px]  m-0 font-semibold">
                Passive Bonus History
              </span>
            </h2>
          </div>

          <div className="mex_w">
            <table class="table-fixed">
              <thead className="border-t-[#00000033] border-b-[#9626cb] border-b-[5px] border-t-[1px] justify-between h-[52px] ">
                <tr className="">
                  <th className="text-start font_f">Date</th>
                  <th className="text-start font_f ">MAmount</th>
                  <th className="text-start font_f">Total</th>
                  <th className="text-start font_f">Total Cycles</th>
                  <th className="text-start font_f">Total Cycles Left</th>
                  <th className="text-start font_f">Amount Left</th>
                  <th className="text-start font_f">Amount Released</th>
                </tr>
              </thead>

              <tbody>
                {table.map((item) => {
                  return (
                    <tr
                      id={item.id}
                      className="border-[#00000033] border-y-[1px] justify-between h-[48px] hover:bg-[#0000000a]"
                    >
                      <td className="text-start font_f font-normal text-base">
                        {item.mamberid}
                      </td>
                      <td className="font_f text-start  font-normal text-base">
                        {item.mamberdate}
                      </td>
                      <td className="font_f text-start font-normal text-base">
                        {item.rate}
                      </td>
                      <td className="font_f text-start font-normal text-base">
                        {item.date}
                      </td>
                      <td className="font_f text-start font-normal text-base">
                        {item.percent}
                      </td>
                      <td className="font_f text-start font-normal text-base ">
                        {item.admin}
                      </td>
                      <td className="font_f text-start font-normal text-base">
                        {item.released}
                      </td>
                      <td className="font_f text-start font-normal text-base">
                        {item.passive}
                      </td>
                      <td className="font_f text-start font-normal text-base">
                        {item.recieved}
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
      </div>
    </>
  );
}
export default PassiveTable;
