<script setup lang="ts">
import { reactive } from "vue";
import { loginUser } from "../services/auth.service";

const form = reactive({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  const data = await loginUser(form);

  localStorage.setItem("token", data.token);

  console.log(data);
};
</script>

<template>
  <div>
    <h2>Login</h2>

    <input v-model="form.email" placeholder="Email" />
    <input v-model="form.password" placeholder="Password" />

    <button @click="handleSubmit">Login</button>
  </div>
</template>