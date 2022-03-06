<template>
    <q-page
        padding
        class="bg-signup window-height window-width row justify-center items-center"
    >
        <div class="column q-pa-lg">
            <div class="row">
                <q-form
                    class="q-px-sm q-pt-xl q-pb-lg"
                    @submit.prevent="signup"
                >
                    <q-card class="shadow-24" style="width: 350px">
                        <q-card-section class="bg-blue">
                            <h4 class="text-h5 text-white q-my-md">Signup</h4>
                            <div
                                class="absolute-bottom-right q-pr-md"
                                style="transform: translateY(50%)"
                            >
                                <q-btn fab icon="account_circle" color="blue" />
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <q-input
                                square
                                clearable
                                v-model="formData.fullName"
                                type="text"
                                label="Full Name"
                                :rules="[(val) => !!val || 'Field is required']"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="badge" />
                                </template>
                            </q-input>
                            <q-input
                                square
                                clearable
                                v-model="formData.email"
                                type="email"
                                label="Email"
                                :rules="[(val) => !!val || 'Field is required']"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="email" />
                                </template>
                            </q-input>
                            <q-input
                                square
                                clearable
                                v-model="formData.username"
                                type="username"
                                label="Username"
                                :rules="[(val) => !!val || 'Field is required']"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="person" />
                                </template>
                            </q-input>
                            <q-input
                                square
                                clearable
                                v-model="formData.password"
                                type="password"
                                label="Password"
                                :rules="[(val) => !!val || 'Field is required']"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="lock" />
                                </template>
                            </q-input>
                        </q-card-section>
                        <q-card-actions class="q-px-lg">
                            <q-btn
                                unelevated
                                size="lg"
                                color="blue-8"
                                class="full-width text-white"
                                label="Sign Up"
                                type="submit"
                            />
                        </q-card-actions>
                        <q-card-section class="text-center q-pa-sm">
                            <p class="text-grey-6">
                                <a href="/signin">Sign In</a>
                            </p>
                        </q-card-section>
                    </q-card>
                </q-form>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: "PageSignup",

    data() {
        return {
            formData: {
                fullName: null,
                email: null,
                username: null,
                password: null,
            },
        };
    },

    methods: {
        async signup() {
            this.$api.post("/user", this.formData).then(({ data }) => {
                if (data) {
                    this.$q.notify({
                        message: `${data.username} successfully signup!`,
                        color: "info",
                    });
                    this.$router.push("/signin");
                }
            });
        },
    },
};
</script>

<style scoped>
.bg-signup {
    background-image: url("~assets/undraw_empty_cart_co35.svg");
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 30%;
}
</style>
