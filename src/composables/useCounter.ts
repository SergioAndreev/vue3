import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const countObj = ref({ count: 0 })
  const decrement = () => {
    count.value--
    countObj.value.count--
  }

  const increment = () => {
    count.value++
    countObj.value.count++
  }
  return {
    count,
    decrement,
    increment,
    countObj,
  }
}
