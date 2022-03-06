/*
export function someMutation (state) {
}
*/

export function setUser(state, value) {
    state.id = value.id;
    state.fullName = value.fullName;
    state.email = value.email;
    state.username = value.username;
}
