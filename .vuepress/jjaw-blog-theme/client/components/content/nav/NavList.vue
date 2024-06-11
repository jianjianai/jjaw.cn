<!-- 导航栏 -->
<script setup lang="ts">
import NavItemList from '../../../../../nav-data-page/NavItemList.vue';
import StickyContentBox from '../../layouts/box/StickyContentBox.vue';


</script>
<template>
    <StickyContentBox>
        <template #header>
            <span style="font-weight: bolder;">文章导航</span>
        </template>
        <template #default>
            <NavItemList class="nav-toc"></NavItemList>
        </template>
    </StickyContentBox>
</template>
<style>
.nav-toc > ul{
    list-style: none;
}
.nav-toc > ul > li > a{
    font-weight: bolder;
    display: block;
    margin: 0.5rem 0;
    border-bottom: 1px solid var(--nav-toc-line-c);
}
.nav-toc > ul ul{
    margin-left: 1.5rem;
}
.nav-toc ul{
    margin: 0;
    padding: 0;
    /* background-color: rgba(0, 47, 255, 0.069); */
}
.nav-toc > ul > li > ul > li > a{
    display: block;
    margin-bottom: 0.3rem;
}
.nav-toc a:hover{
    color: var(--nav-toc-active-c);
}
.nav-toc .active{
    color: var(--nav-toc-active-c);
}
.nav-toc > ul > li:has(.active) > a{
    color: var(--nav-toc-active-c);
}
</style>