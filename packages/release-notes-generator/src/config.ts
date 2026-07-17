import type { Config } from './types';

const config: Config = {
	repo: 'directus/directus',
	mainPackage: 'directus',
	typedTitles: {
		major: '⚠️ Potential Breaking Changes',
		minor: '✨ New Features & Improvements',
		patch: '🐛 Bug Fixes & Optimizations',
		none: '📎 Misc.',
	},
	untypedPackageTitles: {
		docs: '📝 Documentation',
		'tests-blackbox': '🧪 Blackbox Tests',
	},
	versionTitle: '📦 Published Versions',
	noticeType: 'major',
	// '@d11f/app' should always be listed before '@d11f/api', other packages don't matter
	packageOrder: ['@d11f/app', '@d11f/api'],
	linkedPackages: [
		// Ensure '@d11f/app' is bumped with 'directus' to reflect correct main version in app
		['directus', '@d11f/app'],
	],
};

export default config;
