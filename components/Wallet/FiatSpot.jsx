import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useWallets from '../../hooks/useWallets';
import { FILTERED_WALLETS_STATE } from '../../states/wallet-state';
import FormattedNumber from '../FormattedNumber';

const data = [
  {
    title: "BTC",
    img: "/Icon/Bitcoin (BTC).svg",
    value: 0.18,
    total: 1000,
    available: 1000,
    order: 0
  },
  {
    title: "BTC",
    img: "/Icon/Bitcoin (BTC).svg",
    value: 0.18,
    total: 1000,
    available: 1000,
    order: 0
  },
  {
    title: "BTC",
    img: "/Icon/Bitcoin (BTC).svg",
    value: 0.18,
    total: 1000,
    available: 1000,
    order: 0
  },
  {
    title: "BTC",
    img: "/Icon/Bitcoin (BTC).svg",
    value: 0.18,
    total: 1000,
    available: 1000,
    order: 0
  },
  {
    title: "BTC",
    img: "/Icon/Bitcoin (BTC).svg",
    value: 0.18,
    total: 1000,
    available: 1000,
    order: 0
  },
  {
    title: "BTC",
    img: "/Icon/Bitcoin (BTC).svg",
    value: 0.18,
    total: 1000,
    available: 1000,
    order: 0
  }
]

const ButtonWallet = ({ text }) => {
  return (
    <button className='text-sm rounded border border-[#2F88FF] bg-white text-[#2F88FF] hover:bg-[#2F88FF] hover:text-white py-2 w-[139px] '>
      {text}
    </button>
  )
}

const mapTable = ["total", "amount", "locked"]

export default function FiatSpot() {

  const {loading, getBalances, ...wallets } = useWallets()
  const {stats, spot} = useRecoilValue(FILTERED_WALLETS_STATE)
  useEffect(async ()=>{
  getBalances()
  
  },[])
  console.log(wallets)
  return (
    <div className="sm:px-5" >
      <div className='sm:bg-[#D9ECFF] px-5 py-6 flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between sm:items-center rounded my-8' >
        <div className='ml-[2px] flex flex-col gap-2 sm:gap-8 ' >
          <div className='flex flex-wrap gap-2 sm:gap-0 items-center' >
            <span className='text-[#909399] mr-8' >{stats.title}</span>
            <div className='text-sm text-[#909399]' >
              <span><VisibilityIcon /></span>
              <span className='ml-2' >Show</span>
            </div>
          </div>
          <div className='flex items-center'>
            <FormattedNumber value={stats.value} suffix=" USDT" className="inline-block text-[#2F88FF] text-2xl font-semibold " />
            <span className="ml-2 mr-1 text-[#909399]">≈</span>
            <FormattedNumber value={stats.value} currency="USD" className="inline-block text-[#909399]" options={{ minimumFractionDigits: 2 }} />
          </div>
        </div>
        <div className='flex gap-3' >
          <ButtonWallet text="Withdraw" />
          <ButtonWallet text="Deposit" />
        </div>
      </div>
      <div className='border border-[#DCDFE6] rounded' >
        <table className="min-w-full divide-y divide-gray-200  bg-[#F2F6FC]">
          <thead className="text-left text-gray-500 ">
            <tr>
              <th scope="col" className="px-6 py-3 tracking-wider font-light">
                Coin
              </th>
              <th scope="col" className="px-6 py-3 tracking-wider w-80 text-right font-light">
                Total
              </th>
              <th scope="col" className="hidden sm:table-cell c px-6 py-3 tracking-wider w-80 text-right font-light">
                Available
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3 tracking-wider w-80 text-right font-light">
                Locked
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 pr-[86px] py-3 tracking-wider w-80 text-right font-light">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {spot.map((coin, index) =>
              <tr key={index} className="h-[85px]" >
                <td className="px-6 py-2 whitespace-nowrap">
                  <a href="#">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={coin.get_infos?.images}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <span className="text-primary mr-2 font-medium uppercase">
                          {coin.currency}
                        </span>
                        <span className="flex text-gray-500 text-xs ">
                        <span className="mr-1 text-[#909399]">≈</span>
                          <FormattedNumber value={coin.tousdt} currency="USD" options={{ minimumFractionDigits: 2 }} />
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                {mapTable.map((k, i) => (
                  <td key={i} className={clsx("px-6 py-2 whitespace-nowrap text-right", coin[k] <= 0 ? "text-gray-400" : "text-primary-dark",k!="total"?"hidden sm:table-cell":null)}>
                    <FormattedNumber value={coin[k]} options={{ minimumFractionDigits: 8 }} />
                  </td>
                ))}
                <td className=" hidden sm:table-cell px-6 py-2 whitespace-nowrap text-right space-x-3">
                  <a className="text-[#2F88FF] hover:underline cursor-pointer">
                    Deposit
                  </a>
                  <a className="text-[#2F88FF] hover:underline cursor-pointer">
                    Withdraw
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}