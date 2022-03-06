import { api } from "boot/axios";

export async function get({ commit }) {
    try {
        const { data } = await api.get("/user");
        commit("setUser", data);
    } catch (error) {
        console.error(error);
    }
}
