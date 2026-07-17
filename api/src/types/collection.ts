import type { Table } from '@d11f/schema';
import type { BaseCollectionMeta } from '@d11f/system-data';
import type { Field } from '@d11f/types';

export type Collection = {
	collection: string;
	fields?: Field[];
	meta: BaseCollectionMeta | null;
	schema: Table | null;
};
