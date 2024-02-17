import {createI18n} from 'vue-i18n'

import messages from '@intlify/unplugin-vue-i18n/messages'

export default createI18n({
  legacy: false,
  locale: 'es',
  availableLocales: ['es', 'ca'],
  fallbackLocale: 'es',
  messages,
})
