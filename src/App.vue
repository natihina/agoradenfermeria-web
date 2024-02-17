<template>
  <router-view/>
</template>

<script lang="ts" setup>

import {useHead, useSeoMeta} from "@unhead/vue";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n()

useHead({
  title() {
    return t("title")
  },
  link() {
    return [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=EB+Garamond",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ];
  },
})
useSeoMeta({
  title: t("title"),
  description: t("description"),
  ogTitle: t("title"),
  ogDescription: t("description"),
  ogImage: `/logo_${locale.value}.png`,
})

</script>
