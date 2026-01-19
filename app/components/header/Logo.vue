<script setup lang="ts">
defineProps<{
  name: string;
  avatar?: string;
}>();
</script>

<template>
  <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-90 transition">
    <Avatar class="h-8 w-8">
      <AvatarImage v-if="avatar" :src="avatar" :alt="name" />
      <AvatarFallback>
        {{ name.charAt(0).toUpperCase() }}
      </AvatarFallback>
    </Avatar>

    <span class="text-lg font-semibold tracking-tight">
      {{ name }}
    </span>
  </NuxtLink>
</template>
