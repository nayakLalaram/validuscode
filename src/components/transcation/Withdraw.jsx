import React  , { useState } from "react";
import Pagination from 'react-custom-pagination'
import "../transcation/membership.css";
function Withdraw() {
  const[search , setSearch]=useState('');
  let tableheader = [
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
      label: "",
      property: "fee",
      type: "text",
      cssclassNamees: ["text-red", "text-sm"],
    },
    {
      label: "Receivable Amount",
      property: "recievable_amount",
      type: "text",
      cssclassNamees: ["text-red"],
    },
    {
      label: "Status",
      property: "status",
      type: "text",
      cssclassNamees: ["text-green"],
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
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
    },
    {
      date: "12/08/2022 10:30",
      amount: "664.00  ",
      fee: "Fee : -33.200  ",
      recievable_amount: "630.80   ",
      status: "Success",
      mode: "WITHDRAW",
      message: "Success",
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
        <div className="card overflow-auto mt-2  ">
          <div className=" px-6 h-16  flex  items-center ml-6 justify-between ">
            <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
              <span className="font-f text-[22px]  m-0 font-bold"></span>
            </h2>

            <div className="bg-foreground rounded-full border px-4 max-w-[300px] ml-auto flex-auto flex items-center border justify-end border-gray-300">
                <i
                  className="fa fa-search text-[12px]  text-gray-500"
                  aria-hidden="true"
                ></i>
              <input
            
                className="p-1 pl-4 py-2 border-0 outline-none w-full bg-transparent font-f text-[14px]   "
                placeholder="Search..."
                type="search"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full max-w-full  overflow-x-auto ">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="table-responsive">
                <table className="table table-flush " style={{ width: "100%" }}>
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
                    {currentPosts.filter((table)=> table.date.match(search)).map((table) => (
                      <>
                        <tr>
                          <td className=" td text-center  text-[16px]">
                            {table.date}
                          </td>
                          <td className=" td text-center  text-[16px]">
                            {table.amount}
                          </td>
                          <td className=" td text-center  text-[16px] text-red-500">
                            {table.fee}
                          </td>
                          <td className=" td text-center text-[16px] text-red-500">
                            {table.recievable_amount}
                          </td>
                          <td className=" td text-center text-[16px] text-green-500 ">
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
       
        <div  className="mr-3 text-[12px]" > 
     
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
export default Withdraw;
