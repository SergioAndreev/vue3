<template>
  <p>{{ label }}</p>
  <div class="box">
    {{ counter }}:{{ count }}:{{ countObj.count }}
    <button @click="increment" style="padding: 5px;">Rise counter</button>
    <button @click="decrement" style="padding: 5px;">Decrement counter</button>
  </div>
  <p>whit out composable</p>
  <div class="box">
    {{ compCounter }}
    <button @click="incrementCount2" style="padding: 5px;">Rise counter</button>
    <button @click="decrementCount2" style="padding: 5px;">Decrement counter</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useCounter } from '../composables/useCounter'
import { counter2 } from '../composables/counter'

const { count, countObj, decrement, increment } = useCounter();
const counter: Ref<number | string> = ref('ref');
const label = ref<string | number>('Composable');
// Создаем экземпляр counter2 один раз
const counterInstance = counter2();
const { decrement2, increment2, getCountArrow } = counterInstance;

const compCounter = ref(0);

const incrementCount2 = () => {
  increment2();
  compCounter.value = getCountArrow();
  return getCountArrow()
}

const decrementCount2 = () => {
  decrement2();
  compCounter.value = getCountArrow();
  return getCountArrow()
}

</script>

<style scoped>
.box {
  border: solid 1px black;
  padding: 2px;
  margin: 10px;
}
</style>
