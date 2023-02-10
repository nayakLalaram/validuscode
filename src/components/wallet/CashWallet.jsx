import React from 'react'

const CashWallet = () => {
  
  return (
    <div className="card flex-auto">
    <div className="px-6 py-4 border-b flex items-center">
      <h2 className="text-[16px]   font-f-bold font-bold font-color m-0">
        Withdraw Wallet Balance
      </h2>
    </div>

    <div className="px-6 py-4 flex flex-col">
      <div className="flex flex-col sm:flex-row sm:gap-4 px-6">
        <div className="flex-auto w-72">
          <div className="text-left   text-[10px] font-weight-600  font-f font-color mt-2 ml-3 ">
            SELECT WITHDRAW MODE
          </div>
          <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
            <select
              className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent "
              placeholder=" receivable amount"
              type="text"
            >
              <option className="text-[14px]">bitcoin</option>
            </select>
          </div>

          <div className="">
            <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
              RECEIVABLE AMOUNT
            </div>
            <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
              <select
                className="textbox font-f text-[16px] px-4 py-[6px] border-0 outline-none w-full bg-transparent "
                placeholder=" receivable amount"
                type="text"
              >
                <option className="text-[10px]">
                  receivable amount
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex-auto">
          <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color">
            AMOUNT IN USD
          </div>
          <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
            <input
              className="textbox  px-4 py-[6px] border-0 outline-none w-full bg-transparent font-f "
              placeholder="amount"
              type="text"
            />
          </div>

          <div className="">
            <div className=" mt-2 ml-3 text-[10px] font-weight-600  font-f font-color">
              2FA
            </div>
            <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
              <input
                className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent text-secondary"
                placeholder=" 2FA"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex-auto">
          <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
            ADDRESS
          </div>
          <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
            <input
              className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent "
              placeholder="address"
              type="text"
            />
          </div>
          <div className="">
            <div className=" mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
              OTP
            </div>
            <div className="mt-2 bg-foreground rounded-full px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
              <input
                className="textbox  px-4 py-[6px] border-0 outline-none w-full bg-transparent  font-f"
                placeholder=" enter OTP (check your email) "
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex-auto">
          <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
            FEE IN USD (5%)
          </div>
          <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
            <input
              className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent text-secondary"
              placeholder=" fee"
              type="text"
            />
          </div>

          <div className="  flex-auto flex items-center  pt-8">
            <button
              className=" w-full bg-lenier-gradient text-white px-3 py-3 rounded-full text-[10px] font-weight-600  font-f"
              type="button"
            >
              <fa-icon className="text-white px-2  "></fa-icon>
              TRANSFER REWARDS
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-4 mt-4  px-6"></div>
    </div>
  </div>
  )
}

export default CashWallet;