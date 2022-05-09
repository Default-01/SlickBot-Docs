import { defineClientAppEnhance } from '@vuepress/client';
import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	install as DiscordMessageComponents,
} from '@discord-message-components/vue';
import '@discord-message-components/vue/dist/style.css';

import DocsLink from './components/DocsLink.vue';
import ResultingCode from './components/ResultingCode.vue';

export default defineClientAppEnhance(({ app }) => {

	app.use(DiscordMessageComponents, {
		avatars: {
			djs: 'https://i.imgur.com/q38P21b.png',
		},
		profiles: {
			user: {
				author: 'User',
				avatar: 'djs',
			},
			bot: {
				author: 'SlickBot',
				avatar: 'https://i.imgur.com/q38P21b.png',
				bot: true,
			},
			default: {
				author: 'Default',
				avatar: 'https://i.imgur.com/9o6etMo.png',
				bot: false
			}
		},
	});

	app.component('DiscordButton', DiscordButton);
	app.component('DiscordButtons', DiscordButtons);
	app.component('DiscordEmbed', DiscordEmbed);
	app.component('DiscordEmbedField', DiscordEmbedField);
	app.component('DiscordEmbedFields', DiscordEmbedFields);
	app.component('DiscordInteraction', DiscordInteraction);
	app.component('DiscordMarkdown', DiscordMarkdown);
	app.component('DiscordMention', DiscordMention);
	app.component('DiscordMessage', DiscordMessage);
	app.component('DiscordMessages', DiscordMessages);
	app.component('DiscordReaction', DiscordReaction);
	app.component('DiscordReactions', DiscordReactions);

	app.component('DocsLink', DocsLink);
	app.component('ResultingCode', ResultingCode);
});
