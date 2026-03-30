<script setup lang="ts">
import { reactive } from "vue";
import { registerUser } from "../services/auth.service";

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const handleSubmit = async () => {
  const data = await registerUser(form);
  console.log(data);
};
</script>

<template>
  <div>
    <h2>Register</h2>

    <input v-model="form.name" placeholder="Name" />
    <input v-model="form.email" placeholder="Email" />
    <input v-model="form.password" placeholder="Password" />

    <button @click="handleSubmit">Register</button>
  </div>
</template>