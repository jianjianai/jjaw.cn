//克隆其他仓库插件
import { execa } from 'execa';
import { Plugin } from "vuepress";
import { fs, path } from 'vuepress/utils';
export function repsitresGitClonePlugin(config:{toDir:string,configFilePath:string}): Plugin {
    return {
        name: "repsitres-git-clone",
        extendsMarkdownOptions:async ()=>{
            let jsonData;
            try{
                const jsonString = await fs.readFile(config.configFilePath, { encoding: 'utf8' });
                 jsonData = JSON.parse(jsonString) as {"url":string,"branch":string,"name":string}[];
            }catch(eror){
                throw new Error(`解析json文件出错! \n ${config.configFilePath} \n ${eror}`);
            }
            for(const item of jsonData){
                const cPath = path.join(config.toDir,item.name);
                const isExists = await fs.exists(cPath);
                if(!isExists){
                 let bath:string[] = [];
                 if(item.branch){
                     bath = ['-b',item.branch]
                 }
                 await execa('git',['clone',...bath,item.url,cPath]);
                }
             }
        }
    }
}