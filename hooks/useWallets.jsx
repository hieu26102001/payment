import jsCookie from "js-cookie";
import { useRecoilState, useRecoilValue } from "recoil";
import { FILTERED_WALLETS_STATE, WALLETS_SPOT_STATE } from "../states/wallet-state";


export default function useWallets() {
  const [walletsState, setWalletsState] = useRecoilState(WALLETS_SPOT_STATE)
  const { spot, stats } = useRecoilValue(FILTERED_WALLETS_STATE)
  const getBalances = async () => {
    var _header = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
  // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NThkNTM5MC02NzcyLTQwNTUtYWEyMi02Yjg2NGMxYzlhYzUiLCJqdGkiOiI0MzAxNGQxZjA3MTcyM2UxNjRmMjlmNTZlMzAyZThjZDZiNGFiZjczMjJjZDUxZjRmNDNlMDk4MjEwMmM2M2YwOWQwMjBjZTY1OTdjYzNkNCIsImlhdCI6MTY0ODMxMTYyMCwibmJmIjoxNjQ4MzExNjIwLCJleHAiOjE2NjQyMDkyMjAsInN1YiI6IjEiLCJzY29wZXMiOlsiKiJdfQ.WBs-XOHHAvvrglG8qynoO1KzE3b-9j86nTUZfV_RouA7xhBApMQKoGcJTC8SjkMdI16uk-CEds1Ri3uIFe67t5s-vQF81VIm-9KmgzW6oOhXXFC6o8Yybe0uqsdhXFCyvWz6dRZMroT-13vIv9vf0COjWIFJaKpD_S5W3zLIrcDzrOHF1ZT7hHztQRnFvo8X_4EhXB6Vpo9TkfXE5sKAZBQx8vgLOXQXdypG5Q38CbHErCOrpl43joSEkmeI4OR_oeIGjvg7jpaORv3Ns1AoDnkJTLGOEw-Xbqipd01XB_mHHAOXSjwKDKkkMSiwll6shxCcjkrRnx8X641kzwJLuvbny3UexCDj3nwb9nfku1rcPjc2FVe0gd3lsC8gIvjoFpbKMxc1Mrz1EBU5jdCvPGUwg5B-EC_2RmJnwmfEGM2T42cdDE6LUUBCOFxwz5jz9eGmDSlaUeB18n-YraOvd4oe1QFF6ANg2p3inQ7DBz7SAqz9-fzayYt0tp5-mT-ie5JhPrQTiPThmoX_KJ4T9wmzqRON1enZYLwS2w_9n-MFJ6uEpAX5LIUOM1H955IGDiRrwKZfhi96_A-H4RFnjIfQK_pLjOxd_q6vEHDMrqIYXPEicGDNQmMOdbnYLJIIN_m3YEfIX4VKSMzDWZb2IB0xI6AsWmg5eWm8bM_hvf4"
  let token = jsCookie.get("access_token")
  // console.log(token)
  _header.set('Authorization', `Bearer ${token}`)
    const response = await fetch("https://pay.fmcpay.com/api/wallet/getBalances",{method:'POST',headers:_header})
    const { result, error, mes } = await response.json();
    // const { result, error, mes } = await data
    // console.log(result,error,mes)
    if (!result) return "Khong fetch duoc";
    setWalletsState(prev => ({
      ...prev,
      spot: result,
      loading: false,
    }))
  }

  return({
    loading: walletsState.loading,
    setWalletsState,
    getBalances,
    spot,
    stats
  })
}