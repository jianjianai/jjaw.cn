export interface GitPluginFrontmatter {
    gitInclude?: string[];
}
export interface GitPluginPageData {
    git: GitData;
}
export interface GitData {
    /**
     * Unix timestamp in milliseconds of the first commit
     */
    createdTime?: number;
    /**
     * Unix timestamp in milliseconds of the last commit
     */
    updatedTime?: number;
    /**
     * Contributors of all commits
     */
    contributors?: GitContributor[];

    /**
     * 是否是根仓库仓库
     */
    isRoot?:boolean;
}
export interface GitContributor {
    name: string;
    email: string;
    commits: number;
}
