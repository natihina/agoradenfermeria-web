<script lang="ts" setup>
import {computed} from "vue";
import TimelineMagazine from "@/components/TimelineMagazine.vue";

const props = defineProps<{ magazines: Magazine[] }>()

const items = computed(() => {
  let its = []

  for (let i = 0; i < props.magazines.length; i++) {
    its.push({
      type: 'magazine',
      magazine: props.magazines[i]
    })
  }

  return its
})

const getComponent = (type: string) => {
  switch (type) {
    case 'magazine':
      return TimelineMagazine
    default:
      return null
  }
}

</script>

<template>
  <v-timeline>
    <TimelineMagazine v-for="(item, i) in items" :key="i" :magazine="item.magazine"/>
  </v-timeline>
</template>

<style scoped>

</style>
