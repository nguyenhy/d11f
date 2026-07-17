import type { Accountability, SchemaOverview } from '@d11f/types';
import type { Knex } from 'knex';

export interface Context {
	schema: SchemaOverview;
	knex: Knex;
	accountability?: Accountability;
}
