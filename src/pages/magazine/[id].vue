<template>
  <v-container v-if="magazine" class="pa-0" fluid>
    <Pdf :magazine="magazine" :page="$route.query['page'] || 1"/>
  </v-container>
</template>
<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useMagazineStore} from "@/store/magazine";
import Pdf from "@/components/Pdf.vue";

const router = useRouter()
const magazineStore = useMagazineStore()

const magazine = ref<Magazine>()

onMounted(async () => {
  const mid = parseInt(router.currentRoute.value.params['id'] as string)
  magazine.value = await magazineStore.getMagazine(mid)
})

</script>
