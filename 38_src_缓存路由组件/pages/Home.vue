<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" to="/home/home-news" active-class="active">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item " to="/home/home-message" active-class="active">Message</router-link>
        </li>
      </ul>
      <!--缓存多个路由组件-->
<!--      <keep-alive :include="['HomeNews','HomeMessage']">-->
<!--        <router-view></router-view>-->
<!--      </keep-alive>-->

      <!--缓存一个路由组件-->
      <keep-alive include="HomeNews">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

</style>