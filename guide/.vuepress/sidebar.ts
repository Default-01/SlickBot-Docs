export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
				'/requesting-more-content.md',
				'/whats-new.md',
			],
		}
	],
	'/commands/': [
		{
			text: 'Information',
			children: [
				'/commands/'
			],
		},
		{
			text: 'Categories',
			children: [
				'/commands/configuration',
				'/commands/moderation',
				'/commands/information',
				'/commands/utility',
				'/commands/fun',
				'/commands/misc'
			],
		}
	],
	'/guides/': [
		{
			text: 'Information',
			children: [
				'/guides/',
			],
		},
		{
			text: 'Guide Categories',
			children: [
				'/guides/moderation',
			],
		}
	],
};
