// Utilities
import {defineStore} from 'pinia'
import {useFetcher} from "@/lib/fetcher";
import {ref} from "vue";

export const useMagazineStore = defineStore('magazine', () => {

  const fetcher = useFetcher()
  const magazines = ref<Magazine[]>([])

  async function loadMagazines() {
    magazines.value = await fetcher.get(`magazines`).then((response: any) => {
      let magazines = [] as Magazine[]
      for (let i = 0; i < response.data.length; i++) {
        const apiMagazine = response.data[i]
        const m = {
          id: parseInt(apiMagazine.id),
          number: parseInt(apiMagazine.number),
          vol_major: parseInt(apiMagazine.vol_major),
          vol_minor: parseInt(apiMagazine.vol_minor),
          creation_date: new Date(Date.parse(apiMagazine.creation_date)),
          modified_date: new Date(Date.parse(apiMagazine.modified_date)),
          type: parseInt(apiMagazine.type),
          status: parseInt(apiMagazine.status),

          cover: apiMagazine.file_path ? {
            file_path: apiMagazine.file_path,
          } : undefined,
          details: apiMagazine.label ? {
            label: apiMagazine.label,
            publish_date: new Date(Date.parse(apiMagazine.publish_date)),
          } : undefined,

          magazine_entrypoint: (apiMagazine.lang === 'ca' ? 'CAT' : 'CAST') + '/' + apiMagazine.ruta + '/' + apiMagazine.revista,
          magazine_format: apiMagazine.formato === 'pdf' ? 'pdf' : 'html',

          articles_count: parseInt(apiMagazine.articles_count),
        } as Magazine

        magazines.push(m)
      }

      return magazines
    })

    return magazines
  }

  async function getMagazine(id: number) {
    if (magazines.value.length === 0) {
      await loadMagazines()
    }

    return magazines.value.find((m) => m.id === id)
  }

  return {loadMagazines, getMagazine, magazines}
}, {persist: true})
