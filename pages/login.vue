<script lang="ts" setup>
import * as yup from "yup";
import useValidatedForm from "@/composables/useValidationForm";
import {useAuthStore} from "@/stores/useAuthStore";

interface User {
  email: string;
  password: string;
}

const data: User = {
  email: "",
  password: "",
};

const rules = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const {form, errors, handleSubmit} = useValidatedForm(data, rules);
const auth = useAuthStore();

const onSubmit = handleSubmit(async (body) => {
  const {error} = await auth.login(body);

  // to display errors from api call
  console.log(error);
});
</script>

<template>
  <v-container fluid fill-height>
    <v-row vertical-align="center">
      <v-col lg="6" sm="12" align-self="center" offset-lg="3">
        <v-card class="elevation-12">
          <v-toolbar dark color="success">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <form @submit.prevent="onSubmit">
              <form-input
                v-model="form.email"
                name="email"
                :errors="errors.email"
              >
              </form-input>
              <form-input
                v-model="form.password"
                name="password"
                type="password"
                :errors="errors.password"
              >
              </form-input>
              <v-btn class="mt-4" color="primary" type="submit">Submit</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
