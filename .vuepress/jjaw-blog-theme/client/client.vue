<script lang="ts" setup>
import { usePageData } from 'vuepress/client';
import { computed } from 'vue';
import Main from './components/layouts/page/Main.vue';
import Header from './components/layouts/page/Header.vue';
import Footer from './components/layouts/page/Footer.vue';
import { layouts } from './client';

const pageData = usePageData();
const layout = computed(() => pageData.value.frontmatter.layout);


</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
            <component :is="layouts[layout || 'Layout']"></component>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>

<style scoped></style>