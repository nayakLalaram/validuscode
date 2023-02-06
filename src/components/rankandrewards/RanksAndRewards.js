import React from "react";
import image1 from "../../assets1/assets/ranking/gold-coin1.png";
import image2 from "../../assets1/assets/ranking/rank-png/02.png";
import image3 from "../../assets1/assets/ranking/gold-coin3.svg";
import image4 from "../../assets1/assets/ranking/gold-coin4.svg";
import image5 from "../../assets1/assets/ranking/gold-coin5.svg";
import image6 from "../../assets1/assets/ranking/gold-coin6.svg";
import image7 from "../../assets1/assets/ranking/gold-coin7.svg";
import image8 from "../../assets1/assets/ranking/gold_coin8.png";

import watch from "../../assets1/assets/ranking/1_watch.png";
import phone from "../../assets1/assets/ranking/2_phone.png";
import laptop from "../../assets1/assets/ranking/4_laptop.png";
import gol from "../../assets1/assets/ranking/5_gol.png";
import roles from "../../assets1/assets/ranking/6_rolex.png";
import car from "../../assets1/assets/ranking/car.png";
import maskgrouo from "../../assets1/assets/ranking/Mask-Group-4.png";

import "../rankandrewards/rankandrewards.css";
import { type } from "@testing-library/user-event/dist/type";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";

function RanksRewards() {
  let array_mar_top = [
    { height: "90%" },
    { height: "70%" },
    { height: "60%" },
    { height: "50%" },
    { height: "40%" },
    { height: "30%" },
    { height: "20%" },
    { height: "10%" },
  ];

  let array_height = [
    { height: "450px" },
    { height: "487px" },
    { height: "524px" },
    { height: "561px" },
    { height: "598px" },
    { height: "635px" },
    { height: "672px" },
    { height: "709px" },
  ];

  let array_rank = [
    {
      value: "JADE",
      image: image1,
      purchase_amount: "500 ",
      mouse_point: false,
      image_bottom: "",
      response: [
        { id: 1, uid: "abc", pid: null, depth: 2, parent: true, type: "val" },
        { id: 2, uid: "5k", pid: "abc", depth: 2, parent: true, type: "val" },
        { id: 3, uid: "5k ", pid: "abc", depth: 2, parent: true, type: "val" },
      ],
    },
    {
      value: "SAPPHIRE",
      image: image2,
      purchase_amount: "1000 ",
      mouse_point: false,
      image_bottom: watch,
      response: [
        { id: 1, uid: "abc", pid: null, depth: 2, parent: true, type: "val" },
        { id: 2, uid: "20k", pid: "abc", depth: 2, parent: true, type: "val" },
        { id: 3, uid: "20k ", pid: "abc", depth: 2, parent: true, type: "val" },
      ],
    },
    {
      value: "RUBY",
      image: image3,
      purchase_amount: "2000 ",
      mouse_point: false,
      image_bottom: phone,
      response: [
        { id: 1, uid: "abc", pid: null, depth: 2, parent: true, type: "val" },
        { id: 2, uid: "80k", pid: "abc", depth: 2, parent: true, type: "val" },
        { id: 3, uid: "80k ", pid: "abc", depth: 2, parent: true, type: "val" },
      ],
    },
    {
      value: "EMERALD",
      image: image4,
      purchase_amount: "3000 ",
      mouse_point: false,
      image_bottom: laptop,
      response: [
        {
          id: 1,
          uid: "abc",
          pid: null,
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image3, label: "RUBY" }, { heading: "250K" }],
        },
        {
          id: 2,
          uid: "def",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image3, label: "RUBY" }, { heading: "250K" }],
        },
        {
          id: 3,
          uid: "ghi",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image3, label: "RUBY" }, { heading: "250K" }],
        },
      ],
    },
    {
      value: "DIAMOND",
      image: image5,
      purchase_amount: "4000 ",
      mouse_point: false,
      image_bottom: maskgrouo,
      response: [
        {
          id: 1,
          uid: "abc",
          pid: null,
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image4, label: "EMERALD" }, { heading: "250K" }],
        },
        {
          id: 2,
          uid: "def",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image4, label: "EMERALD" }, { heading: "750K" }],
        },
        {
          id: 3,
          uid: "ghi",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image4, label: "EMERALD" }, { heading: "750K" }],
        },
      ],
    },

    {
      value: "BLUE DIAMOND",
      image: image6,
      purchase_amount: "400 ",
      mouse_point: false,
      image_bottom: gol,
      response: [
        {
          id: 1,
          uid: "abc",
          pid: null,
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image3, label: "RUBY" }, { heading: "250K" }],
        },
        {
          id: 2,
          uid: "def",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [
            { img: image5, label: "DIAMOND" },
            { img: image5, label: "DIAMOND" },
            { heading: "750K" },
          ],
        },
        {
          id: 3,
          uid: "ghi",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image5, label: "DIAMOND" }, { heading: "750K" }],
        },
      ],
    },
    {
      value: "BLACK DIAMOND",
      image: image7,
      purchase_amount: "50 ",
      mouse_point: false,
      image_bottom: roles,
      response: [
        { id: 1, uid: "abc", pid: null, depth: 2, parent: true, type: "img" },
        {
          id: 2,
          uid: "def",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [
            { img: image6, label: "BLUE DIAMOND" },
            { img: image6, label: "BLUE DIAMOND" },
            { heading: "2M" },
          ],
        },
        {
          id: 3,
          uid: "ghi",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image6, label: "BLUE DIAMOND" }, { heading: "2M" }],
        },
      ],
    },
    {
      value: "CROWN DIAMOND",
      image: image8,
      purchase_amount: "50 ",
      mouse_point: false,
      image_bottom: car,
      response: [
        { id: 1, uid: "abc", pid: null, depth: 2, parent: true, type: "img" },
        {
          id: 2,
          uid: "def",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [
            { img: image7, label: "BLACK  DIAMOND" },
            { img: image7, label: "BLUE DIAMOND" },
            { heading: "8M" },
          ],
        },
        {
          id: 3,
          uid: "ghi",
          pid: "abc",
          depth: 2,
          parent: true,
          type: "img",
          img_ar: [{ img: image7, label: "BLACK DIAMOND" }, { heading: "8M" }],
        },
      ],
    },
  ];
  let selected_card = 5;

  return (
    <>
    <Header/>
    <Navigation />
      <div className="sm:ml-[270px] mt-[70px] ">
        <div >
          <h2 className=" pt-4 pl-6 m-5 font-f text-[18px] font-f font-semibold font-color">
            RANKS & REWARDS
          </h2>
        </div>
        <div className="px-4   flex flex-col sm:flex-row gap-6 overflow-x-auto  ">
          <div className="flex items-end border-b">
            { array_rank.map((items, i) => (
              <>
                <div
                //   [ngclassName]="i+1==selected_card?'seleted':i+1>selected_card?'blur':'' "
                className={` card-all  height-2  h-full  mx-3  card    flex-col    overflow-hidden max-h-full w-full max-w-2xs flex-none flex flex-col 
                ${i+1==selected_card?'selected_card' : '' ?'selected':i+1 > selected_card?'blur':''} ` }
                  style={array_height[i]}
                      
                //   className="card-all  height-2  h-full  mx-3  card    flex-col    overflow-hidden max-h-full w-full max-w-2xs flex-none flex flex-col"
                >
                  <div className="bg-card  w-full  justify-center pt-1  item-center">
                    <h2 className=" font-f text-[14px] m-3 font-bold text-center text-white   ">
                      {items.value}
                    </h2>
                    <div className="height_in justify-center item-center px-10">
                      <div className="hv-wrapper">
                        <div className="hv-item">
                          <div className="hv-item-parent">
                            <img className="img-size1" src={items.image} />
                          </div>
                          <div className="hv-item-children">
                            <div className="hv-item-child">
                              {items.response.map((res, i) => (
                                <>
                                  {res.type == "val" && res.id != 1 && (
                                    <p className="font-f text-[12px] font-color font-semibold mx-4 text-black ">
                                      {res.uid}
                                    </p>
                                  )}
                                  {res.type == "img" && res.id != 1 && (
                                    <div className="" >
                                      <div className=" text-center items-center" >
                                        {res.img_ar.map((img, i) => (
                                          <>
                                            <div className="m-2" >
                                              {img.img && (
                                                <img
                                                  src={img.img}
                                                  className="img-size"
                                                />
                                              )}
                                              <p
                                                style={{ fontSize: "8px" }}
                                                className=" font-color font-semibold  fmailyf text-black"
                                              >
                                                {img.label}
                                              </p>
                                            </div>
                                            <div className="m-2">
                                              <p className=" text-[10px] font-color font-semibold fmailyf text-black ">
                                                {img.heading}
                                              </p>
                                            </div>
                                          </>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex imgAlign w-full h-full">
                    <div className="flex-col  w-full flex justify-center items-center">
                      <div className="img-size2">
                        {
                            items.image_bottom!='' && 
                            <img
                            className="img-size2"
                              src={items.image_bottom}
                          />
                       
                        }
                         </div>
                       
                      <h4 className="   py-4 px-6 text-center  text-[13px] font-f font-weight-600">
                        {items.purchase_amount}
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RanksRewards;
