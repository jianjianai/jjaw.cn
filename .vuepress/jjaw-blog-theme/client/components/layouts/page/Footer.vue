<!-- 页面尾 -->
<script setup lang="ts">

</script>
<template>
    <div class="footer">
        <div>
            <img src="../../../imgs/logo.svg" style="height: 2rem;" />
        </div>
        <div><RouterLink to="/">神奇小破站 jjaw.cn</RouterLink></div>
        <div>图标真是随手画的</div>
        <a href="https://icp.gov.moe/?keyword=20250060" target="_blank">萌ICP备20250060号</a>
    </div>
</template>
<style scoped>
.footer a:hover{
    text-decoration: underline;
}
.footer > div{
    margin: 0.5rem 1rem;
}
.footer *{
    color: var(--color-opacity);
    text-decoration: none;
}
div.footer{
    margin-top: 5rem;
    height: 5rem;
    border-top: 1px solid var(--footer-line-c);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
}
</style>
