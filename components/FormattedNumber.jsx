import { numberFormatter } from '../utils/number-formatter'
import clsx from 'clsx'
// import {WALLETS_FILTER_STATE} from "../states/wallet-state";
// import {useRecoilState} from "recoil";

// export interface FormattedNumberProps {
//     value: number
//     direction?: '' | 'increase' | 'decrease'
//     className?: string
//     currency?: string | boolean
//     prefix?: string
//     suffix?: string
//     options?: any
// }

export default function FormattedNumber({
    value,
    className,
    direction = '',
    currency = false,
    options = null,
    prefix = '',
    suffix = '',
}) {
    // const [filter, setFilter] = useRecoilState(WALLETS_FILTER_STATE);

    const otp = currency
        ? {
              style: 'currency',
              currency: currency,
              ...options,
          }
        : options || {}

    return (
        <div
            className={clsx(
                className,
                { 'text-red-500': direction === 'decrease' },
                { 'text-green-500': direction === 'increase' },
            )}
        >
            {prefix}
            {numberFormatter(value, 'en-US', otp)}
            {suffix}
        </div>
    )
}
