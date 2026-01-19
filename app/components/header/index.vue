<template>
  <header class="w-full py-4 px-6">
    <nav class="flex align-center justify-between gap-2 w-full">
      <headerLogo :name="user.name" :avatar="user.avatar" />
      <headerNavGroup :navItems="navItems"/>
    </nav>
  </header>
</template>

<script setup lang="ts">
import user from "@/data/user.json";
import type { NavItem } from "@/types/types";

const navItems: NavItem[] = [
  { label: "About", path: "/about" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

</script>
