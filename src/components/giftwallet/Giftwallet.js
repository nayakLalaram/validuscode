import React from "react";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";
import "../giftwallet/giftwallet.css";

function Giftwallet() {
  let gift_wallet = [
    {
      label: "Date/Time",
      property: "date_time",
      type: "text",
      visible: true,
      cssClasses: ["font-color", "font-f", "font-size-16"],
    },
    {
      label: "Amount",
      property: "amount",
      type: "text",
      visible: true,
      cssClasses: ["font-color", "font-f", "font-size-16"],
    },
    {
      label: "Fee",
      property: "fee",
      type: "text",
      visible: true,
      cssClasses: ["font-color", "font-f", "font-size-16"],
    },
    {
      label: "Receivable Amount",
      property: "receivable_amount",
      type: "text",
      visible: true,
      cssClasses: ["font-color", "font-f", "font-size-16"],
    },

    {
      label: "Status",
      property: "status",
      type: "text",
      visible: true,
      cssClasses: ["text-green"],
    },

    {
      label: "Mode",
      property: "mode",
      type: "text",
      visible: true,
      cssClasses: ["font-color", "font-f", "font-size-16"],
    },
    {
      label: "Message",
      property: "message",
      type: "text",
      visible: true,
      cssClasses: [
        "font-color",
        "font-f",
        "font-size-16",
        "max-w-[60px]",
        "overflow-auto-tbl",
      ],
    },
    {
      label: "Comments",
      property: "comments",
      type: "text",
      visible: true,
      cssClasses: ["font-color", "font-f", "font-size-16"],
    },
  ];
  const aioTableData = [
    {
      id: 0,
      date_time: "18/08/2022 09:32",
      amount: "50.00  ",
      fee: "-0  ",
      receivable_amount: "50.00  ",
      status: "success",
      mode: "Debit",
      message: "Gift Amount transferred to hhq011a Gift Wallet",
      comments: "my transaction no hhq011a",
    },
    {
      id: 2,
      date_time: "18/08/2022 09:32",
      amount: "50.00  ",
      fee: "-0  ",
      receivable_amount: "50.00  ",
      status: "success",
      mode: "Debit",
      message: "Gift Amount transferred to hhq011a Gift Wallet",
      comments: "my transaction no hhq011a",
    },
    {
      id: 3,
      date_time: "18/08/2022 09:32",
      amount: "50.00  ",
      fee: "-0  ",
      receivable_amount: "50.00  ",
      status: "success",
      mode: "Debit",
      message: "Gift Amount transferred to hhq011a Gift Wallet",
      comments: "my transaction no hhq011a",
    },
    {
      id: 4,
      date_time: "18/08/2022 09:32",
      amount: "50.00  ",
      fee: "-0  ",
      receivable_amount: "50.00  ",
      status: "success",
      mode: "Debit",
      message: "Gift Amount transferred to hhq011a Gift Wallet",
      comments: "my transaction no hhq011a",
    },
  ];
  return (
    <>
      <Header  />  
    <Navigation />
      <div className="sm:ml-[290px] mt-[50px]">
        <div className="pt-4">
          {/* <vex-page-layout> */}
          {/* <vex-page-layout-content> */}
          <div className="  card   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-0">
            <div
              // @fadeInUp
              className="   sm:col-span-3 border-r "
            >
              <div className="px-6 py-4 border-b flex items-center">
                <h2 className="font-bold text-[16px] m-0 font-f font-color m-0">
                  Gift Wallet
                </h2>
              </div>

              <div className="px-2 py-4 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <div className="flex-auto  ">
                    <h2 className="content-value w-full text-center  text-[32px] m-0 font-f font-bold font-color mt-3 ">
                      1050 &nbsp;
                    </h2>
                  </div>

                  <div className="flex-auto flex justify-center ">
                    <button
                      className=" addbtn border_botton text-center border rounded-full bg-vilotate    text-[12px] m-0 font-f font-bold mt-3  px-4"
                      type="button"
                    >
                      + ADD NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              // @fadeInUp
              className="   sm:col-span-4 "
            >
              <div className="px-6 py-4 border-b flex items-center">
                <h2 className=" m-0 text-[13px] font-f font-color ">
                  Transfer Points
                </h2>
              </div>

              <div className="px-6 py-4 flex flex-col sm:flex-row sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:gap-4 pt-2">
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 mat-label font-f text-[10px] ">
                      Amount
                    </div>
                    <div className="mt-2 bg-foreground rounded-full border px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox font-f text-[14px]   px-4 py-2 border-0 outline-none w-full bg-transparent "
                        value="100"
                        placeholder=" AMOUNT"
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 text-[10px]  font-f font-color ">
                      Username
                    </div>
                    <div className="mt-2 bg-foreground rounded-full border px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px]  font-f px-4 py-2 border-0 outline-none w-full bg-transparent "
                        value=""
                        placeholder=" Username"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex items-end  sm:flex-row sm:gap-4 pt-2 ">
                  <button
                    mat-raised-button
                    className="transferbtn  w-full  flex items-center px-3 text-white py-3 font-f text-[10px]   mt-md-2  rounded-full "
                    type="button"
                  >
                    <i
                      className="fa fa-arrow-right px-2 text-[10px] text-white"
                      aria-hidden="true"
                    ></i>
                      
               
                    TRANSFER
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="card overflow-hidden mt-2 mb-3 ">
          <div className=" px-6 h-16  sticky left-0 flex mt-4 items-center ml-6 ">
            <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
              <span className="font-f text-[22px]  m-0 font-bold">
                ACTIVE & PASSIVE WALLET HISTORY
              </span>
            </h2>

            <div className="bg-foreground rounded-full border px-4 max-w-[300px] ml-5 flex-auto flex items-center border border-gray-300">
              <mat-icon className="icon-sm text-secondary" svgIcon="mat:search">
                <i
                  className="fa fa-search text-[12px] text-gray-500"
                  aria-hidden="true"
                ></i>
              </mat-icon>
              <input
                //  [formControl]="searchCtrl"
                className="px-4  border-0 outline-none w-full bg-transparent font-f py-2 text-[14px]  "
                placeholder="Search..."
                type="search"
              />
            </div>

            <span className="flex-1"></span>
          </div>

          <table
            // @stagger
            //  [dataSource]="dataSource"
            className="w-full ml-5"
            mat-table
            matSort
          >
            <thead>
              <tr>
                {gift_wallet.map((items) => (
                  <>
                    <td className=" font-bold border-b  font-f text-[14px] py-2 font-color">
                      {" "}
                      {items.label}
                    </td>
                    <td className="font-f text-[16px]  ">
                      {/* *matCellDef="let row" [ngClass]="column.cssClasses"
              mat-cell> */}
                      {/* {{
                row[column.property] }} */}
                    </td>
                  </>
                ))}
              </tr>
            </thead>

            <tbody>
              {aioTableData.map((items) => (
                <tr className="tabletr  my-2 py-2">
                  <td className=" border-b  font-f text-[14px] py-2  font-color">
                    {" "}
                    {items.date_time}
                  </td>
                  <td className="font-f text-[16px]  "></td>

                  <td className=" border-b  font-f text-[14px]  font-color">
                    {" "}
                    {items.amount}
                  </td>
                  <td className="font-f text-[16px]  "></td>
                  <td className=" border-b  font-f text-[14px]  font-color">
                    {" "}
                    {items.fee}
                  </td>
                  <td className="font-f text-[16px]  "></td>
                  <td className=" border-b  font-f text-[14px]  font-color">
                    {" "}
                    {items.receivable_amount}
                  </td>
                  <td className="font-f text-[16px]  "></td>
                  <td className=" font-bold border-b  font-f text-[14px]  text-green">
                    {" "}
                    {items.status}
                  </td>
                  <td className="font-f text-[16px]  "></td>

                  <td className=" border-b  font-f text-[14px] ">
                    {" "}
                    {items.mode}
                  </td>
                  <td className="font-f text-[16px]  "></td>
                  <td className=" border-b  font-f text-[14px] ">
                    {" "}
                    {items.message}
                  </td>
                  <td className="font-f text-[16px]  "></td>
                  <td className=" border-b  font-f text-[14px]  ">
                    {" "}
                    {items.comments}
                  </td>
                  <td className="font-f text-[16px]  "></td>
                </tr>
              ))}
            </tbody>
          </table>

          <mat-paginator
            // [pageSizeOptions]="pageSizeOptions" [pageSize]="pageSize"
            className="sticky left-0"
          ></mat-paginator>
        </div>

      </div>
                

    </>
  );
}
export default Giftwallet;
