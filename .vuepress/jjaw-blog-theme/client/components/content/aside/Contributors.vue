<!-- 目录 -->
<script setup lang="ts">
import { useArticleGitHubInfo } from '../../../js/composables/useArticleGitHubInfo';
import ContentBox from '../../layouts/box/ContentBox.vue';
import HistoryIcon from '../../../imgs/history.vue';
import ToEditOnGitHubHelp from '../../../../../go-github-edit/ToEditOnGitHubHelp.vue';
const articleGitHubInfo = useArticleGitHubInfo();
function githubAvatarUrlAddSize(url:URL):string{
    const imgUrl = new URL(url);
    imgUrl.searchParams.append("s","64");
    return imgUrl.toString();
}
</script>
<template>
    <ContentBox class="aside-befr">
        <template #header>
            <span style="font-weight: bolder;">文章贡献者</span>
        </template>
        <template #default>
            <div class="contributors">
                <a v-for="userinfo of articleGitHubInfo.gitHubContributors" class="contributor" :href="userinfo.githubUrl" :key="userinfo.email" target="_blank">
                    <div class="contributor-img">
                        <img class="contributor-img-img" v-if="userinfo.avatarUrl" :src="githubAvatarUrlAddSize(userinfo.avatarUrl)" :alt="userinfo.name">
                        <div  class="contributor-img-div" v-else>{{ userinfo.name.charAt(0) }}</div>
                    </div>
                    <div class="contributor-info">
                        <div class="c-line1">
                            <span class="c-l1-name">{{ userinfo.name }}</span>
                            <span class="c-l1-email">{{ userinfo.email }}</span>
                        </div>
                        <div class="c-line2">
                            <HistoryIcon class="c-l2-img" ></HistoryIcon>
                            <span class="c-l2-commits">{{ userinfo.commits }}次提交</span>
                        </div>
                    </div>
                </a>
                <ToEditOnGitHubHelp class="to-edit">+ 成为贡献者</ToEditOnGitHubHelp>
            </div>
        </template>
    </ContentBox>
</template>
<style scoped>
.to-edit:hover{
    text-decoration: underline;
}
.to-edit{
    font-size: 0.8rem;
    color: var(--contributor-edit-link-c);
}
.c-line2{
    display: flex;
    align-items: center;
}
.c-l2-img{
    width: 1rem;
    height: 1rem;
    display: inline;
    margin-right: 0.1rem;
    color: var(--contributor-text-commits-c);
}
.c-l2-commits{
    color: var(--contributor-text-commits-c);
    font-size: 0.8rem;
}
.c-l1-email{
    font-size: 0.8rem;
    color: var(--contributor-text-email-c);
}
.c-l1-name{
    font-weight: bolder;
    margin-right: 0.4rem;
    font-size: 0.9rem;
    color: var(--contributor-text-name-c);
}
.c-line1{
    overflow: hidden;
    text-overflow: ellipsis;
}
.contributor-info{
    overflow: hidden;
    white-space: nowrap;
    flex: 1;
}
.contributor-img-img{
    width: 100%;
    height: 100%;
}
.contributor-img-div{
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.contributor-img{
    width: 2.5rem;
    height: 2.5rem;
    overflow: hidden;
    border-radius: 2rem;
    margin-right: 0.5rem;
    background-color: var(--contributor-img-bg-c);
    border: 1px solid var(--contributor-img-border-c);
    position: relative;
    flex: none;
}
.contributor{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-bottom: 0.5rem;
}
</style>