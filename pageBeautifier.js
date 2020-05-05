function beautifyByCase() {
    let currentPageUrl = window.location.href;
    if (currentPageUrl.indexOf("www.baidu.com") !== -1) {
        beautifyBaiDu();
    } else if (currentPageUrl.indexOf("www.google.com") !== -1) {
        beautifyGoogle();
    }
}

/**
 * 美化百度页面
 */
function beautifyBaiDu() {
    let flag = 'beautifyBaiDu';
    // 判断程序是否已执行
    if (document.querySelector(`style[${flag}]`)) return;

    /* 隐藏百度右侧的百度热榜 及 搜索相关内容 */
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute('beautifyBaiDu', "true");
    let content =
        "*{font-family: arial,sans-serif!important;}"
        /* 隐藏热点 */
        + "#content_right {display:none!important }"
        /* 搜索内容居中 */
        + "#content_left{margin-left: 24vw;margin-top:25px}"
        /* =============Head(搜索框、Tab)================ */
        /* 头 */
        + "#head{border: none;}"
        /* 顶部搜索框 */
        + ".s_form{margin-left:32vw}"
        + ".bg{border-radius: 60px; margin-right: 6px; padding: 2px 0;}"
        /* 搜索框左侧logo */
        + "#result_logo{display:none!important}"
        /* 搜索结果条数 */
        + ".head_nums_cont_outer,.head_nums_cont_inner{display:none!important}"
        /* tab条 */
        + "#s_tab{border-bottom: 1px solid #ebebeb; background: white;}"
        + ".s_tab>div{margin-left:24vw}"
        /* =============搜索内容=============== */
        /* 不带图——内容摘要 */
        + ".c-abstract{width:38vw;word-break: break-all;font-size:14px}"
        /* 带图——内容摘要 */
        + ".general_image_pic{width:6vw}" // 左侧图
        + ".general_image_pic+div >div{width:30.0vw;margin-left:0.8vw;font-size:14px}"// 右侧内容摘要
        /* 带图-内容摘要 */
        + ".c-span6{display:table;}"
        + ".c-span6 + .c-span-last >p:first-child{width:31vw;}"
        /* 搜索内容中百度小说摘要 */
        + ".bookinfo-des{width:31vw;}"
        /* 预览内容 https://www.baidu.com/s?tn=02003390_hao_pg&ie=utf-8&wd=div%E5%86%85%E5%AE%B9%E6%8D%A2%E8%A1%8C 示例页面 */
        + ".c-result-content{width:40vw}"
        /* 搜索内容中新闻摘要 */
        + ".c-offset>.c-row{width: 38vw;}"
        /* 内容摘要标题 */
        + ".t{font-size:16px}"
        /* =============Foot(相关搜索、Foot、Page)=============== */
        /* 相关搜索 */
        + "#rs{width: 84vw; display: flex; flex-direction: row; justify-content: center;}"
        + ".tt{margin-right: 1vw;}"
        /* foot——帮助、举报、用户反馈 */
        + "#foot{display:none!important}"
        /* 分页栏 */
        + "#page{display: flex; justify-content: center; width: 83vw; align-items: flex-start;margin: 30px 0 0;}"
        + ".fk{display:none!important}"// 分页栏上面的百度Icon
        + ".pc,.n{color: black;}"// 分页栏分页框和上一页下一页按钮
        /* =============适配Tab上的咨讯页=============== */
        /* 资讯结果条数——找到相关资讯xx篇 */
        + "#header_top_bar{display:none!important}"
        /* 分页栏上面的去网页搜索 */
        + "#gotoPage{text-align: center; width: 87vw;}"
    ;
    style.innerHTML = content;
    document.head.appendChild(style)
}

/**
 * 美化google页面
 */
function beautifyGoogle() {
    let flag = 'beautifyGoogle';
    // 判断程序是否已执行
    if (document.querySelector(`style[${flag}]`)) return;

    /* 隐藏百度右侧的百度热榜 及 搜索相关内容 */
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute(flag, "true");
    let content =
        /* 搜索框左侧Logo、搜索框、搜索结果 */
        ".logo{display:none!important}"
        + ".logo+div,.logo+div+div{margin-left:20vw}"
        /* 隐藏查看以下内容的结果 */
        + ".rhscol {display:none!important}"
        /* Tab */
        + "#hdtbSum{display: flex;justify-content: center;margin-left: -10vw;}"
        /* 搜索结果条数 */
        + "#slim_appbar{display:none!important}"
        /* 搜索内容container */
        + "#rso{margin-left:20vw}"
        /* 搜索内容中的图片、视频List */
        + "g-section-with-header{width:37vw}"
        /* 相关搜索 */
        + "#extrares{margin-left: 31.5vw;}"
        /* 分页栏 */
        + "#foot{display: flex; justify-content: center; width: 78vw!important;}"
        /* Foot最后的无用信息 */
        + "#footcnt{display:none!important}"
    ;
    style.innerHTML = content;
    document.head.appendChild(style)
}

/**
 * 页面Dom监视器
 */
function initMutationObserver() {
    // 使用MutationObserver实例对象，当页面中Dom发生变化时，检查页面内是否有我们插入的style标签，有就不作任何处理，没有则插入
    let observer = new MutationObserver(beautifyByCase);
    observer.observe(document, {childList: true, subtree: true})
}

$(document).ready(function () {
    initMutationObserver()
});
