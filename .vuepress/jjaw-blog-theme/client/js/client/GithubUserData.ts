

type GithubUser = {
    img: string,
    githubName:string, //github用户名称
    githubPage:string// github主页链接
}
const promiseMap = new Map<string,Promise<GithubUser | null>>();

/**
 * 获取某邮箱的github用户的信息
 */
export function getGitHubUserInfoByEmail(email:string):Promise<GithubUser | null>{
    let pr = promiseMap.get(email);
    if(pr != undefined){
        return pr;
    }
    pr = getGitHubUserInfoByEmailIn(email);
    promiseMap.set(email,pr);
    return pr;
}

async function getGitHubUserInfoByEmailIn(email:string):Promise<GithubUser|null>{
    const locKey = `github_user_${email}`;
    const locItem = localStorage.getItem(locKey);
    if("null"==locItem){
        return null;
    }
    if(locItem){
        try{
            return JSON.parse(locItem);
        }catch(error){
            console.warn(error);
        }
    }
    if(email.endsWith("@users.noreply.github.com")){
        const userInfo = email.substring(0,email.indexOf("@")).split("+",2);
        if(userInfo.length>=2){
            const userID = userInfo[0];
            const userName = userInfo[1];
            // 不用存了，因为不用去github搜索，直接重新解析就行
            // localStorage.setItem(locKey,JSON.stringify(githubUser));
            return {
                img: `https://avatars.githubusercontent.com/u/${userID}?v=4`,
                githubName: userName,
                githubPage: `https://github.com/${userName}`
            }
        }
        const userName = userInfo[0];
        const r = await fetch(`https://api.github.com/users/${userName}`);
        if(!r.ok){
            if(r.status==404){
                localStorage.setItem(locKey,"null");
            }
            return null;
        }
        const json = await r.json();
        const githubUser = {
            img:json.avatar_url as string,
            githubName:json.login  as string, //github用户名称
            githubPage: json.html_url  as string// github主页链接
        }
        localStorage.setItem(locKey,JSON.stringify(githubUser));
        return githubUser
    }
    const url = new URL("https://api.github.com/search/users");
    url.searchParams.append("per_page","1");
    url.searchParams.append("q",`${email} in:email`);
    const r = await fetch(url);
    if(!r.ok){
        return null;
    }
    const json = await r.json();
    if(!json.items?.length){ // 用户不存在
        localStorage.setItem(locKey,"null");
        return null;
    }
    const user = json.items[0];
    const githubUser = {
        img:user.avatar_url as string,
        githubName:user.login  as string, //github用户名称
        githubPage: user.html_url  as string// github主页链接
    }
    localStorage.setItem(locKey,JSON.stringify(githubUser));
    return githubUser
}