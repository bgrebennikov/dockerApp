<script setup lang="ts">


import {HomeService} from "@/api/HomeService";
import {ref} from "vue";
import type {HomeResponseModel} from "@/api/data/response/HomeResponseModel";
import type {UsersResponseModel} from "@/api/data/response/UsersResponseModel";

const service = new HomeService();

const contentResponse = ref<HomeResponseModel>();
const usersResponse = ref<UsersResponseModel[]>();


service.getHomeContent().then((response) => {
  contentResponse.value = response
});

service.getUsers().then((response) => {
  usersResponse.value = response;
})


</script>

<template>
  <main>
    <h1>Home Page</h1>
    <p>{{ contentResponse && contentResponse.content }}</p>
    <br>
    <h1>Users List</h1>
    <br>
    <div v-for="user in usersResponse" :key="user.first_name">
      <p>First name: {{user.first_name}}</p>
      <p>Last name: {{user.last_name}}</p>
      <br>
    </div>
  </main>
</template>
