import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { LocalStorage } from "quasar";
import auth from "./auth";
import cart from "./cart";
import user from "./user";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
    const Store = createStore({
        modules: {
            auth,
            cart,
            user,
        },

        plugins: [
            createPersistedState({
                paths: ["data"],
                filter({ type }) {
                    return type.startsWith("shared");
                },
                storage: {
                    getItem(key) {
                        return JSON.parse(LocalStorage.getItem(key));
                    },
                    setItem(key, value) {
                        LocalStorage.set(key, JSON.stringify(value));
                    },
                    removeItem(key) {
                        LocalStorage.remove(key);
                    },
                },
            }),
        ],

        // enable strict mode (adds overhead!)
        // for dev mode and --debug builds only
        strict: process.env.DEBUGGING,
    });

    return Store;
});
