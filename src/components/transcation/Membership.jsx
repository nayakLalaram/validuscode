import React from "react";
import "../transcation/membership.css";
function Membership() {
  let tableheader = [
    {
      label: "Membership Id",
      property: "package_id",
      type: "text",
    },
    {
      label: "Membership Tier",
      property: "package_name",
      type: "text",
    },
    {
      label: "Date",
      property: "date",
      type: "text",
    },
    {
      label: "Membership",
      property: "package",
      type: "text",
    },
    {
      label: "No. of Days/Weeks",
      property: "number_of_week",
      type: "text",
    },
    {
      label: "No. of Days/Weeks",
      property: "no_of_days_per_week_completed",
      type: "text",
    },
    {
      label: "Locked",
      property: "locked",
      type: "text",
    },
    {
      label: "Auto Renewal",
      property: "auto_renewal",
      type: "text",
    },
  ];

  let table_data = [
    {
      package_id: "62e23244c5474800e2947cd6",
      package_name: "V1000",
      date: "18/08/2022 09:32",
      package: "1,000.00  ",
      number_of_week: "60 weeks",
      no_of_days_per_week_completed: "7 weeks",
      locked: "No",
      auto_renewal: "Yes",
    },
    {
      package_id: "62e23244c5474800e2947cd6",
      package_name: "V1000",
      date: "18/08/2022 09:32",
      package: "1,000.00  ",
      number_of_week: "60 weeks",
      no_of_days_per_week_completed: "7 weeks",
      locked: "No",
      auto_renewal: "Yes",
    },
    {
      package_id: "62e23244c5474800e2947cd6",
      package_name: "V1000",
      date: "18/08/2022 09:32",
      package: "1,000.00  ",
      number_of_week: "60 weeks",
      no_of_days_per_week_completed: "7 weeks",
      locked: "No",
      auto_renewal: "Yes",
    },
    {
      package_id: "62e23244c5474800e2947cd6",
      package_name: "V1000",
      date: "18/08/2022 09:32",
      package: "1,000.00  ",
      number_of_week: "60 weeks",
      no_of_days_per_week_completed: "7 weeks",
      locked: "No",
      auto_renewal: "Yes",
    },
    {
      package_id: "62e23244c5474800e2947cd6",
      package_name: "V1000",
      date: "18/08/2022 09:32",
      package: "1,000.00  ",
      number_of_week: "60 weeks",
      no_of_days_per_week_completed: "7 weeks",
      locked: "No",
      auto_renewal: "Yes",
    },
    {
      package_id: "62e23244c5474800e2947cd6",
      package_name: "V1000",
      date: "18/08/2022 09:32",
      package: "1,000.00  ",
      number_of_week: "60 weeks",
      no_of_days_per_week_completed: "7 weeks",
      locked: "No",
      auto_renewal: "Yes",
    },
    {
      package_id: "62e23244c5474800e2947cd6",
      package_name: "V1000",
      date: "18/08/2022 09:32",
      package: "1,000.00  ",
      number_of_week: "60 weeks",
      no_of_days_per_week_completed: "7 weeks",
      locked: "No",
      auto_renewal: "Yes",
    },
  ];

  return (
    <>
      <div>
        <div className="card overflow-auto mt-2  ">
          <div className=" px-6 my-2  flex  items-center ml-6 justify-between ">
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
                style={{  width: "max-content" }}
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
                            {table.package_id}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.package_name}
                          </td>
                          <td className=" td text-center  text-[16px]">
                            {table.date}
                          </td>

                          <td className=" td text-center text-[16px]">
                            {table.package}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.number_of_week}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.no_of_days_per_week_completed}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.locked}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.auto_renewal}
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
                  className='flex items-center justify-end'
                >
                    <span className="text-[12px]">Items per page:
6
1 – 6 of 7</span>
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
export default Membership;
