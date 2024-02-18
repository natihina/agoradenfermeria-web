<template>
  <v-app-bar color="primary" density="prominent">
    <template v-slot:prepend>
      <v-img :src="logoUrl" :width="200"/>
    </template>

    <v-container class="ma-2">
      <v-row>
        <v-text-field
          density="comfortable"
          prepend-inner-icon="mdi-magnify"
          rounded
          variant="solo"
        >
          <template v-slot:append-inner>
            <v-btn>{{ $t('header.search') }}</v-btn>
          </template>
        </v-text-field>
      </v-row>

      <v-row>
        <v-tabs :model-value="tabPage" color="black" grow height="46">
          <v-tab to="/" value="/">{{ $t('header.revista') }}</v-tab>
          <v-tab to="/resources" value="/resources">{{ $t('header.recursos') }}</v-tab>
          <v-tab to="/contact" value="/contact">{{ $t('header.contacto') }}</v-tab>
        </v-tabs>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import logoCa from "/src/assets/logo_ca.png"
import logoEs from "/src/assets/logo_es.png"

import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {computed} from "vue";

const {t, locale} = useI18n()

const router = useRouter()

const logoUrl = locale.value === "ca" ? logoCa : logoEs
const tabPage = computed(() => router.currentRoute.value.path)
</script>
