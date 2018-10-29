export const attributes = {
	token: {
		type: 'string',
		default: '',
	},
	displayType: {
		type: 'string',
		default: 'grid',
	},
	useThumbnail: {
		type: 'boolean',
		default: false,
	},
	numberCols: {
		type: 'number',
		default: 4,
	},
	numberImages: {
		type: 'number',
		default: 4,
	},
	thumbs: {
		type: 'array',
		default: [],
	},
	gridGap: {
		type: 'number',
		default: 0,
	},
	showProfile: {
		type: 'boolean',
		default: false,
	},
	profile: {
		type: 'array',
		default: [],
	},
	backgroundColor: {
		type: 'string',
		default: 'transparent',
	},
};
