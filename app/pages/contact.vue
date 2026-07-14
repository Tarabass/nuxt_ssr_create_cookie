<script lang="ts" setup>
const cookie = useCookie('myCookie')
const { data, error } = await useFetch('/api/contactCall')
</script>

<template>
  <div>
    Data:{{ data }}<br />
    Error:{{ error }}<br />
    Cookie:{{ cookie }}<br />
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>

</style>