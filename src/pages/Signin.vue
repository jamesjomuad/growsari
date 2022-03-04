<template>
    <q-page
        padding
        class="bg-blue window-height window-width row justify-center items-center"
    >
        <!-- content -->
        <div class="column">
            <div class="row">
                <h5 class="text-h5 text-white q-my-md">Grow Sari</h5>
            </div>
            <div class="row">
                <q-card
                    bordered
                    class="q-pa-lg shadow-24"
                    style="width: 350px"
                    key="signin"
                >
                    <q-form class="q-gutter-md" @submit.prevent="signin">
                        <q-card-section>
                            <q-input
                                square
                                filled
                                clearable
                                v-model="username"
                                type="txt"
                                label="Username"
                                :rules="[(val) => !!val || 'Field is required']"
                            />
                            <q-input
                                square
                                filled
                                clearable
                                v-model="password"
                                type="password"
                                label="Password"
                                :rules="[(val) => !!val || 'Field is required']"
                            />
                        </q-card-section>
                        <q-card-actions class="q-px-md">
                            <q-btn
                                unelevated
                                color="light-blue-7"
                                size="lg"
                                class="full-width"
                                label="Login"
                                type="submit"
                            />
                        </q-card-actions>
                        <q-card-section class="text-center q-pa-none">
                            <p class="text-grey-6 q-mt-sm">Not registered?</p>
                            <q-separator />
                            <p class="text-grey-6 q-mt-sm">
                                <a href="/signup">Create an Account</a>
                            </p>
                        </q-card-section>
                    </q-form>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "PageSignin",
    data() {
        return {
            username: "username",
            password: "password",
        };
    },

    methods: {
        ...mapActions("auth", ["signinUser"]),

        async signin() {
            this.signinUser({
                username: this.username,
                password: this.password,
            });
        },
    },
};
</script>
