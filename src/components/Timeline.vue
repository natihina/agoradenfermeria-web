<script lang="ts" setup>
import {computed} from "vue";
import TimelineMagazine from "@/components/TimelineMagazine.vue";

const props = defineProps<{ magazines: Magazine[] }>()

interface Item {
  type: string
  magazine: Magazine
}

const items = computed((): Item[] => {
  let its = []

  for (let i = 0; i < props.magazines.length; i++) {
    its.push({
      type: 'magazine',
      magazine: props.magazines[i]
    })
  }

  return its
})

const getComponent = (item: Item) => {
  switch (item.type) {
    case 'magazine':
      return {
        comp: TimelineMagazine,
        props: {
          magazine: item.magazine
        }
      }
    default:
      return null
  }
}

</script>

<template>
  <v-timeline>
    <component :is="getComponent(item)?.comp" v-for="(item, i) in items" :key="i" v-bind="getComponent(item)?.props"/>
  </v-timeline>
</template>

<style scoped>

</style>
