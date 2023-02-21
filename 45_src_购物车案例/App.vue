<template>
  <div class="app-container">
    <Header title="购物车案例"/>
    <Goods
        v-for="item in list"
        :key="item.id"
        :item="item"
    >
      <template v-slot:default>
        <Counter :item="item"/>
      </template>
    </Goods>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Goods from "@/components/Goods.vue";
import Footer from "@/components/Footer.vue"
import Counter from "@/components/Counter.vue";
import {mapState, mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    Counter,
    Header,
    Goods,
    Footer
  },
  methods: {
    ...mapActions(['initCartList'])
  },
  computed: {
    ...mapState(['list'])
  },
  created() {
    this.initCartList()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*.app-container {*/
/*  padding-top: 45px;*/
/*  padding-bottom: 50px;*/
/*}*/
</style>