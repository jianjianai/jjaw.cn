<script setup lang="ts">
import type { NavPageItem } from './useNavPageUrl.ts'
import NavUL from './NavUL.vue'
import { RouteLink, useRoute } from 'vuepress/client';

const route = useRoute();
const props = defineProps<{
    item:NavPageItem[]
}>();

</script>
<template>
    <ul>
        <li v-for="item of props.item">
            <RouteLink :to="item.link?item.link:'#'" :class="{active:route.path==item.link}">{{ item.title }}</RouteLink>
            <NavUL v-if="item.items" :item="item.items"></NavUL>
        </li>
    </ul>
</template>