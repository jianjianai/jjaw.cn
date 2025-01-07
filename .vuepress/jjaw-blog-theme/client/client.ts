import './css/base.css'
import './css/theme-var.css'
import './css/plugins-var.css'
import './css/doc.css'
import './css/github-markdown.css'
import './css/jjaw-prismjs.css'
import { defineClientConfig } from 'vuepress/client'
import Index from './client.vue'
import GithubEditHelp from './layouts/GithubEditHelp.vue';
import Home from './layouts/Home.vue';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import TagList from './layouts/TagList.vue';

export const layouts = {
  Layout,
  NotFound,
  Home,
  TagList,
  GithubEditHelp,
};

export default defineClientConfig({
  layouts: (() => {
    const l = {};
    for (const key in layouts) {
      l[key] = Index;
    }
    return l;
  })()
})