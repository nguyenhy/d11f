import { ForbiddenError } from '@d11f/errors';
import type { PrimaryKey, SchemaOverview } from '@d11f/types';
import { isValidUuid } from './is-valid-uuid.js';

/**
 * Validate keys based on its type
 */
export function validateKeys(
	schema: SchemaOverview,
	collection: string,
	keyField: string,
	keys: PrimaryKey | PrimaryKey[],
) {
	if (Array.isArray(keys)) {
		for (const key of keys) {
			validateKeys(schema, collection, keyField, key);
		}
	} else {
		const primaryKeyFieldType = schema.collections[collection]?.fields[keyField]?.type;

		if (primaryKeyFieldType === 'uuid' && !isValidUuid(String(keys))) {
			throw new ForbiddenError();
		} else if (primaryKeyFieldType === 'integer' && !Number.isInteger(Number(keys))) {
			throw new ForbiddenError();
		}
	}
}
