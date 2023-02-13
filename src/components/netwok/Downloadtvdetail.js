import React , { useState } from "react";
import '../netwok/downloadtv.css'
import Pagination from "react-custom-pagination";



function DounloadTV() {

  const[search , setSearch]=useState('')

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
   
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = table_data.slice(indexOfFirstPost, indexOfLastPost);



  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <div>
        <div className="card overflow-auto mt-2 mb-3 ">
          <div className=" px-6 h-16  flex mt-4 items-center ml-6 justify-between ">
            <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
              <span className="font-f text-[22px]  m-0 font-bold"></span>
            </h2>

            <div className="bg-foreground rounded-full border px-4 max-w-[300px] ml-auto flex-auto flex items-center border justify-end border-gray-300">
                <i
                  className="fa fa-search text-[12px] text-gray-500"
                  aria-hidden="true"
                ></i>
              <input
                className=" py-2 border-0 outline-none w-full bg-transparent font-f text-[14px] p-1  pl-4   "
                placeholder="Search..."
                type="search"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full max-w-full  overflow-x-auto ">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div
                className="table-responsive"
                style={{ overflowX: "none", width: "max-content" }}
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
                    {currentPosts.filter((table)=> table.transaction_id.match(search)).map((table) => (
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
        <div className="mr-3 text-[12px] " > 
         <Pagination 
          totalPosts={table_data.length}
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
    </>
  );
}
export default DounloadTV;
