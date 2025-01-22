export function counter2() {
  let count2 = 0

  const decrement2 = () => {
    count2--
    console.log('decrement', count2)
  }

  const increment2 = () => {
    count2++
    console.log('increment', count2)
  }

  const getCountArrow = () => count2

  return {
    count2,
    decrement2,
    increment2,
    getCountArrow
  }
}
