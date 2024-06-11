<!-- 在github编辑链接组件 -->
<script setup lang="ts">
declare const _github_edit_helpPath_: string
import { usePageData } from "vuepress/client"
import { computed } from "vue";
import { github_edit } from "./github_edit_type"
let pageData = usePageData();
let github_edit_link = computed(() => {
    let github_edit = pageData.value["github_edit"] as github_edit | undefined;
    if (!github_edit?.filePathRelative) {
        return null;
    }
    let par = new URLSearchParams();
    par.append("edit", github_edit.filePathRelative);
    par.append("t", pageData.value.title);
    return _github_edit_helpPath_ + "?" + par.toString();
})

</script>
<template>
    <RouterLink :to="github_edit_link" v-if="github_edit_link">
        <slot></slot>
    </RouterLink>
</template>