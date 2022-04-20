
const data = [
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  },
  {
    type: "Withdraw",
    fromAccount:"82819jd010381",
    toAccount:"7812jc8nK190w",
    amount:0.156381,
    time:"2022-01-01 17:50",
  }
]

export default function History() {

  return (
    <div className="px-5" >
      <div className="border border-[#DCDFE6] rounded  mt-8">
        <table className="min-w-full divide-y divide-gray-200  ">
          <thead className="text-left text-gray-500 bg-[#F2F6FC]">
            <tr>
              <th scope="col" className="px-2 py-3 tracking-wider font-light w-64">
                Type
              </th>
              <th scope="col" className="hidden sm:table-cell px-2 py-3 w-64 tracking-wider font-light">
                From Account
              </th>
              <th scope="col" className="hidden sm:table-cell px-2 py-3 w-64 tracking-wider font-light">
                To Account
              </th>
              <th scope="col" className="px-2 py-3 tracking-wider font-light w-64 ">
                Amount
              </th>
              <th scope="col" className="px-2 py-3 tracking-wider font-light w-64 ">
                Time
              </th>
              <th scope="col" className="hidden sm:table-cell px-2 py-3 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {data.map((his,index) => (
              <tr key={index} className="text-[#606266]" >
                <td className="px-2 py-2 whitespace-nowrap">
                  {
                    his.type == 'Deposit' ? 'Deposit' : 'Withdraw'
                  }
                </td>
                <td className="hidden sm:table-cell px-2 py-2 whitespace-nowrap">
                  {
                    his.fromAccount
                  }
                </td>
                <td className="hidden sm:table-cell px-2 py-2 whitespace-nowrap">
                  {
                    his.toAccount
                  }
                </td>
                <td className="px-2 py-2 whitespace-nowrap  ">
                  {his.amount}
                </td>
                <td className="px-2 py-2 whitespace-nowrap  ">
                  {his.time}
                </td>
                <td className="hidden sm:table-cell px-2 py-2 whitespace-nowrap  ">
                  {/* <Link href={his.type == 'Deposit' ? `/wallet/deposit/${his.currency?.toLowerCase()}` : `/wallet/withdraw/${his.currency?.toLowerCase()}`}> */}
                    <a className="text-[#2F88FF] cursor-pointer hover:underline">
                      Action
                    </a>
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}