import { api } from "boot/axios";

export async function get({ commit }, payload) {
    try {
        const { data } = await api.get("/user", payload);
        commit("setUser", data);
    } catch (error) {
        console.error(error);
    }
}
