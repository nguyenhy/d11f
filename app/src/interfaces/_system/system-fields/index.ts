import { defineInterface } from '@d11f/extensions';
import InterfaceSystemFields from './system-fields.vue';

export default defineInterface({
	id: 'system-fields',
	name: '$t:interfaces.fields.name',
	icon: 'search',
	component: InterfaceSystemFields,
	types: ['csv', 'json'],
	options: [],
	system: true,
});
