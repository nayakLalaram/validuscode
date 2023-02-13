import React, { useState } from "react";
import imgs from "../../assets1/assets/svg/person.svg";
import Tree from "react-d3-tree";
import '../netwok/Matreextree.css'

function Matrixtree() {
  let ELEMENT_WIDTH = 180;
  let ELEMENT_HEIGHT = 70;
  let x = 0;
  let y = 0;
  const [active_Tab, setActive_tab] = useState(0);
  let orgChartJson = {
    name: "CEO",
    children: [
      {
        name: "Manager",
        attributes: {},
        children: [
          {
            name: "Foreman",
            attributes: {},
            children: [
              {
                name: "Workers",
              },
            ],
          },
          {
            name: "Foreman",
            attributes: {},
            children: [
              {
                name: "Workers",
              },
            ],
          },
        ],
      },
      {
        name: "Manager",
        attributes: {},
        children: [
          {
            name: "Sales Officer",
            attributes: {},
            children: [
              {
                name: "Salespeople",
              },
            ],
          },
          {
            name: "Sales Officer",
            attributes: {},
            children: [
              {
                name: "Salespeople",
              },
            ],
          },
        ],
      },
    ],
  };

  const containerStyles = {
    width: "100vw",
    height: "100vh",
  };
  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <foreignObject
        x={x - 170}
        y={y - 33}
        width={ELEMENT_WIDTH}
        height={ELEMENT_HEIGHT}
        onClick={toggleNode}
      >
        <div
          style={{
            background:
              " transparent linear-gradient(180deg, #950DD0 0%, #8633DA 100%) 0% 0% no-repeat padding-box ",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            borderRadius: "34px",
          }}
          className="flex mt-1"
        >
          <img style={{ height: "60px", marginLeft: "4px" }} src={imgs} />

          <div style={{ color: "white", marginLeft: "5px" }}>419 Palvezi</div>
        </div>
      </foreignObject>
    </g>
  );

  return (
    <>
      <></>
      <div className="" id="container" style={{ padding: "" }}>
        <div
          className="flex items-center  justify-left"
          style={{ height: " 1400px" }}
        >
          {
            active_Tab==0 && 
            <div
            onClick={()=>setActive_tab(1)}
            style={{
              background:
                " transparent linear-gradient(180deg, #950DD0 0%, #8633DA 100%) 0% 0% no-repeat padding-box ",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              borderRadius: "34px",
              width :'170px'
            }}
            className="flex mt-1"
          >
            <img style={{ height: "60px", marginLeft: "4px" }} src={imgs} />
  
            <div style={{ color: "white", marginLeft: "5px" }}>419 Palvezi</div>
          </div>
          }
          {
            active_Tab===1 &&  
            <div style={containerStyles}>
            <Tree
              data={orgChartJson}
              renderCustomNodeElement={renderRectSvgNode}
              orientation="horizontal"
              draggable={false}
              zoomable={false}
              translate={{ x: "180", y: "280" }}
              nodeSize={{ x: "220", y: "80" }}
            />
          </div>
          }
          
        </div>
      </div>
    </>
  );
}

export default Matrixtree;
