import React from 'react'

const RewardWallet = () => {
  return (
    <div className="card flex-auto pt-8">
              <div className="px-6 py-4 border-b-black border-[1px] border-opacity-10 flex items-center">
                <h2 className=" text-sm m-0 font-f-bold font-bold">
                  Transfer Active Bonus Amount into Cash Wallet
                </h2>
              </div>

              <div className="px-6 py-4 flex flex-col sm:flex-row sm:gap-6  pt-2 ">
                <div className="flex flex-col sm:flex-row sm:gap-4  flex-auto">
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      AMOUNT
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] pl-4 pr-20 py-2 border-0 outline-none w-full font-f bg-transparent value:text-[4px]"
                        value="100"
                        placeholder="AMOUNT"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      FEE IN USD
                    </div>
                    <div className="mt-2 bg-foreground rounded-full px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] pr-20 px-4 py-2 border-0 outline-none w-full bg-transparent  font-f"
                        value="0"
                        placeholder=" Fee In USD"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      RECEIVABLE AMOUNT
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] px-4 pr-20 py-2 border-0 outline-none w-full bg-transparent font-f"
                        value="receivable amount"
                        placeholder=" Receivable Amount"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      2FA
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] pr-12 font-f px-4 py-2 border-0 outline-none w-full bg-transparent text-secondary"
                        value="2FA"
                        placeholder=" 2FA"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="  flex items-end pt-2">
                  <button
                    mat-raised-button
                    className="bg-lenier-gradient  w-full flex items-center justify-center  rounded-full px-5 font-f font-size-10 font-weight-600"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></line>
                      <polyline
                        points="144 56 216 128 144 200"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></polyline>
                    </svg>
                    <p className="text-white text-[10px] font-semibold">
                      TRANSFER
                    </p>
                  </button>
                </div>
              </div>
            </div>
  )
}

export default RewardWallet