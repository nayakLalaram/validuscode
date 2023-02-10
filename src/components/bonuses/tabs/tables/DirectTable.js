import React, {useState} from "react";
import "../../Bonuses.css";
import Pagination from "react-custom-pagination";
function DirectTable() {
  const table = [
    {
      id: 0,
      mamberid: "20/2/2023",
      mamberdate: "John Doe",
      rate: "Jade",
      date: "293.00",
      percent: "1000",
      admin: "70",
      released: "30",
      passive: "70",
    },
    {
      id: 1,
      mamberid: "20/2/2023",
      mamberdate: "John Doe",
      rate: "Jade",
      date: "293.00",
      percent: "1000",
      admin: "70",
      released: "30",
      passive: "70",
    },
    {
      id: 2,
      mamberid: "20/2/2023",
      mamberdate: "John Doe",
      rate: "Jade",
      date: "293.00",
      percent: "1000",
      admin: "70",
      released: "30",
      passive: "70",
    },
    {
      id: 3,
      mamberid: "20/2/2023",
      mamberdate: "John Doe",
      rate: "Jade",
      date: "293.00",
      percent: "1000",
      admin: "70",
      released: "30",
      passive: "70",
    },
    {
      id: 4,
      mamberid: "20/2/2023",
      mamberdate: "John Doe",
      rate: "Jade",
      date: "293.00",
      percent: "1000",
      admin: "70",
      released: "30",
      passive: "70",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = table.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <>
      <div>
        <div className="card overflow-auto mt-2 mb-3 bg-white drop-shadow-md ">
          <div className=" h-16  flex mt-4 items-center ml-6 justify-between ">
            <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
              <span className="font_f text-[22px]  m-0 font-semibold">
                DIRECT BONUS HISTORY
              </span>
            </h2>
          </div>

          <div className="mex_w">
            <table class="table-fixed">
              <thead className="border-t-[#00000033] border-b-[#9626cb] border-b-[5px] border-t-[1px] justify-between h-[52px] ">
                <tr className="">
                  <th className="text-start font_f text-sm">Date</th>
                  <th className="text-start font_f text-sm ">Name</th>
                  <th className="text-start font_f text-sm">Position</th>
                  <th className="text-start font_f text-sm">Membership Tier</th>
                  <th className="text-start font_f text-sm">
                    % on Total Referral Membership TV
                  </th>
                  <th className="text-start font_f text-sm">Active 70%</th>
                  <th className="text-start font_f text-sm">Passive (30%)</th>
                  <th className="text-start font_f text-sm">
                    Total Direct Bonus Received
                  </th>
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
export default DirectTable;
