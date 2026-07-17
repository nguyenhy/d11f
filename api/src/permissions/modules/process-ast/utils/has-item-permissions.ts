import type { Permission } from '@d11f/types';

export function hasItemPermissions(permission: Permission) {
	return permission.permissions !== null && Object.keys(permission.permissions).length > 0;
}
