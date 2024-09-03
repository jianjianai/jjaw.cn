<script setup>
import Giscus from '@giscus/vue';
import { config } from '@temp/giscus-comment/config'
import { useRoute } from 'vue-router';

const router = useRoute();

</script>
<template>
    <Giscus v-bind="config" :key="router.path"/>
</template>