import React, { useState } from "react";
import "../transcation/membership.css";
import Pagination from "react-custom-pagination";
function Deposit() {
  let tableheader = [
    {
      label: "Payment ID",
      property: "payment_id",
      type: "text",
    },
    {
      label: "Date",
      property: "date",
      type: "text",
    },
    {
      label: "Amount",
      property: "amount",
      type: "text",
    },
    {
      label: "Status",
      property: "status",
      type: "text",
      cssClasses: ["text-yellow"],
    },
    {
      label: "Mode",
      property: "mode",
      type: "text",
    },
    {
      label: "Message",
      property: "message",
      type: "text",
    },
  ];

  let table_data = [
    {
      payment_id: "CPGJ3GXWEKQUZDLUCIQRJ0GK04",
      date: "31/10/2022 15:34",
      amount: "10000.00  ",
      status: "Pending",
      mode: "Deposit",
      message: "Waiting for buyer funds...",
    },
    {
      payment_id: "CPGJ3GXWEKQUZDLUCIQRJ0GK04",
      date: "31/10/2022 15:34",
      amount: "10000.00  ",
      status: "Pending",
      mode: "Deposit",
      message: "Waiting for buyer funds...",
    },
    {
      payment_id: "CPGJ3GXWEKQUZDLUCIQRJ0GK04",
      date: "31/10/2022 15:34",
      amount: "10000.00  ",
      status: "Pending",
      mode: "Deposit",
      message: "Waiting for buyer funds...",
    },
    {
      payment_id: "CPGJ3GXWEKQUZDLUCIQRJ0GK04",
      date: "31/10/2022 15:34",
      amount: "10000.00  ",
      status: "Pending",
      mode: "Deposit",
      message: "Waiting for buyer funds...",
    },
    {
      payment_id: "CPGJ3GXWEKQUZDLUCIQRJ0GK04",
      date: "31/10/2022 15:34",
      amount: "10000.00  ",
      status: "Pending",
      mode: "Deposit",
      message: "Waiting for buyer funds...",
    },
    {
      payment_id: "CPGJ3GXWEKQUZDLUCIQRJ0GK04",
      date: "31/10/2022 15:34",
      amount: "10000.00  ",
      status: "Pending",
      mode: "Deposit",
      message: "Waiting for buyer funds...",
    },
    {
      payment_id: "CPGJ3GXWEKQUZDLUCIQRJ0GK04",
      date: "31/10/2022 15:34",
      amount: "10000.00  ",
      status: "Pending",
      mode: "Deposit",
      message: "Waiting for buyer funds...",
    },
  ];

  // for Pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = table_data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <div>
        <div className="card overflow-auto mt-2 ">
          <div className=" px-6 my-2  flex  items-center ml-6 justify-between ">
            <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
              <span className="font-f text-[22px]  m-0 font-bold"></span>
            </h2>

            <div className="bg-foreground rounded-full border px-4 max-w-[300px] ml-auto flex-auto flex items-center border justify-end border-gray-300">
              <i
                className="fa fa-search text-[12px] text-gray-500"
                aria-hidden="true"
              ></i>
              <input
                className="p-1 pl-4  py-2 border-0 outline-none w-full bg-transparent font-f text-[14px]   "
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>

          <div className="w-full max-w-full overflow-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="table-responsive ">
                <table
                  className="table table-flush     "
                  style={{ width: "100%" }}
                >
                  <thead className="thead-light">
                    <tr
                      style={{ borderBottom: "4px  solid #941acb" }}
                      className=" "
                    >
                      {tableheader.map((items) => (
                        <th className="th">{items.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentPosts.map((table) => (
                      <>
                        <tr>
                          <td className=" td text-center  text-[16px]">
                            {table.payment_id}
                          </td>
                          <td className=" td text-center  text-[16px]">
                            {table.date}
                          </td>
                          <td className=" td text-center  text-[16px]">
                            {table.amount}
                          </td>
                          <td className=" td text-center text-[16px] text-orange-400">
                            {table.status}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.mode}
                          </td>
                          <td className=" td text-center text-[16px]">
                            {table.message}
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
     
        <div className="mr-3">
          <Pagination
            totalPosts={table_data.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
            showIndex={true}
            view={1}
            showLast={false}
            showFirst={false}
            bgColor="white"
            color="black"
            indexbgColor="white"
            selectColor="white"
            justify="end"
          />
        </div>
      </div>
    </>
  );
}
export default Deposit;
