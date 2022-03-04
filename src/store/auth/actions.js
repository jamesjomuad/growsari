import { Notify } from "quasar";
import { api } from "boot/axios";
import { LocalStorage } from "quasar";

export async function signinUser({ commit }, payload) {
    const { data } = await api.post("/auth", payload);

    if (data) {
        commit("setUser", data);
        commit("setToken", data.token);
        LocalStorage.set("jwt", data.token);
        Notify.create({
            message: `Welcome to the Store ${data.username}`,
            color: "orange",
        });
        this.$router.push("/");
    }
}
