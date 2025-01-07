<script setup lang="ts">
import Body from '../components/layouts/page/ArticleBody.vue'
import TagListMain from '../components/home-page/list/TagListMain.vue';
import HNavMain from '../components/home-page/nav/HNavMain.vue';


</script>
<template>
    <Body>
        <template #default>
            <TagListMain></TagListMain>
        </template>
        <template #nav>
            <HNavMain></HNavMain>
        </template>
    </Body>
</template>
<style scoped></style>