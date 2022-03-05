export function add({ commit }, payload) {
    commit("addItem", payload);
}

export function clear({ commit }) {
    commit("clear");
}
