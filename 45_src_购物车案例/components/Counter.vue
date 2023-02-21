<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="changeCount({id:item.id,handle:'decrement'})">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ item.goods_count }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="changeCount({id:item.id,handle:'increment'})">+</button>
  </div>
</template>

<script>
import { mapMutations} from "vuex";

export default {
  name: 'Counter',
  props: ['item'],
  methods: {
    ...mapMutations({changeCount: 'CHANGE_COUNT'})
  }
}
</script>

<style scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>