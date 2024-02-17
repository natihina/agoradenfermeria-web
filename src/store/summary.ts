// Utilities
import {defineStore} from 'pinia'
import {useFetcher} from "@/lib/fetcher";
import {ref} from "vue";
import {CachedItem, getCached} from "@/lib/cache";

export const useSummaryStore = defineStore('summary', () => {

  const fetcher = useFetcher()
  const summaries = ref<CachedItem<Summary[]>[]>([])

  async function loadSummary(id: string) {
    return await getCached<Summary[]>(summaries, id, 10000, async (): Promise<Summary[]> => {
      return await fetcher.get(`magazines/${id}/articles`).then((response: any) => {
        let summaries = [] as Summary[]

        for (let i = 0; i < response.data.length; i++) {
          const s = {
            id: parseInt(response.data[i].id),
            magazine_id: parseInt(response.data[i].magazine_id),
            position: parseInt(response.data[i].position),
            section_id: parseInt(response.data[i].section_id),
            author: response.data[i].author,
            status: parseInt(response.data[i].status),
            text_id: parseInt(response.data[i].text_id),
            abstract_id: parseInt(response.data[i].abstract_id),

            text: response.data[i].text_file_path ? {
              file_path: response.data[i].text_file_path,
            } as File : undefined,
            abstract: response.data[i].abstract_file_path ? {
              file_path: response.data[i].abstract_file_path,
            } as File : undefined,

            label: {
              summary_id: parseInt(response.data[i].id),
              title: response.data[i].summary_label_title,
              subtitle: response.data[i].summary_label_subtitle,
              page: response.data[i].summary_label_page,
              keywords_array: response.data[i].summary_label_keywords.split(','),
            } as SummaryLabel,
            section: {
              name: response.data[i].section_name,
              advertising: parseInt(response.data[i].section_advertising),
            } as SummarySection,
            institution: {
              title: response.data[i].institution_title,
              name_short: response.data[i].institution_name_short,
              name_long: response.data[i].institution_name_long,
              link: response.data[i].institution_link ? {
                url: response.data[i].institution_link,
              } as Link : undefined,
              logo: response.data[i].institution_logo ? {
                file_path: response.data[i].institution_logo_file_path,
              } as Image : undefined,
            } as Institution
          } as Summary

          summaries.push(s)
        }

        return summaries
      })
    });
  }

  return {loadSummary, summaries}
}, {persist: true})
