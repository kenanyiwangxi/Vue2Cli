<template>
  <div class="container">
    <Category title="游戏">
      <template scope="obj">
        <ul>
          <li v-for="(g,index) in obj.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="obj">
        <ol>
          <li v-for="(g,index) in obj.games" :key="index">{{ g }}</li>
        </ol>
        <h4>{{obj.x}}</h4>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
          <h4 v-for="(g,index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Count.vue";

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
