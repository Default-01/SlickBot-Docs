import { defineClientAppEnhance } from '@vuepress/client';

import DocsLink from './components/DocsLink.vue';
import ResultingCode from './components/ResultingCode.vue';
import '@discord-message-components/vue/dist/style.css';

export default defineClientAppEnhance(({ app }) => {

	app.component('DocsLink', DocsLink);
	app.component('ResultingCode', ResultingCode);
});
