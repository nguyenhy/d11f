import type { RegistryDescribeResponse, RegistryListResponse } from '@d11f/extensions-registry';
import formatTitle from '@d11f/format-title';

type Extension = RegistryListResponse['data'][number] | RegistryDescribeResponse['data'];

export const formatName = (extension: Extension) => {
	let name = extension.name;

	if (name.startsWith('@')) {
		name = name.split('/')[1]!;
	}

	if (name.startsWith('directus-extension-')) {
		name = name.substring('directus-extension-'.length);
	}

	return formatTitle(name);
};
