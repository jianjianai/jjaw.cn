import type { Page, Plugin } from 'vuepress/core'
import { path } from 'vuepress/utils'
import type { GitPluginFrontmatter, GitPluginPageData } from './types'
import {
  checkGitRepo,
  getContributors,
  getCreatedTime,
  getUpdatedTime,
} from '@vuepress/plugin-git'
import { glob } from 'glob'
import { getConfigFile as repsitresGitCloneConfig } from '../repsitres-git-clone'

/**
 * Options of @vuepress/plugin-git
 */
export interface GitPluginOptions {
  /**
   * Whether to get the created time of a page
   */
  createdTime?: boolean

  /**
   * Whether to get the updated time of a page
   */
  updatedTime?: boolean

  /**
   * Whether to get the contributors of a page
   */
  contributors?: boolean

  /** 外部仓库配置 */
  externalRepo?: boolean;
}

export const gitPlugin =
  ({ createdTime, updatedTime, contributors,externalRepo }: GitPluginOptions = {}): Plugin =>
  (app) => {
    const cwd = app.dir.source()
    const cwdSonPathSet = new Set<string>();
    const isGitRepoValid = checkGitRepo(cwd)

    function getCwd(filePathRelative){
      const filePathRelativeF = filePathRelative
      while(true){
        let subIndex = filePathRelative.lastIndexOf("/");
        if(subIndex<1){
          if(isGitRepoValid){
            return {
              cwd:cwd,
              path:filePathRelativeF,
              isRoot:true,
            };
          }else{
            return null;
          }
        }
        filePathRelative = filePathRelative.substring(0,subIndex);
        if(cwdSonPathSet.has(filePathRelative)){
            return {
              cwd:`${cwd}/${filePathRelative}`,
              path:filePathRelativeF.substring(filePathRelative.length+1)
            };
        }
      }
    }

    return {
      name: '@vuepress/plugin-git',
      extendsMarkdownOptions: async()=>{
        (await glob('./*/**/.git', { ignore:[] })).map((t)=>path.dirname(t)).forEach((dir)=>{
          if(checkGitRepo(dir)){
            cwdSonPathSet.add(dir);
          }
        });
      },
      extendsPage: async (
        page: Page<GitPluginPageData, GitPluginFrontmatter>,
      ) => {
        page.data.git = {}

        if ( page.filePathRelative === null ) {
          return
        }
        const runConfig = getCwd(page.filePathRelative);//获取对应的git仓库
        if(runConfig === null){
          return
        }
        const runCwd = runConfig.cwd;

        const filePaths = [
          runConfig.path,
          ...(page.frontmatter.gitInclude ?? []).map((item) =>
            path.join(runConfig.path, '..', item),
          ),
        ]

        page.data.git.isRoot = runConfig.isRoot;

        if (!runConfig.isRoot) {
          //如果不是根仓库，获取仓库的url
          if (externalRepo !== false) {
            const itemName = runCwd.substring(runCwd.lastIndexOf("/") + 1);
            const d = (await repsitresGitCloneConfig()).find((item) => item.name == itemName);
            if(d){
              page.data.git.externalRepo = {url:d.url,branch:d.branch};
            }
          }
        };

        if (createdTime !== false) {
          page.data.git.createdTime = await getCreatedTime(filePaths, runCwd)
        }

        if (updatedTime !== false) {
          page.data.git.updatedTime = await getUpdatedTime(filePaths, runCwd)
        }

        if (contributors !== false) {
          page.data.git.contributors = await getContributors(filePaths, runCwd)
        }
      },

      // remove `gitInclude` from frontmatter
      onInitialized: (app) => {
        app.pages.forEach((page) => {
          delete page.frontmatter.gitInclude
        })
      },
    }
  }
