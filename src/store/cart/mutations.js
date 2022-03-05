export function addItem(state, value) {
    state.items.push(value);
}

export function clear(state, value) {
    state.items = [];
}
