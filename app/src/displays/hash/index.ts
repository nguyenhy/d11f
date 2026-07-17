import { defineDisplay } from '@d11f/extensions';
import DisplayHash from './hash.vue';

export default defineDisplay({
	id: 'hash',
	name: '$t:displays.hash.hash',
	description: '$t:displays.hash.description',
	types: ['hash'],
	icon: 'fingerprint',
	component: DisplayHash,
	options: [],
});
