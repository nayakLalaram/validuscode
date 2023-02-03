import React from "react";
import "../support/Support.css";
const Support = () => {
  const table = [
    {
      id: 0,
      mamberid: "SAK872JFS",
      mamberdate: "01/11/2022 08:57",
      rate: "Failed Transfer",
      date: "Lorem ipsum dolor.. ",
      percent: "Delivered",
      admin: "Sit amet, consectetur...",
    },
    {
      id: 1,
      mamberid: "SAK872JFS",
      mamberdate: "01/11/2022 08:57",
      rate: "Failed Transfer",
      date: "Lorem ipsum dolor.. ",
      percent: "Delivered",
      admin: "Sit amet, consectetur...",
    },
  ];
  return (
    <div>
      <div className="pt-4">
        <div className="px-gutter">
          <div className="mt-3">
            <div className="py-5 border-b flex items-center justify-center my_psoition">
              <h2 className=" text-[18px] font_f font-color text-center  font-weight-600 m-0 ">
                RAISE A SUPPORT REQUEST
              </h2>
            </div>
          </div>

          <div className="pt-4  items-center justify-center">
            <div className="w-full items-center justify-start ">
              <div className="text-center mt-2 ml-3 font_f font-color font-semibold text-[10px] text-black ">
                Subject
              </div>
              <div className="flex justify-center">
                <div className="mt-2 bg-foreground rounded-full px-4 max-w-[625px] flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox  px-4 py-2 border-0 outline-none font_f w-full bg-transparent placeholder:text-sm"
                    value=""
                    placeholder=" Subject"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="  w-full items-center justify-start mt-4">
              <div className="flex justify-center">
                <div className="text-center mt-2 ml-3 font_f font-color font-semibold text-[10px] text-black ">
                  Message
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[620px] flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox font_f px-4 py-2 border-0 outline-none w-full bg-transparent text-sm  h-[6.875rem]"
                    value=""
                    placeholder=" Message"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 py-2">
            <button
              mat-raised-button
              className="w-[116px] mt-7 bg-lenier-gradient text-white  font_f text-[10px] font-normal rounded-full flex items-center justify-center"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2"
                width="12"
                height="12"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="128"
                  x2="216"
                  y2="128"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <polyline
                  points="144 56 216 128 144 200"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></polyline>
              </svg>
              <span className="font-semibold">UPDATE</span>
            </button>
          </div>
          <div className="mex_w py-12">
            <table class="table-fixed">
              <thead className="border-t-[#00000033] border-b-[#9626cb] border-b-[5px] border-t-[1px] justify-between h-[52px] ">
                <tr className="">
                  <th className="text-start font_f">Support ID</th>
                  <th className="text-start font_f ">Raised On</th>
                  <th className="text-start font_f">Subject</th>
                  <th className="text-start font_f">Message</th>
                  <th className="text-start font_f">Message</th>
                  <th className="text-start font_f">Status</th>
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
                  href="#"
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
                  href="#"
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
    </div>
  );
};

export default Support;
