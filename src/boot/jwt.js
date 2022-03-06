import { boot } from "quasar/wrappers";
// import jwt from "jsonwebtoken";
const secretKey = "ErVGY39nT52NzHT";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
    app.config.globalProperties.$jwt = jwt;
});
