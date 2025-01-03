//处理时间的函数集合

/**
 * 将时间格式化的函数,传入一个时间将其解析并作为函数参数传入，返回此函数返回值
 * @param rf Y年份 M月份 D天 h小时 m分钟 s秒
 */
export function dateFormat<T>(date:Date,rf:(Y:number,M:number,D:number,h:number,m:number,s:number)=>T):T{
    const Y = date.getFullYear();
    const M = date.getMonth() + 1;
    const D = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return rf(Y,M,D,h,m,s);
}

/**
 * 根据时间戳计算相对时间
 * @param timestamp 时间戳（毫秒）
 * @returns 相对时间字符串或格式化日期
 */
export function formatRelativeTime(timestamp: number): string {
    const now = Date.now();
    const diff = now - timestamp;

    // 时间差转换为秒
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (minutes < 1) {
        return `${seconds}秒前`;
    } else if (hours < 1) {
        return `${minutes}分钟前`;
    } else if (days < 1) {
        return `${hours}小时前`;
    } else if (months < 1) {
        return `${days}天前`;
    } else if (months < 10) {
        return `${months}个月前`;
    } else {
        const date = new Date(timestamp);
        const Y = date.getFullYear();
        const M = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
        const D = String(date.getDate()).padStart(2, '0');
        return `${Y}-${M}-${D}`;
    }
}