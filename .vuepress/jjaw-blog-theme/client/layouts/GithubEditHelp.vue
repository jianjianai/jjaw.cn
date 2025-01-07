<script setup lang="ts">
import Body from '../components/layouts/page/ArticleBody.vue'
import { useGithubEditTitle, useGithubEditUrl } from "../../../go-github-edit/githubedit";
import ContentBox from '../components/layouts/box/ContentBox.vue';
import { ClientOnly } from 'vuepress/client';
import DocContent from '../components/content/doc/DocContent.vue';
import AsideMain from '../components/content/aside/AsideMain.vue';
const githubEditTitle = useGithubEditTitle();
const githubEditUrl = useGithubEditUrl();

</script>
<template>
    <Body>
        <div class="edit-on-github-main">
            <ContentBox class="edit-box">
                <template #header>
                    <span style="font-weight: bolder;">编辑文章</span>
                </template>
                <template #default>
                    <div class="edit-c">
                        <ClientOnly>
                            <h2 class="edit-title">{{ githubEditTitle }}</h2>
                            <a class="edit-go" :href="githubEditUrl">
                                <span>编辑此文章</span>
                                <span>&nbsp;></span>
                            </a>
                        </ClientOnly>
                    </div>
                </template>
            </ContentBox>
        </div>
    </Body>
    <Body>
        <template #default>
            <DocContent></DocContent>
        </template>
        <template #aside>
            <AsideMain></AsideMain>
        </template>
    </Body>
</template>
<style scoped>
.edit-c {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
}

.edit-box {
    min-width: min(100%, 40rem);
}

.edit-go:hover {
    background-color: var(--github-edit-help-edit-go-bgc-hover);
    color: var(--github-edit-help-edit-go-c-hover);
}

.edit-go {
    width: 8rem;
    height: 3rem;
    background-color: var(--github-edit-help-edit-go-bgc);
    color: var(--github-edit-help-edit-go-c);
    font-weight: bolder;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.edit-title {
    font-size: 1.2rem;
    font-weight: bolder;
    margin-bottom: 2rem;
}

.edit-on-github-main {
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>