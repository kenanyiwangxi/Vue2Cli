import request from "@/utils/request"

// 向外按需导出一个API函数
export const getArticleListAPI = (page, limit) => {
    return request.get('/articles', {
        params: {
            _page: page,
            _limit: limit
        }
    })
}
