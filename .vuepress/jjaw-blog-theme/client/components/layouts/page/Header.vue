<!-- 页面头 -->
<script setup lang="ts">
import { RouteLink } from 'vuepress/client';



</script>
<template>
    <div class="header">
        <RouteLink class="left" :to="'/'">
            <img src="../../../imgs/logo.svg" alt="logo" class="logo">
            <span class="logo-f">神奇小破站</span>
        </RouteLink>
        <div class="rigt">
            
        </div>
    </div>
</template>
<style scoped>
.left{
    height: 100%;
    display: flex;
    align-items: center;
}
.logo{
    height: 2rem;
    margin-right: 0.3rem;
    margin-left: 0.5rem;
}
.logo-f{
    font-size: 1.2rem;
    font-weight: bolder;
    color: var(--theme-c-logo);
}
.header{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid var(--theme-c-brc);
}
</style>