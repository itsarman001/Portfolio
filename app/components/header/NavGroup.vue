<template>
  <div>
    <nav>
      <ul class="flex gap-4">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="hover:text-slate-200"
        >
          <a :href="item.path">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from "@/types/types";

const props = defineProps<{
  navItems: NavItem[];
}>();
</script>
