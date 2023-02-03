import React from "react";
import "../membership/membership.css";
import card1 from "../../assets1/assets/membership/card1.png";
import card2 from "../../assets1/assets/membership/card2.png";
import card3 from "../../assets1/assets/membership/card3.png";
import card4 from "../../assets1/assets/membership/card4.png";
import card5 from "../../assets1/assets/membership/card5.png";
import card6 from "../../assets1/assets/membership/card6.png";
import card7 from "../../assets1/assets/membership/card7.png";
import card8 from "../../assets1/assets/membership/card8.png";
import Header from "../common/Header";
import Navigation from "../common/Navigation";

function Membership() {
  const generateItems = (count, creator) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(creator(i));
    }
    return result;
  };

  let mylist = {
    mouse_moment: false,
    array_gen: generateItems(60, (i) => 1),
    purchasedMembership: [4, 18, 30, 45, 60],
    arrycolor: [
      { background: "7fb6da" },
      { background: "#a49c7d" },
      { background: "b58c45" },
      { background: "b58c45" },
      { background: "b58c45" },
    ],
    isInclude(val) {
      return this.purchasedMembership.includes(val);
    },
  };
  function generateArray(val) {
    let generatedArray = [];
    for (let i = 0; i < val; i++) {
      generatedArray.push(i);
    }
    return generatedArray;
  }

  function GenerateItemsSub(start) {
    let ar = generateItems(start, (i) => 1);
    return ar;
  }

  let array_membership = [
    {
      value: "V50",
      image: card1,
      purchase_amount: "50",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "50",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 1.5 Points",
        },
      ],
    },
    {
      value: "V100",
      image: card2,
      purchase_amount: "100",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "100",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 3 Points",
        },
      ],
    },
    {
      value: "V250",
      image: card3,
      purchase_amount: "250",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "250",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 7.5 Points",
        },
      ],
    },
    {
      value: "V500",
      image: card4,
      purchase_amount: "500",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "500",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 15 Points",
        },
      ],
    },
    {
      value: "V1000",
      image: card5,
      purchase_amount: "1000",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "1000",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 30 Points",
        },
      ],
    },
    {
      value: "V3000",
      image: card6,
      purchase_amount: "3000",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "3000",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 90 Points",
        },
      ],
    },
    {
      value: "V5000",
      image: card7,
      purchase_amount: "5000",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "5000",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 150 Points",
        },
      ],
    },
    {
      value: "V10000",
      image: card8,
      purchase_amount: "10000",
      mouse_point: false,
      membership: [
        {
          text: "Rank Volume",
          value: "10000",
        },
        {
          text: "Buieness Volume",
          value: "50",
        },
        {
          text: "Weekly Vewards",
          value: "Upto 300 Points",
        },
      ],
    },
  ];

  return (
    <>
      <Header  />
      <Navigation />

     <div className="sm:ml-[290px]  mt-[70px]">
      <>
    
      
        <div>
          <h2 className=" pt-4 pl-10  text-[18px] font-f font-bold  font-color uppercase ">
            Membership Tier
          </h2>
        </div>
        <div className=" p-gutter my-6 ">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 flex items-center justify-center">
            <div className=" sm:col-span-1  border-current-m    w-full  card">
              <div className="bg-current-mem border-current-m h-12 px-2 w-full flex items-center justify-center text-[13px] py-2 font-f font-bold text-white">
                <span>CURRENT MEMBERSHIPS</span>
              </div>
              <div className="w-full px-2 flex items-center justify-center h-12 text-[13px] py-2 font-f  font-bold font-color">
                <span> V100,V500</span>
              </div>
            </div>
            <div className=" sm:col-span-3 ruler relative w-full">
             
                <div  className="ruler-cell flex ">
                {mylist.array_gen.map((items, i) => (
                    <>
                  <div key={i} className=" circle-h-w relative  flex item-center justify-end   relative ">
                    <div
                      className={
                        (i + 1 == 4
                          ? "circle-color1"
                          : i + 1 == 18
                          ? "circle-color2"
                          : i+1==30 ?"circle-color3"
                          : i+1==45 ?"circle-color3" :
                          i+1==60 ?"circle-color3" :
                          'circle-color') +
                        "card circle_card  absolute flex justify-center text-white items-center font-f text-[12px] bottom-2 flex "
                      }
                    >
                      {mylist.isInclude(i + 1) ? i + 1 : ""}
                    </div>
          
                  </div>
                  {/* <span className="zero font-f font-color ml-1">0</span> */}
                  <span
                    className="number font-f font-color"
                  >
                    {(i + 1) % 10 == 0 && !mylist.isInclude(i + 1) ? i + 1 : ""}
                  </span>
                  </>
                            ))}
                </div>
         
            </div>
          </div>
        </div>
      </>

      <div className=" p-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {array_membership.map((items, index) => (
          <div
            //    *ngFor="let items of array_membership"
            //   (mouseenter)="showButton = true" (mouseleave)="showButton = false"
            className="card bg-overall-height  pb-2 relative hover:shadow-lg trans-shadow flex flex-col items-left border-t "
            key={index}
          >
            {/* <div className="" > */}
            <div className="bg-card  mb-2 justify-center pt-4  ">
              <h2 className=" font-f  text-[13px]  text-center text-white ">
                {" "}
                {items.value}
              </h2>
              <div className="height_in">
                <img
                  src={items.image}
                  style={{ height: "70%", width: "100%" }}
                />
              </div>
            </div>

            <div className="card-margin-t">
              <div className=" px-6  pt-12 margin_card flex flex-col gap-4 ">
                <div
                  // *ngFor="let item of items.membership;let i=index;"
                  className=""
                >
                  {items.membership.map((value, index) => (
                    // <div>
                    <>
                    {
                      index!=0 && 
                      <hr
                        //   *ngIf="i!=0"
                        width="100%"
                        className="dashed-border"
                        color="#FFFFFF"
                        size="1"
                        key={index}
                      />

                    }
                      
                      <div className="flex items-center py-2">
                        <div
                          //  @fadeInRight
                          className="flex-auto"
                        >
                          <h4 className="font-semibold text-[13px] font-f leading-snug ">
                            {value.text}
                          </h4>
                        </div>

                        <div>
                          <h4 className=" font-semibold text-[13px] font-f  ">
                            {value.value}
                          </h4>
                        </div>
                      </div>
                      <hr
                        //   *ngIf="i+1==items.membership.length"
                        width="100%"
                        className="dashed-border"
                        color="#FFFFFF"
                        size="1"
                      />

                      {/* </div> */}
                    </>
                  ))}
                  <h4 className="  w-25 py-4 px-2 text-center  text-[13px] font-f font-semibold leading-5">
                    Note: levels go from 1 to 8 — [1] V Mastery Level 1 [2]
                    Price of respective Membership [3] Weekly Loyalty Points
                  </h4>
                  <button
                    onMouseEnter={items.mouse_point == true}
                    onMouseLeave={items.mouse_point == false}
                    className={
                      items.mouse_point
                        ? "bg-vilet text-white"
                        : "border-vilet px-1    mb-6 pb-2 rounded-full text-[16px] uppercase font-f-bold font-bold btnhover"
                    }
                    //       className=" btnhover
                    // mx-2 px-2 my-6 py-2 rounded-full text-[16px] uppercase font-f-bold font-bold "
                    type="button"
                  >
                    Purchase Membership <br /> {items.purchase_amount}
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
export default Membership;
