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
        const m = {
          id: parseInt(response.data[i].id),
          number: parseInt(response.data[i].number),
          vol_major: parseInt(response.data[i].vol_major),
          vol_minor: parseInt(response.data[i].vol_minor),
          creation_date: new Date(Date.parse(response.data[i].creation_date)),
          modified_date: new Date(Date.parse(response.data[i].modified_date)),
          type: parseInt(response.data[i].type),
          status: parseInt(response.data[i].status),

          cover: response.data[i].file_path ? {
            file_path: response.data[i].file_path,
          } : undefined,
          details: response.data[i].label ? {
            label: response.data[i].label,
            publish_date: new Date(Date.parse(response.data[i].publish_date)),
          } : undefined,

          articles_count: parseInt(response.data[i].articles_count),
        } as Magazine

        magazines.push(m)
      }

      return magazines
    })

    return magazines
  }

  return {loadMagazines, magazines}
}, {persist: true})
