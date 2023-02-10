import React from "react";
import "../netwok/totalrank.css";
function TotalRank() {
  let tableheader = [
    {
      label: "Transaction ID",
      property: "transaction_id",
      type: "text",
    },
    {
      label: "Left",
      property: "left",
      type: "text",
    },
    {
      label: "Left TV Balance",
      property: "left_tv_balance",
      type: "text",
    },
    {
      label: "Current Left TV",
      property: "current_left_tv",
      type: "text",
    },
    {
      label: "Right",
      property: "right",
      type: "text",
    },
    {
      label: "Right TV Balance",
      property: "right_tv_balance",
      type: "text",
    },
    {
      label: "Current Right TV",
      property: "current_right_tv",
      type: "text",
    },
    {
      label: "Description",
      property: "description",
      type: "text",
    },
    {
      label: "Date",
      property: "date",
      type: "text",
    },
  ];

  let table_data = [
    {
      transaction_id: "635fbdebfe8bad00e19",
      left: "0",
      left_tv_balance: "49050",
      current_left_tv: "-",
      right: "100",
      right_tv_balance: "115900",
      current_right_tv: "66850",
      description: "100 TV Added from Ceylan22",
      date: "31/10/2022 12:22",
    },
    {
      transaction_id: "635fbdebfe8bad00e19",
      left: "0",
      left_tv_balance: "49050",
      current_left_tv: "-",
      right: "100",
      right_tv_balance: "115900",
      current_right_tv: "66850",
      description: "100 TV Added from Ceylan22",
      date: "31/10/2022 12:22",
    },
    {
      transaction_id: "635fbdebfe8bad00e19",
      left: "0",
      left_tv_balance: "49050",
      current_left_tv: "-",
      right: "100",
      right_tv_balance: "115900",
      current_right_tv: "66850",
      description: "100 TV Added from Ceylan22",
      date: "31/10/2022 12:22",
    },
    {
      transaction_id: "635fbdebfe8bad00e19",
      left: "0",
      left_tv_balance: "49050",
      current_left_tv: "-",
      right: "100",
      right_tv_balance: "115900",
      current_right_tv: "66850",
      description: "100 TV Added from Ceylan22",
      date: "31/10/2022 12:22",
    },
    {
      transaction_id: "635fbdebfe8bad00e19",
      left: "0",
      left_tv_balance: "49050",
      current_left_tv: "-",
      right: "100",
      right_tv_balance: "115900",
      current_right_tv: "66850",
      description: "100 TV Added from Ceylan22",
      date: "31/10/2022 12:22",
    },
    {
      transaction_id: "635fbdebfe8bad00e19",
      left: "0",
      left_tv_balance: "49050",
      current_left_tv: "-",
      right: "100",
      right_tv_balance: "115900",
      current_right_tv: "66850",
      description: "100 TV Added from Ceylan22",
      date: "31/10/2022 12:22",
    },
    // {
    //     transaction_id: "635fbdebfe8bad00e19",
    //     left: "0",
    //     left_tv_balance: "49050",
    //     current_left_tv: "-",
    //     right: "100",
    //     right_tv_balance: "115900",
    //     current_right_tv: "66850",
    //     description: "100 TV Added from Ceylan22",
    //     date: "31/10/2022 12:22"

    // },
    // {
    //     transaction_id: "635fbdebfe8bad00e19",
    //     left: "0",
    //     left_tv_balance: "49050",
    //     current_left_tv: "-",
    //     right: "100",
    //     right_tv_balance: "115900",
    //     current_right_tv: "66850",
    //     description: "100 TV Added from Ceylan22",
    //     date: "31/10/2022 12:22"

    // }
  ];

  return (
    <>
      <div>
        <div className="card overflow-auto mt-2 mb-3 ">
          <div className=" px-6 h-16  flex mt-4 items-center ml-6 justify-between ">
            <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
              <span className="font-f text-[22px]  m-0 font-bold"></span>
            </h2>

            <div className="bg-foreground rounded-full border px-4 max-w-[300px] ml-auto flex-auto flex items-center border justify-end border-gray-300">
              <mat-icon className="icon-sm text-secondary" svgIcon="mat:search">
                <i
                  className="fa fa-search text-[12px] text-gray-500"
                  aria-hidden="true"
                ></i>
              </mat-icon>
              <input
                //  [formControl]="searchCtrl"
                className="p-1 pl-4  border-0 outline-none w-full bg-transparent font-f text-[14px]   "
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>

          <div className="w-full max-w-full">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div
                className="table-responsive"
                style={{ overflowX: "scroll", width: "max-content" }}
              >
                <table className="table table-flush ">
                  <thead className="thead-light">
                    <tr
                      style={{ borderBottom: "4px  solid #941acb" }}
                      className="  "
                    >
                      {tableheader.map((items) => (
                        <th className="th">{items.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.map((table) => (
                      <>
                        <tr>
                          <td className=" td text-center  text-[16px]">
                            {table.transaction_id}
                          </td>
                          <td className=" td text-center  text-[16px]">
                            {table.left}
                          </td>
                          <td className=" td text-center  text-[16px]">
                            {table.left_tv_balance}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.current_left_tv}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.right}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.right_tv_balance}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.current_right_tv}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.description}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.date}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <nav
          aria-label="Page navigation example  center mr-1 "
          style={{ textAlign: "end", marginRight: "36px" }}
          className="flex items-center justify-end"
        >
          <span className="text-[12px]">Items per page: 6 1 – 6 of 7</span>
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
    </>
  );
}
export default TotalRank;
