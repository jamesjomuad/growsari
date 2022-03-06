/*
export function someMutation (state) {
}
*/

export function setUser(state, value) {
    state.user = value;
}

export function setToken(state, value) {
    state.token = value;
}

export function clear(state, value) {
    state.user = null;
    state.token = null;
}
