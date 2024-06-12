<script setup lang="ts">
import { usePageData } from 'vuepress/client';
import { dateFormat } from '../../../js/client/Time';
import ContentBox from '../../layouts/box/ContentBox.vue';
import CalendarIcon from '../../../imgs/calendar.vue';
import { GitPluginPageData } from '@vuepress/plugin-git';
import EditIcon from '../../../imgs/edit.vue';
import ToEditOnGitHubHelp from '../../../../../go-github-edit/ToEditOnGitHubHelp.vue';
const tiemF = (tiem: number) => dateFormat(new Date(tiem), (Y, M, D, h, m) => `${Y}-${M}-${D} ${h}:${m}`);
const page = usePageData<GitPluginPageData>();


</script>
<template>
    <ContentBox class="doc-box">
        <template #header>
            <div class="doc-header">
                <div class="h-left">
                    <CalendarIcon class="calender-i"></CalendarIcon>
                    <span class="calender-t">{{ tiemF(page.git.updatedTime) }}</span>
                </div>
                <ToEditOnGitHubHelp class="h-right">
                    <EditIcon class="edit-i"></EditIcon>
                </ToEditOnGitHubHelp>
            </div>
        </template>
        <template #default>
            <Content class="markdown-body" />
        </template>
    </ContentBox>
</template>
<style scoped>
.calender-t {
    font-size: 0.9rem;
    margin-left: 0.3rem;
}

.calender-i,.edit-i{
    width: 1rem;
    height: 1rem;
}
.doc-header{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
.h-left,.h-right{
    display: flex;
    align-items: center;
}

.markdown-body {
    width: 100%;
    background-color: var(--theme-c-bg);
}

/* 修改box变量 */
.doc-box {
    --content-box-header-padding: 0 1.5rem;
    --content-box-mian-padding: 1rem 1.5rem;
}

@media (max-width: 480px) {
    .doc-box {
        --content-box-header-padding: 0 1rem;
        --content-box-mian-padding: 1rem 1rem;
    }
}
</style>