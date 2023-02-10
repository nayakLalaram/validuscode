import React from "react";
import "../../Bonuses.css";
import Pagination from "react-custom-pagination";
import { useState } from "react";
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
    {
      id: 5,
      mamberid: "20/2/2023 16:32",
      mamberdate: "99.00",
      rate: "128.7",
      date: "13",
      percent: "12",
      admin: "118.79999%",
      released: "9.9",
    },
    {
      id: 6,
      mamberid: "20/2/2023 16:32",
      mamberdate: "99.00",
      rate: "128.7",
      date: "13",
      percent: "12",
      admin: "118.79999%",
      released: "9.9",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = table.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
  };
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
                  <th className="text-start font_f text-sm">Date</th>
                  <th className="text-start font_f text-sm ">MAmount</th>
                  <th className="text-start font_f text-sm">Total</th>
                  <th className="text-start font_f text-sm">Total Cycles</th>
                  <th className="text-start font_f text-sm">Total Cycles Left</th>
                  <th className="text-start font_f text-sm">Amount Left</th>
                  <th className="text-start font_f text-sm">Amount Released</th>
                </tr>
              </thead>

              <tbody>
                {currentPosts.map((item) => {
                  return (
                    <tr
                      id={item.id}
                      className="border-[#00000033] border-y-[1px] justify-between h-[48px] hover:bg-[#0000000a]"
                    >
                      <td className="text-start font_f font-normal text-sm">
                        {item.mamberid}
                      </td>
                      <td className="font_f text-start  font-normal text-sm">
                        {item.mamberdate}
                      </td>
                      <td className="font_f text-start font-normal text-sm">
                        {item.rate}
                      </td>
                      <td className="font_f text-start font-normal text-sm">
                        {item.date}
                      </td>
                      <td className="font_f text-start font-normal text-sm">
                        {item.percent}
                      </td>
                      <td className="font_f text-start font-normal text-sm ">
                        {item.admin}
                      </td>
                      <td className="font_f text-start font-normal text-sm">
                        {item.released}
                      </td>
                      <td className="font_f text-start font-normal text-sm">
                        {item.passive}
                      </td>
                      <td className="font_f text-start font-normal text-sm">
                        {item.recieved}
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
      </div>
    </>
  );
}
export default PassiveTable;
