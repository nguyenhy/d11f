import type { Permission } from '@d11f/types';

export const DEFUAULT_PERMISSION = {
	policy: null,
	permissions: null,
	validation: null,
	presets: null,
	fields: null,
} satisfies Partial<Permission>;
