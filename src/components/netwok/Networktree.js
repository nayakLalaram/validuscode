import React from "react";
import "../netwok/Networktree.css"

function NetworkTree() {
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
   <hr />
        <div className=" w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="chart">
            {/* [attr.width]="WIDTH"
        [attr.height]="HEIGHT"
  [attr.viewBox]="viewBox"*/}

            <g className="connection" />
            {/* // *ngFor="let e of chartElementList let i= index" (click)="onClick(e.item)"> */}
            {/* //     <path *ngIf="e.connection" [attr.d]="e.connection+24"  */}
            {/* //*/}
            {/* <foreignObject  [attr.x]="e.x - ELEMENT_WIDTH/2"
                [attr.y]="e.y - ELEMENT_HEIGHT/2"
                [attr.width]="ELEMENT_WIDTH"
                [attr.height]="ELEMENT_HEIGHT">
                <div  className=" relative ">
                  <div className="absolute"><img style="margin-top:45px" src="assets/svg/appicon_half.svg"> </div>
                  <img  [ngclassName]="i==1?'border1':i==2?'border2':i==3?'border4':'border5' "  className="  rounded border" style="height:80.09px;width:80.09px;" className="" src="assets/svg/avatar.svg"> 
                 
                 
                </div>
                  </foreignObject> */}
            <text
              //    [attr.x]="e.x" [attr.y]="e.y+45"
              className="item-text font-f font-weight-600 font-color"
            >
              {/* {{e.item.name}} */} e.items.name
            </text>
            {/* </g>    */}
          </svg>
        </div>
      </div>
    </>
  );
}

export default NetworkTree;
