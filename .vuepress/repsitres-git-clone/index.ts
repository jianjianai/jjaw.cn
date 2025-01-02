//克隆其他仓库插件
import { execa } from 'execa';
import { Plugin } from "vuepress";
import { fs, path } from 'vuepress/utils';

type InitConfig = {
    configFilePath: string,
    toDir: string,
}
let initConfig: InitConfig | undefined = undefined;
export function repsitresGitClonePlugin(itc: InitConfig): Plugin {
    initConfig = itc;
    return {
        name: "repsitres-git-clone",
        extendsMarkdownOptions: async () => {
            if (!initConfig) {
                throw new Error("repsitresGitClonePlugin 请传入配置文件");
            }
            const jsonData = await getConfigFile();
            for (const item of jsonData) {
                const cPath = path.join(initConfig.toDir, item.name);
                const isExists = await fs.exists(cPath);
                if (!isExists) {
                    let bath: string[] = [];
                    if (item.branch) {
                        bath = ['-b', item.branch]
                    }
                    await execa('git', ['clone', ...bath, item.url, cPath]);
                }
            }
        }
    }
}

/**
 * 获取相对路径
 * 例如 toDir 是 /a/b/c 传入 /a/b/c/name/e/f 返回 e/f
 */
export function getRelativePath(filePath: string): string {
    if (!initConfig) {
        throw new Error("repsitresGitClonePlugin 请传入配置文件");
    }
    const p = path.relative(initConfig.toDir, filePath);
    return p.substring(p.indexOf("/") + 1);
}


let configFile: RepsitresGitClonePluginConfig | undefined = undefined;
/**
 * 解析配置文件
 */
export async function getConfigFile(): Promise<RepsitresGitClonePluginConfig> {
    if (!initConfig) {
        throw new Error("repsitresGitClonePlugin 请传入配置文件");
    }
    if (!configFile) {
        try {
            const jsonString = await fs.readFile(initConfig.configFilePath, { encoding: 'utf8' });
            configFile = JSON.parse(jsonString) as RepsitresGitClonePluginConfig;
        } catch (eror) {
            throw new Error(`解析json文件出错! \n ${initConfig.configFilePath} \n ${eror}`);
        }
    }
    return configFile;

}
export type RepsitresGitClonePluginConfig = { "url": string, "branch": string, "name": string }[];