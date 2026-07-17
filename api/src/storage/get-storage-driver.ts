import type { Driver } from '@d11f/storage';

export const _aliasMap: Record<string, string> = {
	local: '@d11f/storage-driver-local',
	s3: '@d11f/storage-driver-s3',
	supabase: '@d11f/storage-driver-supabase',
	gcs: '@d11f/storage-driver-gcs',
	azure: '@d11f/storage-driver-azure',
	cloudinary: '@d11f/storage-driver-cloudinary',
};

export const getStorageDriver = async (driverName: string): Promise<typeof Driver> => {
	if (driverName in _aliasMap) {
		driverName = _aliasMap[driverName]!;
	} else {
		throw new Error(`Driver "${driverName}" doesn't exist.`);
	}

	return (await import(driverName)).default;
};
