import { atom, selector } from "recoil";


export const WALLETS_SPOT_STATE = atom({
  key: 'wallets/get',
  default: {
      spot: [],
      loading: true,
  },
});

export const FILTERED_WALLETS_STATE = selector({
  key: 'filtered_wallets/get',
  get: ({ get }) => {
      const { spot } = get(WALLETS_SPOT_STATE);
      // const { hideSmallBalances, keyword } = get(WALLETS_FILTER_STATE)
      let spotWallets = spot.map(v => ({
          currency: v.currency,
          tousdt: (v.amount + v.locked) * v.get_infos?.tousdt,
          total: v.amount + v.locked,
          amount: v.amount,
          locked: v.locked,
          get_infos: v.get_infos,
      }));
      const spotTotal = spotWallets.reduce((p, c) => p + c?.tousdt, 0)
      // if (hideSmallBalances) {
      //     spotWallets = spotWallets.filter(w => w?.tousdt > 0)
      // }
      // if (keyword) {
      //     spotWallets = spotWallets.filter(w => new RegExp(`^${keyword}`, 'i').test(w.currency))
      // }
      spotWallets.sort((a, b) => b.tousdt - a.tousdt )
      return {
          spot: spotWallets,
          stats: 
          // {
              // spot: [
                  { title: 'Total Balance', value: spotTotal },
              // ]
          // }
      };
  },
});

export const hideBalance = atom({
  key:"hideBalance",
  default: false
})

