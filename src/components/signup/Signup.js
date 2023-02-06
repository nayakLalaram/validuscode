import React, { useState } from "react";
import "../signup/signup.css";
import logoicom from "../../assets1/assets/svg/app_icon_white.svg";
import arrowright from "../../assets1/assets/svg/arrow-bottom-right.svg";

function SIGNUP() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  function generatecapta() {
    var capture = (Math.random() * 1e32).toString(36).substring(0, 7);
  }

  function send() {}
  var capture = (Math.random() * 1e32).toString(36).substring(0, 7);

  return (
    <>
      <div className="w-full h-full  screen-zoom">
        <div className="bgimg">
          <div className="mb-3 flex flex-col items-center justify-center px-2">
            <img src={logoicom} className="appicon" alt="" />
            <div
              className="py-6 login-card mt-4 card overflow-hidden w-full max-w-[470px] bg-white "
            >
              <div className="text-center ">
                <h2 className=" text-header  m-0 pt-0 font-[900] font-bold ">
                  SIGN UP
                </h2>
              </div>
              <div
                className="text-center fmailyf text-[11px] mt-2  mb-8 "
                // style={{font: 'normal normal 600 10px/13px '}}
              >
                <p className="text-black" >Hello! Start Earning After A Simple Sign Up</p>
              </div>

              <div
                className="  flex flex-col gap-4  mt-4"
              >
                <div className="flex flex-col  ">
                  <div className="flex-auto  justify-center item-center w-full px-4">
                    {" "}
                    <div className="text-center  font-weight-600 font-bold text-[12px] fmailyf ">
                      NAME
                    </div>
                    <div className="mt-1 bg-foreground rounded-full border px-6   flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center font-size-14"
                        placeholder="Enter name"
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}

                      />
                    </div>
                  </div>
                  <div className="flex-auto justify-center item-center w-full px-6 mt-4">
                    <div className="text-center  font-weight-600 font-bold text-[12px] fmailyf">
                      USERNAME
                    </div>
                    <div className="mt-1 bg-foreground rounded-full border px-4   flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center rgb"
                        //   style={{color:rgba(0, 0, 0, .6) }}
                        placeholder="Enter Username"
                        type="text"
                        value={username}
                        onChange={(e)=>setUserName(e.target.value)}


                      />
                    </div>
                  </div>
                  <div className="flex-auto justify-center item-center w-full px-6 mt-4">
                    <div className="text-center  font-weight-600 font-bold text-[12px] fmailyf">
                      E-MAIL
                    </div>
                    <div className="mt-1 bg-foreground rounded-full border px-4   flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center rgb"
                        //   style={{color:rgba(0, 0, 0, .6) }}
                        placeholder="Enter email"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}


                      />
                    </div>
                  </div>{" "}
                  <div className="flex-auto justify-center item-center w-full px-6 mt-4">
                    <div className="text-center  font-weight-600 font-bold text-[12px] fmailyf">
                      COUNTRY
                    </div>
                    <div className="mt-1 bg-foreground rounded-full border px-4   flex items-center border border-gray-300">
                      <select
                        name=""
                        id=""
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center rgb font-bold "
                      >
                        <option value="">UAE</option>
                        <option value="">India</option>
                        <option value=""></option>
                      </select>
                      {/* <input
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center rgb"
                        //   style={{color:rgba(0, 0, 0, .6) }}
                        placeholder="Enter Password"
                        type="text"
                      /> */}
                    </div>
                  </div>
                  <div className="flex-auto justify-center item-center w-full px-6 mt-4">
                    <div className="text-center  font-weight-600 font-bold text-[12px] fmailyf">
                      PASSWORD
                    </div>
                    <div className="mt-1 bg-foreground rounded-full border px-4   flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center rgb"
                        //   style={{color:rgba(0, 0, 0, .6) }}
                        placeholder="Enter Password"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}


                      />
                    </div>
                  </div>
                  <div className="flex-auto justify-center item-center w-full px-6 mt-4">
                    <div className="text-center  font-weight-600 font-bold text-[12px] fmailyf">
                      CONFIRM PASSWORD
                    </div>
                    <div className="mt-1 bg-foreground rounded-full border px-4   flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center rgb"
                        //   style={{color:rgba(0, 0, 0, .6) }}
                        placeholder="Enter Password"
                        type="password"
                        value={confirmpassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}

                      />
                    </div>
                  </div>
                  <div className="flex-auto justify-center item-center w-full px-6 mt-4">
                    <div className="text-center  font-weight-600 font-bold text-[12px] fmailyf">
                      REFERRAL
                    </div>
                    <div className="mt-1 bg-foreground rounded-full border px-4   flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-2 border-0 outline-none w-full bg-transparent text-center rgb"
                        //   style={{color:rgba(0, 0, 0, .6) }}
                        placeholder="Enter code"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="CaptchBox mx-20 mt-8 mb-2 py-2 px-2 text-black text-center   ">
                    {capture}
                  </div>
                  <div className="flex-auto justify-center item-center w-full px-6">
                    <div className="mt-2 bg-foreground rounded-full border px-4  flex-auto flex items-center border border-gray-300">
                      <input
                        className="px-4 py-2 border-0 outline-none w-full bg-transparent text-center"
                        placeholder="Enter the Captcha"
                        type="text"
                      />
                    </div>
                  </div>
                  <u
                    onClick={generatecapta}
                    className="mt-2 text-center text-center font-size-10 font-color   logincs
                    "
                  >
                    Refresh The Captcha
                  </u>
                  <div className="text-center mt-10 fmailyf  ">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="rounded mr-2 w-5 h-5"
                    />
                    <label
                      className="text-[11px]"
                      // style={{font:' normal normal 600 10px/13px'}}
                    >
                      I agree to validus
                      <span className="color_underline">
                        Term And Condition , Private Policy
                      </span>
                      &
                      <span className="color_underline">Compliance policy</span>{" "}
                    </label>
                  </div>
                  <div className="mt-4  flex-auto flex items-center justify-center ">
                    <div
                      onClick={send}
                      className=" px-8 text-center text-white btn_sign_in font-f font-size-10  flex  items-center py-3 logincs   "
                    >
                      <fa-icon className="text-white  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                          width="10"
                          height="10"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <line
                            x1="40"
                            y1="128"
                            x2="216"
                            y2="128"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="24"
                          ></line>
                          <polyline
                            points="144 56 216 128 144 200"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="24"
                          ></polyline>
                        </svg>
                      </fa-icon>
                      <span
                        style={{ letterSpacing: "1px" }}
                        className="pl-2 text-white font-f font-size-10"
                      >
                        REGISTER
                      </span>
                    </div>
                  </div>
                  <div className="text-center fmailyf  mt-4  text-[11px] ">
                    <p className="text-black"  style={{ font: " normal normal 600 10px/13px" }}>
                      Already Have An Account?{" "}
                      <a href="/" className="color_underline">
                        Signuphere
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img  className="bg-image w-full " src="assets/img/backgroun_image.jpg">  */}
      </div>
    </>
  );
}
export default SIGNUP;
