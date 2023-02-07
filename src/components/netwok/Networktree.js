import React from "react";
import "../netwok/Networktree.css";
import avatar from '../../assets1/assets/svg/avatar.svg'
import appicon_half from '../../assets1/assets/svg/appicon_half.svg'


function NetworkTree() {
 


 let colors = ['#9E9E9E', '#388E3C', '#4527A0', '#EF6C00'];
 let  OrgItem = {name: 'New Item', level: 1, description: ''};
  // let  selected = this.newItem;
  // let root = this.newItem;
  // let list= OrgIte = [];
  // let chartElementList = ChartElement = [];
  let WIDTH = 1000;
   let HEIGHT = 1000;
 let ELEMENT_WIDTH = 80;
 let  ELEMENT_HEIGHT = 97;
 let PADDING = 100;
 let  zoom = 1;
 let  ZOOM_FACTOR = 1.2;
 let  dragMode = false;
 let moveMode = false;
  let startX = 0;
  let startY = 0;
  let x0 = 0;
  let y0 = 0;
  let x = 0;
  let y = 0;
 let viewBox = `${x} ${y} ${WIDTH} ${HEIGHT}`;
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
        <div className=" w-full flex justify-center " >
          <svg xmlns="http://www.w3.org/2000/svg" className="chart" 
          //  height={HEIGHT}
          //  width={WIDTH}
            // viewBox={viewBox}

           
          >
            
               
            {/* [attr.width]="WIDTH"
        [attr.height]="HEIGHT"
  [attr.viewBox]="viewBox"*/}

            <g className="connection" >
            {/* // *ngFor="let e of chartElementList let i= index" (click)="onClick(e.item)"> */}
            {/* //     <path *ngIf="e.connection" [attr.d]="e.connection+24"  */}
            <foreignObject 
            // x={x - ELEMENT_WIDTH/2 }
            // y={y - ELEMENT_HEIGHT/2}
            width={ELEMENT_WIDTH}
            height={ELEMENT_HEIGHT}
            //  [attr.x]="e.x - ELEMENT_WIDTH/2"
            //     [attr.y]="e.y - ELEMENT_HEIGHT/2"
            //     [attr.width]="ELEMENT_WIDTH"
            //     [attr.height]="ELEMENT_HEIGHT"
            >
                <div  className=" relative  ">
                  <div className="absolute">
                  <img style={{marginTop:'45px'}} 
                  src={appicon_half}/> </div>
                  <img 
                  //  className={`${ i==1?'border1':i==2?'border2':i==3?'border4':'border5'} + rounded border" `} 
                  className="rounded "
                  style={{ height:'80.09px' , width:'80.09px'}} 
                  src={avatar}/> 
                 
                 
                </div>
                  </foreignObject>
            <text
              // x={x}
              // y={y+45}
              //    [attr.x]="e.x" [attr.y]="e.y+45"
              className="item-text font-f font-weight-600 font-color"
            >
              {/* {e.item.name} */} 
            </text>
            </g>   
          </svg>
        </div>
      </div>
    </>
  );
}

export default NetworkTree;
