const state = {
  funds: 10000,
  stocks: [],
};
const mutations = {
  BUY_STOCKS(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((element) => (element.id = stockId));
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity,
      });
    }
    state.funds -= stockPrice * quantity;
    console.log(state, "all state value afte buy");
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((element) => element.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  },
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find((element) => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        price: record.price,
        name: record.name,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
