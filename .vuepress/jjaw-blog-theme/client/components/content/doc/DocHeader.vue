<script setup lang="ts">
import ContentBox from '../../layouts/box/ContentBox.vue';
import { usePageFrontmatter, RouteLink, usePageData } from "vuepress/client"
import TagIcon from '../../../imgs/tag.vue';
import { hashString } from '../../../js/client/HashString';

const getTagUrl = (tag: string) => `/tags/${encodeURI(tag)}/`;
const colourClassFun = (s: string) => `colour-${Math.abs(hashString(s) % 5)}`;
const frontmatter = usePageFrontmatter();
const pageData = usePageData();

</script>
<template>
    <ContentBox>
        <template #default>
            <h1 class="doc-h-h1">{{ frontmatter.title || pageData.title  }}</h1>
            <p class="doc-h-p">{{ frontmatter.description }}</p>
            <div class="tags" v-if="frontmatter.tags && (frontmatter.tags as any).length > 0">
                <TagIcon class="tag-i"></TagIcon>
                <RouteLink class="tag-n" v-for="tag of frontmatter.tags" :to="getTagUrl(tag)"
                    :class="colourClassFun(tag)" :key="tag">
                    {{ tag }}
                </RouteLink>
            </div>
            <div v-else style="height: 0.1rem;"></div>
        </template>
    </ContentBox>
</template>
<style scoped>
.tag-n.active {
    cursor: default;
}

.tag-n:hover {
    background-color: var(--tags-list-tag-bgc-hover);
    color: var(--tags-list-tag-c-hover);
}

.tag-n {
    font-size: 0.8rem;
    font-weight: bolder;
    background-color: var(--tags-list-tag-bgc);
    margin-left: 0.2rem;
    padding: 0 0.3rem;
    height: 1.2rem;
    line-height: 1.2rem;
    color: var(--tags-list-tag-txt-c);
}

.tag-i {
    width: 1rem;
    height: 1rem;
    margin-right: 0.2rem;
}

.tags {
    padding: 0.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: var(--item-list-butln-c);
}

.doc-h-h1 {
    font-weight: bolder;
    font-size: 2rem;
    margin: 2rem 0 1rem 0;
    line-height: 2.5rem;
}

.doc-h-p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
}
</style>