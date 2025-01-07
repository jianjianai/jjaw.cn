<script setup lang="ts">
import { toRefs } from 'vue';
import { useMainState } from '../../../js/composables/useMainState';

const mainState = useMainState();
const { isNavOpen, isAsideOpen } = toRefs(mainState);

</script>
<template>
    <div class="app-main">
        <Transition name="fade">
            <div v-if="isNavOpen || isAsideOpen" class="shade" @click="()=>{isNavOpen=false;isAsideOpen=false;}"></div>            
        </Transition>
        <div class="layout">
            <header v-if="$slots.header" class="header">
                <slot name="header"></slot>
            </header>
            <!-- 显示隐藏导航栏或者侧边栏的，只有导航栏或者侧边栏收起时显示 -->
            <nav class="shwo-menu">
                <div class="shwo-menu-left" :class="{ open: isNavOpen }" @click="isNavOpen = !isNavOpen">
                    <span class="menu-left-n">
                        <div><</div>
                    </span>
                    <span>菜单</span>
                </div>
                <div class="shwo-menu-right" :class="{ open: isAsideOpen }" @click="isAsideOpen = !isAsideOpen">
                    <span>页面导航</span>
                    <span class="menu-right-n">
                        <div>></div>
                    </span>
                </div>
            </nav>
            <slot name="default"></slot>
            <footer v-if="$slots.footer" class="footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.shade{
    position: fixed;
    background-color: var(--main-mobile-shade-bgc);
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
}

.shwo-menu-left.open .menu-left-n>div {
    transform: rotate(-90deg);
}

.shwo-menu-right.open .menu-right-n>div {
    transform: rotate(90deg);
}

.menu-right-n>div,
.menu-left-n>div {
    display: inline-block;
    font-weight: bolder;
    transition: transform 0.5s;
}

.menu-left-n {
    margin-right: 0.5rem;
}

.menu-right-n {
    margin-left: 0.5rem;
}

.shwo-menu-left,
.shwo-menu-right {
    cursor: default;
    color: var(--mobile-menu-text-c);
    font-size: 0.8rem;
    opacity: 0;
}
@media (max-width: 1240px) {
    .layout:has(.body .aside) .shwo-menu-right {
        opacity: 1;
        cursor: pointer;
    }
    /* .layout:has(.body .nav):has(.body .aside) { */
        /* 布局 ./box/StickyContentBox.vue */
        /* --header-blank-height: var(--mobile-menu-height); */
        /* --header-blank-height: 0rem; */
    /* } */

    .layout:has(.body .nav):has(.body .aside) .header {
        margin-bottom: 0rem;
    }

    .layout:has(.body .nav):has(.body .aside) .shwo-menu {
        display: flex;
    }

    .layout:has(.body .nav):has(.body .aside) .header {
        position: relative;
    }
}

@media (max-width: 960px) {
    .layout:has(.body .nav) .shwo-menu-left,
    .layout:has(.body .aside) .shwo-menu-right {
        opacity: 1;
        cursor: pointer;
    }
    /* .layout:has(.body .nav),
    .layout:has(.body .aside) { */
        /* 布局 ./box/StickyContentBox.vue */
        /* --header-blank-height: var(--mobile-menu-height); */
        /* --header-blank-height: 0rem; */
    /* } */

    .layout:has(.body .nav) .header,
    .layout:has(.body .aside) .header {
        margin-bottom: 0rem;
    }

    .layout:has(.body .nav) .shwo-menu,
    .layout:has(.body .aside) .shwo-menu {
        display: flex;
    }

    .layout:has(.body .nav) .header,
    .layout:has(.body .aside) .header {
        position: unset;
    }
}

.shwo-menu {
    display: none;
    top: 0;
    position: sticky;
    width: 100%;
    height: var(--mobile-menu-height);
    margin-bottom: 1rem;
    background-color: var(--theme-c-bg);
    border-bottom: 1px solid var(--theme-c-brc);
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    z-index: 90;
}

@media (max-width: 480px) {
    div.layout {
        padding: 0;
    }
}

.app-main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.layout {
    /* max-width: var(--mian-max-width); */
    width: min(100%, var(--layout-max-width));
    padding: 0 1rem;
    transition: width 0.25s;
    /* overflow: hidden; */
}

/* nav 适配 */
.layout:has(.body) {
    --layout-max-width: var(--main-max-width-no-nav);
}

.layout:has(.body .nav):has(.body .aside) {
    --layout-max-width: var(--mian-max-width);
}

.main {
    flex: 1;
    min-width: 0;
    /* overflow: hidden; */
}

.header {
    height: var(--header-height);
    position: sticky;
    top: 0px;
    background-color: var(--theme-c-bg);
    z-index: 90;
    margin-bottom: 1rem;
}
</style>