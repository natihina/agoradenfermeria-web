<template>
  <v-container>
    <v-row class="d-flex align-center justify-center">
      <v-sheet :height="100" border
               class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" color="secondary" rounded>
        {{ $t('description') }}
      </v-sheet>
    </v-row>
    <v-row>
      <v-col cols='8'>
        <Timeline :magazines="magazineStore.magazines"/>
      </v-col>
      <v-col cols="4">

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import Timeline from "@/components/Timeline.vue";
import {useMagazineStore} from "@/store/magazine";
import {onMounted} from "vue";

const magazineStore = useMagazineStore();
onMounted(async () => {
  await magazineStore.loadMagazines();
});
</script>
