<script lang="ts" setup>
const routes = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Login",
    to: "/login",
  },
  {
    name: "Register",
    to: "/register",
  },
  {
    name: "Guest Only",
    to: "/guest-only",
  },
  {
    name: "Auth Only",
    to: "/auth-only",
  },
];
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <v-btn
            v-for="(route, idx) in routes"
            :key="idx"
            :to="route.to"
            color="indigo darken-3"
            class="mr-4"
          >
            {{ route.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
