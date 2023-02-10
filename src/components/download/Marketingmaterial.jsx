import React, { useState } from "react";
import cloud from "../../asset1/assets/svg/cloud-download.svg";
import "../Downloads/compliancs.css";
import pdf_img from "../../asset1/assets/img/pdf.png";
import { CiGlass } from "react-icons/ci";

function MarketingMaterial() {
  
  const[mouse , setMouse]=useState(false);

  function mousecome(){
    setMouse(true)
  }
  function mousego(){
    setMouse(false)
  }

  let mouse_moment = false;

  let membership = [
    {
      text: "Rank Volume",
      value: "1000",
    },
    {
      text: "Buieness Volume",
      value: "50%",
    },
    {
      text: "Eekly REWARDS",
      value: "2%-3%",
    },
  ];
  let array_membership = [
    {
      value: "V-50",
      image: pdf_img,
      purchase_amount: "50",
      mouse_point: false,
    },
    {
      value: "V-100",
      image: pdf_img,
      purchase_amount: "100",
      mouse_point: false,
    },
    {
      value: "V-200",
      image: pdf_img,
      purchase_amount: "200",
      mouse_point: false,
    },
    {
      value: "V-300",
      image: pdf_img,
      purchase_amount: "300",
      mouse_point: false,
    },
 

 
  ];


  // let showButton = false;

  return (
    <>
    <div>

   
      <div className="flex p-gutter items-center sm:flex-row flex-col ">
        <h2 className=" pt-4 pl-6 font-f ftext-[18px] font-f font-bold font-color">
          DOWNLOADS
        </h2>

        <div className="ml-16 mt-2 bg-foreground rounded-full border px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
          <input
            className="px-4 py-2 border-0 outline-none w-full bg-transparent text-[14px]"
            placeholder="Search..."
            type="search"
          />

          <i
            className="fa fa-search text-[12px] text-gray-500"
            aria-hidden="false"
          ></i>
        </div>
      </div>
      <div className=" p-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1 justify-center items-center">
        {array_membership.map((items, i) => (
          <>
          <div 
          //  onMouseEnter={mousecome}
          //  onMouseLeave={mousego}
          >
         
         
            <div
          
           
 
              className={`${
                mouse? "card bg-vilet text-white " : ""
              } +  cards py-8   bg-overall-height   relative hover:shadow-lg trans-shadow flex flex-col items-center border-t max-w-[295px] py-4 mt-8 `}
              style={{ borderRadius: "9px" }}
            >

              <img
                className="clr"
                src={items.image}
                style={{ width: "90.84px ", height: "100.77px" }}
              />

              <div
                // @fadeInRight
                className="flex-auto mb-4 px-2"
              >
                <h4 className=" m-0 font-f-bold text-[14px] font-extrabold  mt-5">
                  Document (PDF)
                </h4>
              </div>

              <div
                //  @fadeInRight
                className="flex-auto mb-4 px-2"
              >
                <div>
                  <h4 className=" font-f-regular text-[16px]  text-center  ">
                    THE 7 HABITS OF HIGHLY EFFECTIVE PEOPLE
                  </h4>
                </div>
              </div>

              <h4 className="font-f-bold text-[12px] font-weight-600  mt-5 pb-4">
                12MB
              </h4>

              <div
                //  @scaleInOut
                className= 'px-3   py-2 flex   download_btn  font-f-bold  font-bold text-[10px] mt-4'
                type="button"
              >
                <img
                  className='clr mr-2 '
                  src={cloud}
                />
                Download
              </div>
            </div>
            </div>
          </>
        ))}
      </div>
      </div>
    </>
  );
}
export default MarketingMaterial;
