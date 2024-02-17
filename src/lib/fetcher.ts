import axios from 'axios'
import {useI18n} from "vue-i18n";

export function useFetcher() {
  const i18n = useI18n()

  const headers: any = {
    'Content-Type': 'application/json',
  }
  if (i18n.locale.value) {
    headers['Accept-Language'] = i18n.locale.value
  }

  return axios.create({
    baseURL: 'https://api.agoradenfermeria.eu/',
    headers: headers,
  })
}
