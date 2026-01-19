<template>
  <header class="w-full py-4 px-6">
    <nav class="flex align-center justify-between gap-2 w-full">
      <headerLogo :name="user.name" :avatar="user.avatar" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import user from "@/data/user.json";
</script>
