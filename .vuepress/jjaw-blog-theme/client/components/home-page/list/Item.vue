<script setup lang="ts">
import ContentBox from '../../layouts/box/ContentBox.vue'
import { RouteLink, useRoute } from 'vuepress/client';
import UserIcon from '../../../imgs/user.vue'
import CalendarIcon from '../../../imgs/calendar.vue';
import { dateFormat, formatRelativeTime } from '../../../js/client/Time';
import TagIcon from '../../../imgs/tag.vue';
import { hashString } from '../../../js/client/HashString';
import HistoryIcon from '../../../imgs/history.vue';
const route = useRoute();
const getTagUrl = (tag: string) => `/tags/${encodeURI(tag)}/`;
const colourClassFun = (s: string) => `colour-${Math.abs(hashString(s) % 5)}`;
const tiemF = (tiem: number) => dateFormat(new Date(tiem), (Y, M, D, h, m) => `${Y}-${M}-${D}`);
const { item } = defineProps<{
    item: { path: string, info: any }
}>();
const info = item.info;

</script>
<template>
    <ContentBox class="item">
        <h2>
            <RouteLink :to="item.path">{{ info.title }}</RouteLink>
        </h2>
        <p class="description">{{ info.description }}</p>
        <div class="butln">
            <!-- 用户 -->
            <div class="butln-item" :title="`作者 ${info.firstContributor?.name}`">
                <UserIcon class="user-i" src="../../../imgs/user.svg" />
                <span class="user-n">{{ info.firstContributor?.name }}</span>
            </div>
            <!-- 发布时间 -->
            <div class="butln-item" :title="`发布于 ${tiemF(info.createdTime)}`">
                <CalendarIcon class="calender-i"></CalendarIcon>
                <span class="date-n">{{ tiemF(info.createdTime) }}</span>
            </div>
            <!-- 更新时间 -->
            <div class="butln-item" :title="`近期更新 ${formatRelativeTime(info.updatedTime)}`">
                <HistoryIcon class="calender-i"></HistoryIcon>
                <span class="date-n">{{ formatRelativeTime(info.updatedTime) }}</span>
            </div>
            <!-- 标签 -->
            <div class="butln-item">
                <TagIcon class="tag-i"></TagIcon>
                <RouteLink :to="getTagUrl(tag)" class="tag-n" v-for="tag of info.tags"
                    :class="[colourClassFun(tag), route.path == getTagUrl(tag) ? 'active' : null]" :key="tag">{{ tag }}
                </RouteLink>
            </div>
        </div>
    </ContentBox>
</template>
<style scoped>
.butln-item{
    display: flex;
    align-items: center;
}

.tag-n.active {
    cursor: default;
}

.tag-n.active,
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

.user-n,
.date-n {
    font-weight: bolder;
    font-size: 0.8rem;
    margin-left: 0.2rem;
}

.user-i,
.calender-i,
.tag-i {
    width: 1rem;
    height: 1rem;
}

.butln {
    padding: 0.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: var(--item-list-butln-c);
    column-gap: 0.6rem;
}

.item {
    --content-box-mian-padding: 1rem 1rem 0 1rem;
}

h2 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 1rem;
}

h2:hover {
    color: var(--item-list-link-c);
}

.description {
    margin-bottom: 0rem;
    padding-bottom: 1rem;
    display: block;
    border-bottom: 1px solid var(--item-list-brc);
}
</style>