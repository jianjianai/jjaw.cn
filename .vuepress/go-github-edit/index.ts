// 
import type { Plugin } from "vuepress/core";
import type { github_edit } from "./github_edit_type";
import { GitData } from "../plugin-git/types";
import { getRelativePath as repsitresGitCloneGetRelativePath } from "../repsitres-git-clone";

export type githubEditPluginConfig = {
    githubAdderss: `http${"" | "s"}://${string}/${string}`,
    branche: String,
    helpPath: String
}
/**
 * 
 * @param githubAdderss github仓库地址
 * @param branche 分支
 */
export function githubEditPlugin({ githubAdderss, branche, helpPath }: githubEditPluginConfig): Plugin {
    const gitHubBaseUrl = `${githubAdderss}/edit/${branche}`;
    return {
        name: "github-edit",
        define: {
            _github_edit_helpPath_: helpPath
        },
        extendsPage(page) {
            let gitData = page.data["git"] as GitData;
            let data: github_edit | undefined = undefined;
            if (!gitData.isRoot) {
                if(gitData.externalRepo){
                    data = {
                        fileGitUrl: `${gitData.externalRepo.url}/edit/${gitData.externalRepo.branch}/${repsitresGitCloneGetRelativePath(page.filePathRelative!)}`
                    };
                }
            } else {
                data = {
                    fileGitUrl: `${gitHubBaseUrl}/${page.filePathRelative}`
                };
            }
            page.data["github_edit"] = data;
        }
    }
}