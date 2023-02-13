import React, { useState } from "react";
import "../netwok/Networktree.css";
import avatar from "../../assets1/assets/svg/avatar.svg";
import appicon_half from "../../assets1/assets/svg/appicon_half.svg";
import Tree from "react-d3-tree";
import { useCenteredTree } from "./helper";

function NetworkTree() {
  const [active_Tab, setActive_tab] = useState(0);

  let WIDTH = 1000;
  let HEIGHT = 1000;
  let ELEMENT_WIDTH = 80;
  let ELEMENT_HEIGHT = 97;
  let x = 0;
  let y = 0;
  let viewBox = `${x} ${y} ${WIDTH} ${HEIGHT}`;
  let orgChartJson = {
    name: "aus",
    children: [
      {
        name: "aus",
        attributes: {},
        children: [
          {
            name: "aus",
            children: [
              {
                name: "aus",
              },
              {
                name: "aus",
              },
            ],
          },
          {
            name: "aus",
            children: [
          
            ],
          },
        ],
      },
      {
        name:"aus",
        children: [
          {
            name: "aus",
            children: [
            ],
          },
          {
            name: "aus",
            attributes: {},
            children: [
              {
                name: "aus",
              },
              {
                name: "aus",
              },
             
            ],
          },
        ],
      },
    ],
  };

  const [translate, containerRef] = useCenteredTree();
  const containerStyles = {
    height: "100vh",
  };
  console.log(active_Tab);
  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g className="flex justify-center items-center ">
      <foreignObject
        x={x - 35}
        y={y - 73}
        width={ELEMENT_WIDTH}
        height={ELEMENT_HEIGHT}
        onClick={toggleNode}
      >
        <div className=" relative  ">
          <div className="absolute">
            <img
              style={{ marginTop: "40px", width: "22px" }}
              src={appicon_half}
            />{" "}
          </div>
          <img
            //  className={`${ i==1?'border1':i==2?'border2':i==3?'border4':'border5'} + rounded border" `}
            className="rounded border2 "
            style={{ height: "63.09px", width: "65.09px" }}
            src={avatar}
          />
        </div>
      </foreignObject>

      <text
        x={x - 13}
        y={y - 2}
        style={{
          fontWeight: "lighter !important ",
          fontFamily: "none !important",
        }}
        className="text-[13px] font-f "
      >
        aus
      </text>
    </g>
  );

  return (
    <>
      <div className="w-full">
        <div className="card flex-auto ">
          <div className="px-6 py-4 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:gap-4 pr-6  ">
              <div
                style={{ opacity: 0.44 }}
                className="flex-auto mt-2 max-w-[80%] font-f text-[13px]"
              >
                "Click on" The member to go to that downline. (or) To Create a
                new Member at that position.
              </div>
              <div className="flex-auto flex justify-center item-center">
                <div className="mt-2 bg-foreground rounded-full border px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox text-[14px] font-f px-4 py-2 border-0 outline-none w-full bg-transparent text-secondary"
                    placeholder="Username"
                    type="text"
                  />
                </div>

                <div className=" flex justify-center ml-2">
                  <button
                    className="arrowbtn mt-2 px-2 text-white rounded-full text-[16px] font-bold  font-f"
                    type="button"
                  >
                    <i
                      className="fa fa-arrow-right px-2 text-[16px] text-white"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hrrr" />

        {active_Tab === 0 && (
          <>
            <div>
              <g className="flex flex-col justify-center items-center ">
                <foreignObject
                  x={x - 35}
                  y={y - 72}
                  width={ELEMENT_WIDTH}
                  height={ELEMENT_HEIGHT}
                  onClick={() => setActive_tab(1)}
                >
                  <div className=" relative  ">
                    <div className="absolute">
                      <img
                        style={{ marginTop: "40px", width: "22px" }}
                        src={appicon_half}
                      />{" "}
                    </div>
                    <img
                      className="rounded border2 "
                      style={{ height: "63.09px", width: "65.09px" }}
                      src={avatar}
                    />
                  </div>
                </foreignObject>

                <text
                  style={{
                    fontWeight: "lighter !important ",
                    fontFamily: "none !important",
                  }}
                  className="text-[13px] font-f "
                >
                  aus
                </text>
              </g>
            </div>
          </>
        )}
      </div>
      {active_Tab === 1 && (
        <div
          style={containerStyles}
          ref={containerRef}
          className="flex justify-center items-center "
        >
          <Tree
            data={orgChartJson}
            translate={translate}
            renderCustomNodeElement={renderRectSvgNode}
            orientation="vertical"
            draggable={false}
            zoomable={false}
            nodeSize={{ x: "110", y: "110" }}
          />
        </div>
      )}
    </>
  );
}

export default NetworkTree;
