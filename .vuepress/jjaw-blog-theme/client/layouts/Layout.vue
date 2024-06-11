<script setup lang="ts">
import Main from '../components/layouts/page/Main.vue';
import Header from '../components/layouts/page/Header.vue'
import DocMain from '../components/content/doc/DocMain.vue';
import NavMain from '../components/content/nav/NavMain.vue';
import Aside from '../components/content/aside/AsideMain.vue';
import Body from '../components/layouts/page/ArticleBody.vue'
import Footer from '../components/layouts/page/Footer.vue';
import CommentsMain from '../components/content/comments/CommentsMain.vue'
import { useNavPageData } from '../../../nav-data-page/useNavPageUrl';
const navPageData = useNavPageData();
</script>
<template>
    <Main>
        <template #header>
            <Header></Header>
        </template>
        <template #default>
           
            <Body>
                <template #default> 
                    <!-- 文章 -->
                    <DocMain></DocMain>
                    <!-- 评论区 -->
                    <CommentsMain class="comment"></CommentsMain>
                </template>
                <template v-if="navPageData" #nav> <NavMain></NavMain> </template>
                <template #aside> <Aside></Aside> </template>
            </Body>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Main>
</template>

<style scoped>
.comment{
    margin-top: 1rem;
}
</style>