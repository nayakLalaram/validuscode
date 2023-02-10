import React from 'react'

const PassiveWallet = () => {
    const passivetable = [
        {
          id: 0,
          mamberid: "18/08/2022",
          mamberdate: "21.00",
          rate: "9.00",
          date: "30.00",
          percent: "Network Bonus",
          admin: "44",
          realease: "988",
        },
        {
          id: 1,
          mamberid: "19/08/2022",
          mamberdate: "21.00",
          rate: "9.00",
          date: "30.00",
          percent: "Network Bonus",
          admin: "44",
          realease: "988",
        },
        {
          id: 2,
          mamberid: "20/08/2022",
          mamberdate: "21.00",
          rate: "9.00",
          date: "30.00",
          percent: "Network Bonus",
          admin: "44",
          realease: "988",
        },
      ];
  return (
    <div>
              <div className="card overflow-auto mt-2 mb-3 bg-white ">
                <div className=" h-16  flex mt-4 items-center ml-6 justify-between ">
                  <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
                    <span className="font_f text-[16px]  m-0 font-semibold">
                      Passive Amount Cycle
                    </span>
                  </h2>
                  <div className="flex mx-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-4"
                      width="20"
                      height="20"
                      fill="#757575"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path d="M160.1,40A88.1,88.1,0,0,0,81.3,88.7h0a86.6,86.6,0,0,0-9.3,39,8.2,8.2,0,0,1-7.4,8.3,8,8,0,0,1-8.6-8,105,105,0,0,1,5.3-32.9,4,4,0,0,0-4.7-5.2A64,64,0,0,0,8,152c0,35.2,29.8,64,64.9,64H160a88,88,0,0,0,.1-176Zm31.5,123.7-33.9,34A8.5,8.5,0,0,1,152,200a8.3,8.3,0,0,1-5.7-2.3l-33.9-34a8,8,0,0,1,11.3-11.3L144,172.7V112a8,8,0,0,1,16,0v60.7l20.3-20.3a8,8,0,0,1,11.3,11.3Z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#757575"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path d="M156,128a28,28,0,1,1-28-28A28.1,28.1,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28.1,28.1,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28.1,28.1,0,0,0,208,100Z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mex_w">
                  <table className="table-fixed">
                    <thead className="border-t-[#00000033] border-b-[#9626cb] border-b-[5px] border-t-[1px] justify-between h-[52px] ">
                      <tr className="">
                        <th className="text-start font_f text-sm">Date</th>
                        <th className="text-start font_f text-sm ">Amount</th>
                        <th className="text-start font_f text-sm">Total</th>
                        <th className="text-start font_f text-sm">
                          Total Cycles
                        </th>
                        <th className="text-start font_f text-sm">
                          Total Cycles Left
                        </th>
                        <th className="text-start font_f text-sm">
                          Amount Left
                        </th>
                        <th className="text-start font_f text-sm">
                          Amount Relesed
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {passivetable.map((item) => {
                        return (
                          <tr
                            id={item.id}
                            className="border-[#00000033] border-y-[1px] justify-between h-[48px] hover:bg-[#0000000a]"
                          >
                            <td className="text-start font_f font-normal text-sm">
                              {item.mamberid}
                            </td>
                            <td className="font_f text-start  font-normal text-sm">
                              {item.mamberdate}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.rate}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.date}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.percent}
                            </td>
                            <td className="font_f text-start font-normal text-sm ">
                              {item.admin}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.realease}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="bg_table py-2 text-white text-[14px] text-center">
                  (10% will be automatically released to the Active Wallet on
                  1st of every month)
                </div>
              </div>
            </div>
  )
}

export default PassiveWallet