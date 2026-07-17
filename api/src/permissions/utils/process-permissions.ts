import type { Accountability, Permission } from '@d11f/types';
import { parseFilter, parsePreset } from '@d11f/utils';

export interface ProcessPermissionsOptions {
	permissions: Permission[];
	accountability: Pick<Accountability, 'user' | 'role' | 'roles'>;
	permissionsContext: Record<string, any>;
}

export function processPermissions({ permissions, accountability, permissionsContext }: ProcessPermissionsOptions) {
	return permissions.map((permission) => {
		return {
			...permission,
			permissions: parseFilter(permission.permissions, accountability, permissionsContext),
			validation: parseFilter(permission.validation, accountability, permissionsContext),
			presets: parsePreset(permission.presets, accountability, permissionsContext),
		};
	});
}
