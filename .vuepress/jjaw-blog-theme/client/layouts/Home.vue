<script setup lang="ts">
import Body from '../components/layouts/page/ArticleBody.vue'
import ListMain from '../components/home-page/list/StarListMain.vue';
import HNavMain from '../components/home-page/nav/HNavMain.vue';

</script>
<template>

    <Body>
        <template #default>
            <ListMain></ListMain>
        </template>
        <template #nav>
            <HNavMain></HNavMain>
        </template>
    </Body>
</template>
<style scoped></style>