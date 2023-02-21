<template>
  <div>
    <van-nav-bar title="黑马头条" fixed placeholder/>
    <van-pull-refresh v-model.lazy="refreshing" @refresh="onRefresh" :disabled="finished">
      <van-list
          v-model.lazy="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <!--        :immediate-check="false"-->
        <ArticleInfo v-for="item in list" :key="item.art_id" :item="item" @deleteItem="deleteItem"/>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {getArticleListAPI} from "@/api/homeAPI"
import ArticleInfo from "@/components/ArticleInfo.vue";
import {Toast} from 'vant';
// 鲁大师 提供了很多函数
import _ from "lodash"

let fn = null

export default {
  name: 'Home',
  components: {
    ArticleInfo
  },
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少数据
      limit: 10,
      list: [],
      // 是否正在加载下一页数据,如果loading为true，则不会反复触发load事件
      // 每当下一页数据请求回来后，千万要记得，把loading从true改为false
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把finished改成true
      finished: false,
      // 是否正在下拉刷新
      refreshing: false,
    }
  },
  methods: {
    // 封装获取文章数据的方法
    async initArticleList(isRefreshing) {
      const {data: res} = await getArticleListAPI(this.page, this.limit)
      // this.list = [...this.list,...res]

      if (isRefreshing) {
        // 下拉刷新
        this.list.unshift(...res)
        this.refreshing = false
        Toast('刷新成功')
        res.length || Toast('数据已加载完毕')
      } else {
        // 上拉加载更多
        this.list.push(...res)
        this.loading = false
      }

      if (!res.length) {
        this.finished = true
      }
    },
    // 上拉加载
    onLoad() {
      this.page++
      this.initArticleList()
    },
    // 下拉刷新
    onRefresh() {
      this.page++
      this.initArticleList(this.refreshing)
    },
    // 删除文章
    deleteItem(id) {
      this.list = this.list.filter(item => {
        if (item.art_id !== id) {
          return item
        }
      })
    },
    // 滚动保存
    recordTopHandler() {
      return _.debounce(() => {
        this.$route.meta.top = window.scrollY
      }, 50, {trailing: true})
    }
  },
  created() {
    this.initArticleList()
  },
  activated() {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  deactivated() {
    window.removeEventListener('scroll', fn)
  }

}
</script>

<style lang="less" scoped>
///deep/ .van-nav-bar {
//  background-color: #007bff;
//}
//
///deep/ .van-nav-bar__title {
//  color: #fff;
//}

</style>