<script setup>
import {useField, useForm} from "vee-validate";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const {handleSubmit, handleReset} = useForm({
  validationSchema,
});

const email = useField("email", validationSchema);
const password = useField("password", validationSchema);

const onSubmit = handleSubmit(async (values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<template>
  <form @submit.prevent="onSubmit">
    <v-text-field
      label="E-mail"
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
    ></v-text-field>

    <v-text-field
      label="Password"
      type="password"
      v-model="password.value.value"
      :error-messages="password.errorMessage.value"
    ></v-text-field>
    <v-btn color="primary" type="submit">Submit</v-btn>
  </form>
</template>
