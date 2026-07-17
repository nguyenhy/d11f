import { Role, User } from '@d11f/types';

export type ShareUser = {
	share: string;
	admin_access: boolean;
	app_access: boolean;
};

export type AppUser = User & {
	admin_access: boolean;
	app_access: boolean;
	enforce_tfa: boolean;
	roles: Role[];
};
