<template>
  <header>
    <Navbar v-if="$router.currentRoute.value.fullPath != '/'" />
    <div :class="$router.currentRoute.value.fullPath != '/'?'pt-[65px]':''" class="min-h-screen bg-gray-700">
        <slot />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
