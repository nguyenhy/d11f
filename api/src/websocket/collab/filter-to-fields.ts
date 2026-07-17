import type { Filter, SchemaOverview } from '@d11f/types';
import { deepMapFilter } from '@d11f/utils';

export function filterToFields(filter: Filter, collection: string, schema: SchemaOverview): string[] {
	const fields: Set<string> = new Set();

	deepMapFilter(
		filter,
		([key, _value], context) => {
			if (context.leaf && context.field) {
				fields.add([...context.path, key].join('.'));
			}

			return undefined;
		},
		{ collection, schema },
	);

	return Array.from(fields);
}
