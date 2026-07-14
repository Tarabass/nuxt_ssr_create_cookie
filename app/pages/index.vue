<script lang="ts" setup>
const cookie = useCookie('myCookie')
const { data, error, execute } = await useFetch('/api/indexCall', {
  immediate: false,
})
</script>

<template>
  <div>
    Data:{{ data }}<br />
    Error:{{ error }}<br />
    Cookie:{{ cookie }}<br />
    <button @click="execute()">Fetch Data</button><br />
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>

</style>