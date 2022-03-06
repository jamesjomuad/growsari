import { Notify } from "quasar";
import { api } from "boot/axios";
import { LocalStorage } from "quasar";

export async function signinUser({ commit }, payload) {
    try {
        const { data } = await api.post("/auth", payload);
        if (data.token) {
            commit("setUser", data);
            commit("setToken", data.token);
            LocalStorage.set("jwt", data.token);
            Notify.create({
                message: `Welcome ${data.username}`,
                color: "orange",
            });
            this.$router.push("/");
        }
    } catch (error) {
        Notify.create({
            message: "Try again!",
            color: "negative",
        });
    }
}

export function destroy({ commit }, payload) {
    LocalStorage.remove("jwt");
    commit("clear");
}
