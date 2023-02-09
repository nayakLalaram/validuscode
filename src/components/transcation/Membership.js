import React , {useState} from "react";
import "../transcation/membership.css";
import  Pagination  from "react-custom-pagination";
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
                className="p-1 pl-4 py-2 border-0 outline-none w-full bg-transparent font-f text-[14px]   "
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>

          <div className="w-full max-w-full overflow-x-auto ">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div
                className="table-responsive"
                style={{  width: "max-content" }}
              >
                <table className="table table-flush  " style={{ height : "300px"  , alignItems:'flex-start' }} >
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
                    {currentPosts.map((table) => (
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
export default Membership;
