<script setup lang="ts">
import { toRefs } from 'vue';
import { useMainState } from '../../../js/composables/useMainState';

const mainState = useMainState();
const { isNavOpen, isAsideOpen } = toRefs(mainState);
const closeNavAndAside = ()=>{isNavOpen.value=false;isAsideOpen.value=false}

</script>
<template>
    <div class="body">
        <nav v-if="$slots.nav" class="nav" @click="closeNavAndAside()" :class="{ open: isNavOpen }">
            <slot name="nav"></slot>
        </nav>
        <main v-if="$slots.default" class="main">
            <slot name="default"></slot>
        </main>
        <aside v-if="$slots.aside" class="aside" @click="closeNavAndAside()" :class="{ open: isAsideOpen }">
            <slot name="aside"></slot>
        </aside>
    </div>
</template>

<style scoped>
@media (max-width: 1240px) {
    .body:has(.nav) .aside {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        /* transform:translateX(calc(var(--main-aside-width) + 1rem)); */
        transform:translateX(calc(0rem - 100vw - 1rem));
        /* display: none; */
        /* 布局 ./box/StickyContentBox.vue */
        --header-blank-height: 0rem;
    }
}
@media (max-width: 960px) {
    .body .nav {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        transform:translateX(calc(0rem - var(--main-nav-width) - 1rem));
        /* 布局 ./box/StickyContentBox.vue */
        --header-blank-height: 0rem;
    }
    .body .aside {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        /* transform:translateX(calc(var(--main-aside-width) + 1rem)); */
        transform:translateX(calc(0rem - 100vw - 1rem));
        /* display: none; */
        /* 布局 ./box/StickyContentBox.vue */
        --header-blank-height: 0rem;
    }
}
.body .nav.open {
    transform:none;
    /* display:block; */
    z-index: 101;
}
.body .aside.open {
    transform:none;
    /* display:block; */
    z-index: 101;
}

.nav {
    width: var(--main-nav-width);
    /* background-color: rgba(137, 43, 226, 0.051); */
    margin-right: 1rem;
    transition: transform 0.5s;

    /* 布局 ./box/StickyContentBox.vue */
    --header-blank-height: var(--mobile-menu-height);
}

.aside {
    width: var(--main-aside-width);
    /* background-color: rgba(0, 0, 255, 0.032); */
    margin-left: 1rem;
    transition: transform 0.5s;
}

.main {
    flex: 1;
    min-width: 0;
    /* overflow: hidden; */
    /* max-width: 960px; */
}

.body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
}
</style>