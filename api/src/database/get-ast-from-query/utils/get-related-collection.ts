import type { SchemaOverview } from '@d11f/types';
import { getRelation } from '@d11f/utils';

export function getRelatedCollection(schema: SchemaOverview, collection: string, field: string): string | null {
	const relation = getRelation(schema.relations, collection, field);

	if (!relation) return null;

	if (relation.collection === collection && relation.field === field) {
		return relation.related_collection || null;
	}

	if (relation.related_collection === collection && relation.meta?.one_field === field) {
		return relation.collection || null;
	}

	return null;
}
